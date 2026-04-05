interface TimetableBadgeProps {
  label: string;
  color: string;
}

export default function TimetableBadge({ label, color }: TimetableBadgeProps) {
  return (
    <span className={`timetable__badge timetable__badge--${color}`}>
      {label}
    </span>
  )
}
