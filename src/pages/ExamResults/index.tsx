import { FaCircleCheck } from "react-icons/fa6";
import "./ExamResults.css";

export function ExamResults() {
  return (
    <div className="ExamResults">
      <div className="ExamResults-header">
        <div className="ExamResults-header__title">
          <h1>¡Felicidades!</h1>
          <p>Has aprobado el examen, continua aprendiendo</p>
        </div>

        <div className="ExamResults-header__calification">
          <p>Calificación</p>
          <p>9.23</p>
          <p>14/16</p>
        </div>
      </div>

      <div className="ExamResults-body">
        {/* Respuesta seleccionada */}
        <div className="ExamResults-body__item">
          <p className="ExamResults-body__item-question">
            1. ¿Cuál de las siguientes declaraciones es correcta sobre el
            alcance (scope) en JavaScript?
          </p>

          <div className="ExamResults-body__item-answer">
            <p>
              En JavaScript, solo hay un tipo de alcance llamado "global scope"
            </p>
            <button className="button">
              <span>
                <FaCircleCheck />
              </span>
              Correcta
            </button>
          </div>
        </div>

        {/* Respuesta seleccionada */}
        <div className="ExamResults-body__item">
          <p className="ExamResults-body__item-question">
            1. ¿Cuál de las siguientes declaraciones es correcta sobre el
            alcance (scope) en JavaScript?
          </p>

          <div className="ExamResults-body__item-answer">
            <p>
              En JavaScript, solo hay un tipo de alcance llamado "global scope"
            </p>
            <button className="button">
              <span>
                <FaCircleCheck />
              </span>
              Correcta
            </button>
          </div>
        </div>

        {/* Respuesta seleccionada */}
        <div className="ExamResults-body__item">
          <p className="ExamResults-body__item-question">
            1. ¿Cuál de las siguientes declaraciones es correcta sobre el
            alcance (scope) en JavaScript?
          </p>

          <div className="ExamResults-body__item-answer">
            <p>
              En JavaScript, solo hay un tipo de alcance llamado "global scope"
            </p>
            <button className="button">
              <span>
                <FaCircleCheck />
              </span>
              Correcta
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="ExamResults-body__item-buttons">
          <button className="button">Inicio</button>
          <button className="button">Continuar aprendiendo</button>
        </div>
      </div>
    </div>
  );
}
