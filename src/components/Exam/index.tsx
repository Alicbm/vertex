import './Exam.css';

export function Exam () {
  return (
    <div className="Exam">

      <div className="Exam-question">
        <p className="Exam-question__text">¿Cuál de las siguientes declaraciones es correcta sobre el alcance (scope) en JavaScript?</p>
      </div>

      <div className="Exam-options">
        
        <div className="Exam-options__option">
          <span className="Exam-options__option-border">
            <span className="Exam-options__option-border__item"></span>
          </span>
          <p className="Exam-options__option-text">En JavaScript, solo hay un tipo de alcance llamado "global scope"</p>
        </div>

        <div className="Exam-options__option">
          <span className="Exam-options__option-border">
            <span className="Exam-options__option-border__item"></span>
          </span>
          <p className="Exam-options__option-text">En JavaScript, solo hay un tipo de alcance llamado "global scope"</p>
        </div>

        <div className="Exam-options__option">
          <span className="Exam-options__option-border">
            <span className="Exam-options__option-border__item"></span>
          </span>
          <p className="Exam-options__option-text">En JavaScript, solo hay un tipo de alcance llamado "global scope"</p>
        </div>

        <div className="Exam-options__option">
          <span className="Exam-options__option-border">
            <span className="Exam-options__option-border__item"></span>
          </span>
          <p className="Exam-options__option-text">En JavaScript, solo hay un tipo de alcance llamado "global scope"</p>
        </div>

      </div>

      <div className="Exam-buttons">
        <button className='button'>Cambiar</button>
        <button className='Exam-buttons__confirm button'>Confirmar</button>
      </div>

    </div>
  )
}