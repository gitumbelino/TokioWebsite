interface ExamsBadgeProps {
    label: string;
    variant: "open" | "waiting" | "predicted";
}

export default function ExamsBadge({
    label,
    variant
}: ExamsBadgeProps) {

    const badgeIcons = {
        open: "fa-solid fa-door-open",
        waiting: "fa-solid fa-clock",
        predicted: "fa-solid fa-calendar-check"
    }
    return (
        <span className="exams__badge">
            <i className={badgeIcons[variant]}></i>
            {label}
        </span>
    )
}
