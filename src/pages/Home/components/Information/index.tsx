import { IoBookmarksSharp } from "react-icons/io5";
import { ItemsOfSectionPages } from "./components/ItemsOfSectionPages";
import './Information.css';

export function Information () {
  return (
    <div className="Information">
      <div className="Information-title">
        <h4 className="Information-title__littleTitle">Desarrollado por</h4>
        <h2 className="Information-title__title">Estudiantes para Estudiantes</h2>
        <hr className="Information-title__border" />
        <p className="Information-title__text">3Avanza fue desarrollado con el objetivo de ayudar a personas interesadas en aprender sobre temas como desarrollo web, análisis de datos, bases de datos y más. En esta plataforma, encontrarás los mejores cursos sobre cada herramienta a aprender, provenientes de diversas fuentes. Además, este conocimiento se complementa con exámenes evaluativos, retos prácticos (incluyendo el código disponible), ejercicios para mejorar tu lógica como desarrollador y más contenido de soporte, todo diseñado para llevarte a dominar cada uno de los temas de la mejor manera.</p>
      </div>

      <div className="Information-items">
        <ItemsOfSectionPages 
          icon={<IoBookmarksSharp /> }
          title="Cursos"
          text="Accede a +100 cursos"
        />
        <ItemsOfSectionPages 
          icon={<IoBookmarksSharp /> }
          title="Cursos"
          text="Accede a +100 cursos"
        />
        <ItemsOfSectionPages 
          icon={<IoBookmarksSharp /> }
          title="Cursos"
          text="Accede a +100 cursos"
        />
        <ItemsOfSectionPages 
          icon={<IoBookmarksSharp /> }
          title="Cursos"
          text="Accede a +100 cursos"
        />
      </div>
    </div>
  )
}