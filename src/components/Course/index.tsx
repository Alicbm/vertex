import { IoIosBatteryCharging } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import image from '../../images/course-test.png';
import './Course.css';

export function Course () {
  return (
    <div className="Course">
      
      <div className="Course-image">
        <img 
          src={image}
          alt="" 
          className="Course-image__image"
        />
        <span className="Course-image__icon"><IoHeartCircleOutline /></span>
      </div>

      <p className="Course-title">Curso Básico de Javascript</p>
      
      <div className="Course-takeCourse">
        <div className="Course-takeCourse__level">
          <span><IoIosBatteryCharging /></span>
          <p>Básico</p>
        </div>
        
        <button className="Course-takeCourse__button">Tomar curso</button>
      </div>

    </div>
  )
}