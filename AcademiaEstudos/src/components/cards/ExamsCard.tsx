import type { ExamCard } from "../../types/cards";
import ExamsBadge from "../badges/ExamsBadge";



interface ExamsCardProps {
    exam: ExamCard;
}

export default function ExamsCard({ exam }: ExamsCardProps) {
    return (
        <div className="exams-card">
            <div className="exams-card__left">
                <h2 className="exams-card__acronym">{exam.acronym}</h2>
                <p className="exams-card__name">{exam.name}</p>
                <ExamsBadge label={exam.badgeLabel} variant={exam.badge} />
            </div>

            <div className="exams-card__right">
                <div className="exams-card__grid">
                    <div>
                        <h4 className="exams-card__section-title">
                            <i className="fa-solid fa-clipboard-list"></i> Requisitos
                        </h4>
                        <ul className="exams-card__list">
                            {exam.requirements.map((req, index) => (
                                <li key={index}>
                                    <i className="fa-solid fa-check"></i> {req}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="exams-card__section-title">
                            <i className="fa-solid fa-route"></i> Fases
                        </h4>
                        <div className="exams-card__tags">
                            {exam.fases.map((fase, index) => (
                                <span key={index} className="exams-card__tag">{fase}</span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="exams-card__section-title">
                            <i className="fa-solid fa-book-open"></i> Programa
                        </h4>
                        <div className="exams-card__tags">
                            {exam.subjects.map((subject, index) => (
                                <span key={index} className="exams-card__tag">{subject}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="exams-card__footer">
                    <a href={exam.url} className="exams-card__link">
                        Ver Detalhes Completos <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
