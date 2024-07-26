import { useState } from "react";
import { MainView } from "../../components/MainView";
import { LearningPath } from "../../components/LearningPath";
import './LearningPaths.css';

export function LearningPaths () {
  const [modal, setModal] = useState(false);

  return (
    <MainView
      modal={modal}
      setModal={setModal}
      title="Sigue nuestras rutas de aprendizaje"
    >
      <div className="LearningPaths content-mainView">
        <LearningPath />
        <LearningPath />
        <LearningPath />
        <LearningPath />
        <LearningPath />
      </div>
    </MainView>
  )
}