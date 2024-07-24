import { Proyect } from "../../../../components/Proyect";
import './Proyects.css';

export function Proyects () {
  return (
    <div className="Proyects">
      
      <div className="Proyects-title">
        <h4 className="Proyects-title__littleTitle">Practica tus conocimientos</h4>
        <h2 className="Proyects-title__title">Desarrollando Proyectos Prácticos</h2>
        <hr className="Proyects-title__border" />
        <p className="Proyects-title__text">3Avanza fue desarrollado con el objetivo de ayudar a personas interesadas en aprender sobre temas como desarrollo web, análisis de datos, bases de datos y más.</p>
      </div>
      
      <div className="Proyects-proyects">
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
      </div>
    </div>
  )
}