import { useState } from "react";
import { MainView } from "../../components/MainView";
import { ItemsFilter } from "../../components/ItemsFilter";
import { Proyect } from "../../components/Proyect";
import { Pagination } from "../../components/Pagination";
import "./ChallengesPage.css";

export function ChallengesPage() {
  const [modal, setModal] = useState(false);

  return (
    <MainView
      modal={modal}
      setModal={setModal}
      title="Lleva tus conocimientos a otro nivel"
    >
      <div className="ChallengesPage content-mainView">
        <div className="ChallengesPage-filter">
          <ItemsFilter />
        </div>

        <div className="CoursesPage-proyects">
          <Proyect />
          <Proyect />
          <Proyect />
          <Proyect />
          <Proyect />
        </div>

        <Pagination />
      </div>
    </MainView>
  );
}
