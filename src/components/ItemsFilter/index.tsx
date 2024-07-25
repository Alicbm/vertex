import { FaChevronDown } from "react-icons/fa";
import './ItemsFilter.css';

export function ItemsFilter () {
  return (
    <div className="ItemsFilter">

      <div className="ItemsFilter-item button">
        <p className="ItemsFilter-item__text">Ruta de Aprendizaje</p>
        <span className="ItemsFilter-item__icon"><FaChevronDown /></span>
      </div>

      <div className="ItemsFilter-item button">
        <p className="ItemsFilter-item__text">Herramienta</p>
        <span className="ItemsFilter-item__icon"><FaChevronDown /></span>
      </div>

      <div className="ItemsFilter-item button">
        <p className="ItemsFilter-item__text">Dificultad</p>
        <span className="ItemsFilter-item__icon"><FaChevronDown /></span>
      </div>

    </div>
  )
}