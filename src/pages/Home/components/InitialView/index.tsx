import './initialView.css';

export function InitialView () {
  return (
    <div className="InitialView">
      <div className="InitialView-content">
        
        <h1 className="InitialView-content__title">Formación <span>gratuita</span> para un mundo en constante <span>evolución</span></h1>
        <p className="InitialView-content__text">Aprende a tu ritmo y prepárate para los desafíos del futuro sin costo alguno. ¡Empieza hoy y transforma tu carrera!</p>
        
        <div className="InitialView-content__button">
          <button className='button InitialView-content__button-routes'>Explorar rutas</button>
          <button className='button InitialView-content__button-courses'>Explorar cursos</button>
        </div>

      </div>
    </div>
  )
}