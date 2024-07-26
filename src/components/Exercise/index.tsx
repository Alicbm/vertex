import { useState } from "react";
import { FaBatteryQuarter } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaAngleDown } from "react-icons/fa6";
import './Exercise.css';  

export function Exercise () {
  const [result, setResult] = useState(false);

  return (
    <div className={`Exercise ${result ? 'expanded' : ''}`}>
      
      <div className="Exercise-header">
        <h4 className="Exercise-header__title">Ejercicios 1</h4>

        <div className="Exercise-header__buttons">
          <button className="button">
            <span><FaBatteryQuarter /></span>
            Básica
          </button>

          <button className="button">
            <span><SiJavascript /></span>
            Javascript
          </button>
        </div>

      </div>

      <p className="Exercise-text">Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.</p>
      
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