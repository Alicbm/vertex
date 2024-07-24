import { Course } from "../../../../components/Course";
import { InputCourse } from "../../../../components/InputCourse";
import './Courses.css';

export function Courses () {
  return (
    <div className="Courses">

      <div className="Courses-search">
        <InputCourse />

        <div className="Courses-search__filter"></div>
      </div>

      <div className="Courses-title">
        <p className="Courses-title__title">Accede a todos los cursos disponibles</p>
        <button className="Courses-title__button button">Ver todos los cursos</button>
      </div>

      <div className="Courses-courses">
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </div>

    </div>
  )
}