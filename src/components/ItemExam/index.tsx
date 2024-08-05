import { useState } from "react";
import { FaBatteryQuarter } from "react-icons/fa";
import { ModalTakeExam } from "../ModalTakeExam";
import image from '../../images/js-test.png';
import { ExamI } from "../../types";
import './ItemExam.css';

type Props = {
  exam: ExamI;
}

export function ItemExam ({ exam }: Props) {
  const [modal, setModal] = useState(false);

  return (
    <div className="ItemExam">

      <div className="ItemExam-info">
        <h4 className="ItemExam-info__title">{exam?.name}</h4>
        <button className='ItemExam-info__level button'>
          <span><FaBatteryQuarter /></span>
          {exam?.difficulty}
        </button>
        <button 
          className="ItemExam-info__takeExam button"
          onClick={() => setModal(!modal)}
        >Tomar examen</button>
      </div>

      <div className="ItemExam-image">
        <img src={image} alt="" />
      </div>

      {modal && <ModalTakeExam setModal={setModal} />}
    </div>
  )
}