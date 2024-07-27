import { useState } from "react";
import { FaBackward, FaForward } from "react-icons/fa";
import { MainView } from "../../components/MainView";
import { Course } from "../../components/Course";
import image from '../../images/course-test.png';
import './CourseSelectedPage.css';

export function CourseSelectedPage () {
  const [modal, setModal] = useState(false);
  
  return (
    <MainView 
      modal={modal} 
      setModal={setModal}
      title="Curso Básico de Javascript"
    >
      <div className="CourseSelectedPage">

        <div className="CourseSelectedPage-video">
          <img 
            src={image} 
            alt="" 
            className="CourseSelectedPage-video__video"
          />

          <div className="CourseSelectedPage-video_buttons">
            <button className="CourseSelectedPage-video_buttons-takeExam button">
              Tomar examen
            </button>

            <div className="CourseSelectedPage-video_buttons-nextBack">
              <button className="button">
                <span><FaBackward  /></span>
                Anterior
              </button>
              <button className="button">
                Siguiente
                <span><FaForward  /></span>
              </button>
            </div>
          </div>
        </div>

        <div className="CourseSelectedPage-info">

          <div className="CourseSelectedPage-info__definition">
            <h2 className="CourseSelectedPage-info__title">¿Qués es Javascript?</h2>
            <p>JavaScript es un lenguaje de programación o secuencias de comandos que te permite crear contenido dinámico en páginas web. Cuando una página web va más allá de mostrar información estática y necesita actualizaciones oportunas, animaciones, mapas interactivos o controlar multimedia, JavaScript suele estar involucrado. Es la tercera capa del pastel de las tecnologías web estándar, complementando HTML (para estructurar el contenido) y CSS (para aplicar estilo). Con unas pocas líneas de código, puedes lograr sorprendentes funcionalidades en tu sitio web.</p>
          </div>

          <ul className="CourseSelectedPage-info__items">
            <h2 className="CourseSelectedPage-info__title">¿Por qué aprender Javascript?</h2>

            <li className="CourseSelectedPage-info__items-item">
              <strong>Amplia demanda laboral: </strong>
              JavaScript es uno de los lenguajes de programación más utilizados en el desarrollo web. Muchas empresas buscan desarrolladores con habilidades en JavaScript, lo que aumenta tus oportunidades de empleo.
            </li>
            <li className="CourseSelectedPage-info__items-item">
              <strong>Desarrollo web: </strong>
              Si estás interesado en crear sitios web interactivos, JavaScript es esencial. Puedes agregar funcionalidades como formularios dinámicos, animaciones, galerías de imágenes y mucho más.
            </li>
            <li className="CourseSelectedPage-info__items-item">
              <strong>Frameworks y bibliotecas: </strong>
              Existen numerosos frameworks y bibliotecas basados en JavaScript, como React, Angular y Vue.js. Estas herramientas te permiten construir aplicaciones web más rápidamente y con mayor eficiencia.
            </li>
            <li className="CourseSelectedPage-info__items-item">
              <strong>Aplicaciones móviles:</strong>
              Con React Native o NativeScript, puedes usar tus habilidades en JavaScript para desarrollar aplicaciones móviles para iOS y Android.
            </li>
            <li className="CourseSelectedPage-info__items-item">
              <strong>Aprendizaej progresivo: </strong>
              JavaScript es un lenguaje versátil que se adapta a diferentes niveles de experiencia. Puedes comenzar con conceptos básicos y luego profundizar en temas más avanzados.
            </li>
          </ul>

          <div className="CourseSelectedPage-links">
            <h2 className="CourseSelectedPage-info__title">Links de interés</h2>

            <ul className="CourseSelectedPage-links__list">
              <li className="CourseSelectedPage-links__list-item">Mozilla</li>
              <li className="CourseSelectedPage-links__list-item">Mozilla</li>
              <li className="CourseSelectedPage-links__list-item">Mozilla</li>
              <li className="CourseSelectedPage-links__list-item">Mozilla</li>
              <li className="CourseSelectedPage-links__list-item">Mozilla</li>
            </ul>
          </div>

        </div>

        <div className="CourseSelectedPage-courses">
          <h2 className="CourseSelectedPage-info__title">Otros cursos que pueden interesarte</h2>

          <div className="CourseSelectedPage-courses__courses">
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
          </div>
        </div>

      </div>
    </MainView>
  )
}