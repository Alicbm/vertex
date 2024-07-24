import { Exam } from "../../../../components/Exam";
import './Exams.css';

export function Exams () {
  return (
    <div className="Exams">

      <div className="Exams-info">
        <h2 className="Exams-info__title">Dale un vistazo a algunas de las preguntas en nuestros exámenes</h2>
        <p className="Exams-info__text">Selecciona tu ruta de interés y prueba respondiendo algunas preguntas. ¿Qué ocurre si fallas? ¡Nada! Tenemos rutas y cursos orientados para que puedas aprender todo lo que necesitas</p>

        <div className="Exams-info__routes">
          <button className="button">Desarrollo Front-End</button>
          <button className="button">Desarrollo Front-End</button>
          <button className="button">Desarrollo Front-End</button>
          <button className="button">Desarrollo Front-End</button>
          <button className="button">Desarrollo Front-End</button>
        </div>
      </div>
      
      <div className="Exams-exam">
        <p className="Exams-exam__text">Desarrollo Front-End</p>
        <Exam />
      </div>
    </div>
  )
}