import { useState } from "react";
import { MainView } from "../../components/MainView";
import { InputCourse } from "../../components/InputCourse";
import { ItemsFilter } from "../../components/ItemsFilter";
import { ItemExam } from "../../components/ItemExam";
import './ExamsPage.css';
import { Pagination } from "../../components/Pagination";

export function ExamsPage () {
  const [modal, setModal] = useState(false);

  return (
    <MainView
      modal={modal}
      setModal={setModal}
      title="Valida tus conocimientos con nuestros exámenes"
    > 
      <div className="ExamsPage content-mainView">
        <div className="ExamsPage-filter">
            <InputCourse />
            <ItemsFilter />
          </div>

          <div className="ExamsPage-exams">
            <ItemExam />
            <ItemExam />
            <ItemExam />
            <ItemExam />
            <ItemExam />
            <ItemExam />
            <ItemExam />
            <ItemExam />
            <ItemExam />
          </div>

          <Pagination />
      </div>
    </MainView>
  )
}