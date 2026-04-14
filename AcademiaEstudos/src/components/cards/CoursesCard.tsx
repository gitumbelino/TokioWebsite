import type { CourseCard } from "../../types/cards";

interface CoursesCardProps {
    course: CourseCard;
}

export default function CourseCard({ course }: CoursesCardProps) {
    return (
        <div className="courses-card">

            {/* IMAGE --- 1/4 */}
            <div className="courses-card__image">
                <img src={course.img} alt={course.name} />
            </div>

            {/* LEFT PANEL --- 1/4 */}
            <div className="courses-card__left">
                <div>
                    <h2 className="courses-card__name">{course.name}</h2>
                    <p className="courses-card__description">{course.description}</p>
                </div>
                <div className="courses-card__footer">
                    <span className="courses-card__duration">{course.duration}</span>
                    <span className="courses-card__format">{course.format}</span>
                </div>
            </div>

            {/* RIGHT PANEL --- 2/4 */}
            <div className="courses-card__right">

                {/* Content */}
                <div className="courses-card__section">
                    <h4 className="courses-card__section-title">
                        <i className="fa-solid fa-book"></i> Conteúdo do Curso
                    </h4>
                    <ul className="courses-card__list">
                        {course.content.map((item, index) => (
                            <li key={index}>
                                <i className="fa-solid fa-check"></i> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Careers */}
                <div className="courses-card__section">
                    <h4 className="courses-card__section-title">
                        <i className="fa-solid fa-crosshairs"></i> Saídas Profissionais
                    </h4>
                    <ul className="courses-card__list courses-card__list--careers">
                        {course.careers.map((item, index) => (
                            <li key={index}>
                                <i className="fa-solid fa-chevron-right"></i> {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
