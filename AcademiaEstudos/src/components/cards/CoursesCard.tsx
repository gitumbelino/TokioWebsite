import type { CourseCard } from "../../types/cards";


interface CoursesCardProps {
    course: CourseCard;
}

export default function CourseCard({ course }: CoursesCardProps) {

    return (

        // card
        <div >
            <div >

                {/* 1/4 --------------- */}
                <div>
                    <img src="" alt="" />
                </div>

                {/* 2/4 --------------- */}
                <div className="exams-card__left">
                    {/* header and body------------------ */}
                    <div>
                        <h2 className="exams-card__acronym">
                            {course.name}</h2>
                        <p className="exams-card__name">
                            {course.description}</p>
                    </div>
                    {/* footer------------------ */}
                    <div>
                        <span>{course.duration}</span>
                        <a href="#" className="exams-card__details">
                            Details
                        </a>
                    </div>
                </div>

                {/* 3/4------------------ */}
                <div>
                    <div>

                        <h4>
                            <i className="fa-solid fa-clipboard-list">
                            </i>
                            Conteúdo do Curso
                        </h4>
                        <ul className="exams-card__list">
                            {course.content.map((content, index) => (
                                <li key={index}>
                                    <i className="fa-solid fa-check"></i> {content}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* 3/4------------------ */}
                <div>
                    <div>
                        <h4><i className="fa-solid fa-clipboard-list"></i> Saídas Profissionais</h4>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}