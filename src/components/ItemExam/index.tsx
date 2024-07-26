import { FaBatteryQuarter } from "react-icons/fa";
import image from '../../images/js-test.png';
import './ItemExam.css';

export function ItemExam () {
  return (
    <div className="ItemExam">

      <div className="ItemExam-info">
        <h4 className="ItemExam-info__title">Examen de Javascript</h4>
        <button className='ItemExam-info__level button'>
          <span><FaBatteryQuarter /></span>
          Básico
        </button>
        <button className="ItemExam-info__takeExam button">Tomar examen</button>
      </div>

      <div className="ItemExam-image">
        <img src={image} alt="" />
      </div>
    </div>
  )
}