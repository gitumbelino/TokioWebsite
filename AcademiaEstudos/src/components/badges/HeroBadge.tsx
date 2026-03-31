interface HeroBadgeProps {
  label: string
}

export default function HeroBadge({ label }: HeroBadgeProps) {
  return (
    <span className="hero-badge">
      {label}
    </span>
  )
}
