import image from '../../images/proyect-test.png';
import './Proyect.css';

export function Proyect () {
  return (
    <div className="Proyect">
      <img src={image} alt=""  className="Proyect-image" />
      <div className="Proyect-title">
        <div className="Proyect-title__title">
          <h2 className="Proyect-title__title-name">Pelisflix</h2>
          <p className="Proyect-title__title-route">Desarrollo Front-End</p>
        </div>

        <div className="Proyect-title__button">
          <button>Ver código</button>
          <button>Ver proyecto</button>
        </div>
      </div>

      <p className="Proyect-text">Desarrolla una aplicación de películas, en la cual puedas acceder a su información, como actores, comentarios, categoría y demás. Desarrolla una aplicación de películas, en la cual puedas acceder a su información, como actores, comentarios, categoría y demás.</p>
    </div>
  )
}