import { GrFormNextLink } from "react-icons/gr";
import { IoChevronBackOutline, IoChevronForwardOutline  } from "react-icons/io5";
import './Pagination.css';

export function Pagination () {
  return (
    <div className="Pagination">
      
      <div className="Pagination-routes">
        <button className="button">Explorar las Rutas de Aprendizaje</button>
      </div>

      <div className="Pagination-nextPage">
        <button className="button">Siguiente Página <GrFormNextLink /> </button>
      </div>

      <div className="Pagination-page">
        <p className="Pagination-page__page">Página</p>
        <button className="Pagination-page__back button"><IoChevronBackOutline /></button>
        <button className="Pagination-page__number button">1</button>
        <button className="Pagination-page__next button"><IoChevronForwardOutline /></button>
      </div>

    </div>
  )
}