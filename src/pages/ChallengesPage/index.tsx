/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MainView } from "../../components/MainView";
import { ItemsFilter } from "../../components/ItemsFilter";
import { Proyect } from "../../components/Proyect";
import { Pagination } from "../../components/Pagination";
import { useFilter } from "../../hooks/useFilter";
import { data } from '../../data/challengesData.json';
import "./ChallengesPage.css";
import { ChallengeI } from "../../types";

export function ChallengesPage() {
  const [modal, setModal] = useState(false);
  const [newData, setNewData] = useState<ChallengeI | any>(data);

  const {
    filterByLearningPath,
    filterByTool,
    filterByDifficulty
  } = useFilter(data, setNewData);

  return (
    <MainView
      modal={modal}
      setModal={setModal}
      title="Lleva tus conocimientos a otro nivel"
    >
      <div className="ChallengesPage content-mainView">
        <div className="ExercisesPage-filter">
          <ItemsFilter 
            filterByLearningPath={filterByLearningPath}
            filterByTool={filterByTool}
            filterByDifficulty={filterByDifficulty}
          />
        </div>

        <div className="ChallengesPage-proyects">
          {
            newData?.map((item: ChallengeI, index: number) => (
              <Proyect key={index} proyect={item} />
            ))
          }
        </div>

        <Pagination />
      </div>
    </MainView>
  );
}
