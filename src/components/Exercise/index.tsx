import { useState } from "react";
import { FaBatteryQuarter } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa6";
import { ExerciseI } from "../../types";
import './Exercise.css';  

type Props = {
  exercise: ExerciseI;
}

export function Exercise ({ exercise }: Props) {
  const [result, setResult] = useState(false);

  return (
    <div className={`Exercise ${result ? 'expanded' : ''}`}>
      
      <div className="Exercise-header">
        <h4 className="Exercise-header__title">Ejercicios {String(exercise?.id)}</h4>

        <div className="Exercise-header__buttons">
          <button className="button">
            <span><FaBatteryQuarter /></span>
            {exercise?.difficulty}
          </button>

          <button className="button">
            <span><SiJavascript /></span>
            {exercise?.tool}
          </button>
        </div>

      </div>

      <p className="Exercise-text">{exercise?.test}</p>
      
      <div 
        className="Exercise-solution"
        onClick={() => setResult(!result)}
      >
        <h5 className="Exercise-solution__title">Solución</h5>
        <span className="Exercise-solution__icon"><FaAngleDown /></span>
      </div>
      
      {
        result && <div className="Exercise-image"></div>
      }

    </div>
  )
}