interface TimetableBadgeProps {
  label: string;
}

export default function TimetableBadge({ label }: TimetableBadgeProps) {
  return (
    <span className="timetable__badge">
      {label}
    </span>
  );
}
