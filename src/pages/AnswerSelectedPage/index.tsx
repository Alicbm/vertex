import { GoClockFill } from "react-icons/go";
import './AnswerSelectedPage.css';

export function AnswerSelectedPage () {
  return (
    <div className="AnswerSelectedPage">

      {/* Header (titulo) */}
      <div className="AnswerSelectedPage-header">
        <h1 className="AnswerSelectedPage-header__title">
          Opciones seleccionadas
        </h1>

        <div className="AnswerSelectedPage-header__buttons">
          <div className="AnswerSelectedPage-header__buttons-timer">
            <p className="AnswerSelectedPage-header__buttons-timer__time">
              Tiempo restante
            </p>

            <p className="AnswerSelectedPage-header__buttons-timer__counter">
              <span>
                <GoClockFill />
              </span>
              18:34
            </p>
          </div>

          <button className="AnswerSelectedPage-header__buttons-button button">
            Enviar
          </button>
        </div>
      </div>

      {/* Opciones de respuestas */}
      <div className="AnswerSelectedPage-body">
        
        {/* Respuesta seleccionada */}
        <div className="AnswerSelectedPage-body__item">
          <p className="AnswerSelectedPage-body__item-question">
            1. ¿Cuál de las siguientes declaraciones es correcta sobre el
            alcance (scope) en JavaScript?
          </p>

          <div className="AnswerSelectedPage-body__item-answer">
            <p>
              En JavaScript, solo hay un tipo de alcance llamado "global scope"
            </p>
            <button className="button">Cambiar</button>
          </div>
        </div>

        {/* Respuesta seleccionada */}
        <div className="AnswerSelectedPage-body__item">
          <p className="AnswerSelectedPage-body__item-question">
            1. ¿Cuál de las siguientes declaraciones es correcta sobre el
            alcance (scope) en JavaScript?
          </p>

          <div className="AnswerSelectedPage-body__item-answer">
            <p>
              En JavaScript, solo hay un tipo de alcance llamado "global scope"
            </p>
            <button className="button">Cambiar</button>
          </div>
        </div>

         {/* Respuesta seleccionada */}
         <div className="AnswerSelectedPage-body__item">
          <p className="AnswerSelectedPage-body__item-question">
            1. ¿Cuál de las siguientes declaraciones es correcta sobre el
            alcance (scope) en JavaScript?
          </p>

          <div className="AnswerSelectedPage-body__item-answer">
            <p>
              En JavaScript, solo hay un tipo de alcance llamado "global scope"
            </p>
            <button className="button">Cambiar</button>
          </div>
        </div>

         {/* Respuesta seleccionada */}
         <div className="AnswerSelectedPage-body__item">
          <p className="AnswerSelectedPage-body__item-question">
            1. ¿Cuál de las siguientes declaraciones es correcta sobre el
            alcance (scope) en JavaScript?
          </p>

          <div className="AnswerSelectedPage-body__item-answer">
            <p>
              En JavaScript, solo hay un tipo de alcance llamado "global scope"
            </p>
            <button className="button">Cambiar</button>
          </div>
        </div>

        <div className="AnswerSelectedPage-body__send">
          <i>¡Vas por buen camino, sigue así!</i>
          <button className="button">Enviar</button>
        </div>

      </div>
    </div>
  );
}