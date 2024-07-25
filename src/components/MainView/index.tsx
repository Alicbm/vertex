import { IoMenu } from "react-icons/io5";
import { Course } from "../Course";
import { InputCourse } from "../InputCourse";
import { ItemsFilter } from "../ItemsFilter";
import { Pagination } from "../Pagination";
import { Menu } from "../Menu";
import { useState } from "react";
import './MainView.css';

export function MainView () {
  const [modal, setModal] = useState(false)

  return (
    <div className="MainView">
      <Menu modal={modal} setModal={setModal} />

      <div className="MainView-content">
        <div className="MainView-content__header">
          <span 
            className="MainView-content__header-menu"
            onClick={() => setModal(!modal)}       
          ><IoMenu /></span>
          <p className="MainView-content__header-logo">VERTEX</p>
        </div>

        <div className="MainView-content__title">
          <h1>Accede a todos los cursos</h1>
        </div>

        <div className="MainView-content__section">
          <div className="MainView-content__section-filter">
            <InputCourse />
            <ItemsFilter />
          </div>

          <div className="MainView-content__section-courses">
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
          </div>

          <div className="MainView-content__section-pagination">
            <Pagination />
          </div>

        </div>

      </div>

    </div>
  )
}