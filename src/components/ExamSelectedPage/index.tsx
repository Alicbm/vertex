import { GoClockFill } from "react-icons/go";
import { IoClose, IoMenu } from "react-icons/io5";
import { Exam } from "../Exam";
import './ExamSelectedPage.css';
import { useState } from "react";

export function ExamSelectedPage () {
  const [modal, setModal] = useState(false);

  return (
    <div className="ExamSelectedPage">

      <div className="ExamSelectedPage-header">
        <span 
          className="ExamSelectedPage-header__menu"
          onClick={() => setModal(!modal)}       
        ><IoMenu /></span>
        <p className="ExamSelectedPage-header__logo">VERTEX</p>
      </div>

      <div className="ExamSelectedPage-title">
        <h1 className="ExamSelectedPage-title__title">Examen Básico de Javascript</h1>
        <button className="ExamSelectedPage-title__button button">Cancelar</button>
      </div>

      <div className="ExamSelectedPage-content">

        <div className={`ExamSelectedPage-content__sidebar ${modal ? 'inactive' :''}`}>
          <span 
            className="ExamSelectedPage-content__sidebar-close"
            onClick={() => setModal(!modal)}
          ><IoClose /></span>

          <div className="ExamSelectedPage-content__sidebar-modal">
            <p className="ExamSelectedPage-content__sidebar-modal__time">Tiempo restante</p>
            <p className="ExamSelectedPage-content__sidebar-modal__counter">
              <span><GoClockFill /></span>
              18:34
            </p>

            <div className="ExamSelectedPage-content__sidebar-modal__numberQuestions">
              <p>8/16</p>
              <p>Preguntas</p>
            </div>

            <div className="ExamSelectedPage-content__sidebar-modal__grid">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
            </div> 

            <button className="ExamSelectedPage-content__sidebar-modal__cancel button">Cancelar</button> 
                      
          </div>

        </div>

        <div className="ExamSelectedPage-content__question">
          <Exam />
        </div>

      </div>

    </div>
  )
}