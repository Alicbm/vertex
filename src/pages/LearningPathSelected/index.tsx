import { useState } from "react";
import { BsPlusCircleFill, BsPlayCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { MainView } from "../../components/MainView";
import { SimpleDesignCourse } from "../../components/SimpleDesignCourse";
import './LearningPathSelected.css';

export function LearningPathSelected () {
  const [modal, setModal] = useState(false);

  return (
    <MainView 
      modal={modal} 
      setModal={setModal} 
      title="Sigue nuestra ruta de aprendizaje"
    >
      <div className="LearningPathSelected content-mainView">
        
        <div className="LearningPathSelected-name">
          <h3 className="LearningPathSelected-name__title">Desarrollo Front-End</h3>
          <button className="LearningPathSelected-name__takeExam button">
            <span><BsPlusCircleFill /></span>
            Agregar ruta
          </button>
        </div>

        <div className="LearningPathSelected-description">
          <p>El desarrollo front-end es el arte de crear interfaces web impresionantes con HTML, CSS y JavaScript. Permite diseñar experiencias digitales interactivas y atractivas, convirtiendo ideas en realidades visuales.</p>
          <p>Estudiarlo te coloca en el corazón de la innovación tecnológica, con una alta demanda y oportunidades profesionales emocionantes. Si te apasionan el diseño, la creatividad y la tecnología, el desarrollo front-end es tu camino. ¡Construye el futuro digital hoy!</p>
        </div>
        
        <div className="LearningPathSelected-buttons">
          <button className="button">
            <span><BsPlayCircleFill /></span>
            Iniciar ruta
          </button>
          
          <button className="button">
            <span><FaCheckCircle /></span>
            Tomar examen
          </button>
        </div>

        <div className="LearningPathSelected-courses">

          <div className="LearningPathSelected-courses__level">
            <h4 className="LearningPathSelected-courses__level-title">Cursos básicos</h4>

            <div className="LearningPathSelected-courses__level-courses">
              <SimpleDesignCourse />
              <SimpleDesignCourse />
              <SimpleDesignCourse />
              <SimpleDesignCourse />
            </div>

          </div>
          
          <div className="LearningPathSelected-courses__level">
            <h4 className="LearningPathSelected-courses__level-title">Cursos básicos</h4>

            <div className="LearningPathSelected-courses__level-courses">
              <SimpleDesignCourse />
              <SimpleDesignCourse />
              <SimpleDesignCourse />
              <SimpleDesignCourse />
            </div>

          </div>

        </div>

      </div>
    </MainView>
  )
}