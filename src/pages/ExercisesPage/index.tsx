/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MainView } from "../../components/MainView";
import { ItemsFilter } from "../../components/ItemsFilter";
import { Pagination } from "../../components/Pagination";
import { Exercise } from "../../components/Exercise";
import { data } from "../../data/exercisesData.json";
import { useFilter } from "../../hooks/useFilter";
import { ExerciseI } from "../../types";
import './ExercisesPage.css';

export function ExercisesPage () {
  const [modal, setModal] = useState(false);
  const [newData, setNewData] = useState<ExerciseI | any>(data);

  const {
    filterByLearningPath,
    filterByTool,
    filterByDifficulty
  } = useFilter(data, setNewData);

  return(
    <MainView
      modal={modal}
      setModal={setModal}
      title="Práctica tu lógica con nuestros ejercicios"
    >
      <div className="content-mainView">
        <div className="ExercisesPage-filter">
          <ItemsFilter 
            filterByLearningPath={filterByLearningPath}
            filterByTool={filterByTool}
            filterByDifficulty={filterByDifficulty}  
          />
        </div>

        <div className="ExercisesPage-proyects">
          {
            newData?.map((item: ExerciseI, index: number) => (
              <Exercise key={index} exercise={item} />
            ))
          }
        </div>

        <Pagination />
      </div>
    </MainView>
  )
}