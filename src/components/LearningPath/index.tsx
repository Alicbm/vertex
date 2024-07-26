import image from '../../images/learningPath-test.png'
import './LearningPath.css';

export function LearningPath () {
  return (
    <div className='LearningPath'>
      <button className='LearningPath-path button'>Ruta de aprendizaje</button>
      <h3 className='LearningPath-title'>Desarrollo Front-End</h3>
      <p className='LearningPath-text'>El desarrollo front-end es el arte de crear interfaces web impresionantes con HTML, CSS y JavaScript. Permite diseñar experiencias digitales interactivas y atractivas, convirtiendo ideas en realidades visuales.</p>
      <img  className='LearningPath-image' src={image} alt="" />

      <div className='LearningPath-buttons'>
        <button className='button'>Explorar ruta</button>
        <button className='button'>Iniciar ruta</button>
      </div>
    </div>
  )
}