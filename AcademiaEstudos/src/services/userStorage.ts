const USERS_KEY = 'academia_users';
const SESSION_KEY = 'academia_session';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface SessionUser {
  id: string;
  name: string;
  email: string;
}

// --- base de dados (localStorage) ---

function getUsers(): User[] {
  const raw = localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(users: User[]): void {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser(name: string, email: string, password: string): { success: boolean; error?: string } {
  const users = getUsers();

  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, error: 'Este e-mail já está registado.' };
  }

  const newUser: User = {
    id: crypto.randomUUID(),
    name,
    email,
    password,
  };

  saveUsers([...users, newUser]);
  return { success: true };
}

export function loginUser(email: string, password: string): { success: boolean; error?: string } {
  const users = getUsers();
  const user = users.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );

  if (!user) {
    return { success: false, error: 'E-mail ou palavra-passe incorretos.' };
  }

  const session: SessionUser = { id: user.id, name: user.name, email: user.email };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return { success: true };
}

export function getSession(): SessionUser | null {
  const raw = sessionStorage.getItem(SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function logoutUser(): void {
  sessionStorage.removeItem(SESSION_KEY);
}
