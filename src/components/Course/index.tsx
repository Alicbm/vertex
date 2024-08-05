import { IoIosBatteryCharging } from "react-icons/io";
import { IoHeartCircleOutline } from "react-icons/io5";
import { CourseI } from "../../types";
import image from '../../images/course-test.png';
import './Course.css';

type Props = {
  course: CourseI;
}

export function Course ({ course }: Props) {
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

      <p className="Course-title">{course?.name}</p>
      
      <div className="Course-takeCourse">
        <div className="Course-takeCourse__level">
          <span><IoIosBatteryCharging /></span>
          <p>{course?.difficulty}</p>
        </div>
        
        <button className="Course-takeCourse__button">Tomar curso</button>
      </div>

    </div>
  )
}