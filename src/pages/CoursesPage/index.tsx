import { useState } from "react";
import { Course } from "../../components/Course";
import { InputCourse } from "../../components/InputCourse";
import { ItemsFilter } from "../../components/ItemsFilter";
import { MainView } from "../../components/MainView";
import { Pagination } from "../../components/Pagination";
import "./CoursesPage.css";

export function CoursesPage() {
  const [modal, setModal] = useState(false);

  return (
    <MainView
      modal={modal}
      setModal={setModal}
      title="Accede a todos los cursos"
    >
      <div className="CoursesPage-section content-mainView">
        <div className="CoursesPage-filter">
          <InputCourse />
          <ItemsFilter />
        </div>

        <div className="CoursesPage-courses">
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

        <Pagination />
      </div>
    </MainView>
  );
}
