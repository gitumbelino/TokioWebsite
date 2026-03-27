// ============================================================
// create-tasks.mjs
// Reads tasks from design-tasks.mjs and pushes them to GitHub
// Run: node create-tasks.mjs
// Requires: Node 18+ (uses built-in fetch)
// Both files must be in the same folder
// ============================================================

import { LABELS, TASKS } from "./tasks/dev-tasks.mjs";
import { config } from "dotenv";
config({ path: "../.env" });

// ------------------------------------------------------------
// CONFIG — fill in your details here
// ------------------------------------------------------------
const CONFIG = {

  token: process.env.GITHUB_TOKEN,      // your token (set in .env)
  username: "gitumbelino",           // your GitHub username
  repo: "TokioWebsite",       // your repo name
  projectNumber: 8                // from the project URL
};

// ------------------------------------------------------------
// HELPERS — REST API
// ------------------------------------------------------------

const BASE = "https://api.github.com";

const headers = {
  Authorization: `Bearer ${CONFIG.token}`,
  Accept: "application/vnd.github+json",
  "Content-Type": "application/json"
};

async function createLabel(label) {
  const res = await fetch(
    `${BASE}/repos/${CONFIG.username}/${CONFIG.repo}/labels`,
    { method: "POST", headers, body: JSON.stringify(label) }
  );
  if (res.status === 422) {
    console.log(`  ⚠️  Label "${label.name}" already exists — skipping`);
  } else if (!res.ok) {
    console.error(`  ❌ Failed to create label "${label.name}":`, res.status);
  } else {
    console.log(`  ✅ Label created: ${label.name}`);
  }
}

async function createIssue(task) {
  const res = await fetch(
    `${BASE}/repos/${CONFIG.username}/${CONFIG.repo}/issues`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        title: task.title,
        body: task.body,
        labels: task.labels
      })
    }
  );
  const data = await res.json();
  if (!res.ok) {
    console.error(`  ❌ Failed to create issue "${task.title}":`, data.message);
    return null;
  }
  console.log(`  ✅ Issue created: ${task.title} (#${data.number})`);
  return data.node_id;
}

// ------------------------------------------------------------
// HELPERS — GraphQL API (required for Projects v2)
// ------------------------------------------------------------

async function graphql(query, variables = {}) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables })
  });
  const data = await res.json();
  if (data.errors) {
    console.error("  ❌ GraphQL error:", JSON.stringify(data.errors, null, 2));
    return null;
  }
  return data.data;
}

async function getProjectId() {
  const data = await graphql(`
    query($login: String!, $number: Int!) {
      user(login: $login) {
        projectV2(number: $number) {
          id
        }
      }
    }
  `, { login: CONFIG.username, number: CONFIG.projectNumber });

  const id = data?.user?.projectV2?.id;
  if (!id) {
    console.error("  ❌ Could not find project. Check your username and project number.");
    return null;
  }
  console.log(`  ✅ Project found: ${id}`);
  return id;
}

async function addIssueToProject(projectId, issueNodeId) {
  const data = await graphql(`
    mutation($projectId: ID!, $contentId: ID!) {
      addProjectV2ItemById(input: { projectId: $projectId, contentId: $contentId }) {
        item { id }
      }
    }
  `, { projectId, contentId: issueNodeId });

  if (data?.addProjectV2ItemById?.item?.id) {
    console.log(`    ↗ Added to project`);
  }
}

// ------------------------------------------------------------
// MAIN
// ------------------------------------------------------------

async function main() {
  console.log("\n🏷️  Creating labels...");
  for (const label of LABELS) {
    await createLabel(label);
  }

  console.log("\n🔍 Getting project ID...");
  const projectId = await getProjectId();
  if (!projectId) return;

  console.log("\n📋 Creating issues and adding to project...");
  for (const task of TASKS) {
    const nodeId = await createIssue(task);
    if (nodeId && projectId) {
      await addIssueToProject(projectId, nodeId);
    }
  }

  console.log("\n🎉 Done! Check your GitHub Project board.");
}

main();

