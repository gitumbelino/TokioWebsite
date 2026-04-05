import ExamsCard from "../components/cards/ExamsCard";
import type { ExamCard } from "../types/cards";

interface ExamsProps {
    examsData: ExamCard[];
}

export default function Exams({ examsData }: ExamsProps) {
    return (
        <section className="section section--light">
            <div className="container">
                <div className="section__header section__header--centered">
                    <h2 className="section__title">Concursos em Destaque</h2>
                    <div className="section__divider"></div>
                </div>
                <div className="exams__list">
                    {examsData.map((exam) => (
                        <ExamsCard key={exam.id} exam={exam} />
                    ))}
                </div>
            </div>
        </section>
    );
}

