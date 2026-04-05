interface ExamsBadgeProps {
    label: string;
    variant: "open" | "waiting" | "predicted";
}

export default function ExamsBadge({
    label,
    variant
}: ExamsBadgeProps) {

    const badgeStyles = {
        open: "exams__badge--open",
        waiting: "exams__badge--waiting",
        predicted: "exams__badge--predicted"
    }

    const badgeIcons = {
        open: "fa-solid fa-door-open",
        waiting: "fa-solid fa-clock",
        predicted: "fa-solid fa-calendar-check"
    }
    return (
        <span className={`exams__badge ${badgeStyles[variant]}`}>
            <i className={badgeIcons[variant]}></i>
            {label}
        </span>
    )
}