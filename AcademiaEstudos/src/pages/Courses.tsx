import CoursesCard from "../components/cards/CoursesCard";
import type { CourseCard } from "../types/cards";


interface CoursesProps {
  coursesData: CourseCard[];
  // You can add props here if needed, such as a list of courses
}


export default function Courses({ coursesData }: CoursesProps) {
  return (
    <section className="section section--light">
      <div className="container">
        <div className="section__header section__header--centered">
          <h2 className="section__title">Cursos Disponíveis</h2>
          <div className="section__divider"></div>
        </div>
        <div className="courses__list">
          {coursesData.map((course) => (
            <CoursesCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </div>
    </section>
  );
}