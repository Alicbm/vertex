import { useState } from "react";
import { MainView } from "../../components/MainView";
import { ItemsFilter } from "../../components/ItemsFilter";
import { Pagination } from "../../components/Pagination";
import { Exercise } from "../../components/Exercise";
import './ExercisesPage.css';

export function ExercisesPage () {
  const [modal, setModal] = useState(false);

  return(
    <MainView
      modal={modal}
      setModal={setModal}
      title="Práctica tu lógica con nuestros ejercicios"
    >
      <div className="content-mainView">
        <div className="ExercisesPage-filter">
          <ItemsFilter />
        </div>

        <div className="ExercisesPage-proyects">
          <Exercise />
          <Exercise />
          <Exercise />
          <Exercise />
          <Exercise />
        </div>

        <Pagination />
      </div>
    </MainView>
  )
}