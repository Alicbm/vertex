import { BsPlayCircleFill, BsPlusCircleFill } from "react-icons/bs";
import './SimpleDesignCourse.css';

export function SimpleDesignCourse () {
  return (
    <div className="SimpleDesignCourse">
      
      <div className="SimpleDesignCourse-courseName">
        <span><BsPlayCircleFill /></span>
        <p>Curso Básico de Javascript</p>
      </div>
      
      <button className="SimpleDesignCourse-addPath button">
        <span><BsPlusCircleFill /></span>
        Agregar ruta
      </button>

    </div>
  )
}