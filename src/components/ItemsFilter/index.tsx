import { useEffect, useState } from "react";
import { EachItemToFilter } from "../EachItemToFilter";
import { data } from "../../data/coursesData.json";
import "./ItemsFilter.css";

type Props = {
  filterByLearningPath: (one: string) => void;
  filterByTool: (one: string, two: string) => void;
  filterByDifficulty: (one: string, two: string, three: string) => void;
};

export function ItemsFilter({
  filterByLearningPath,
  filterByTool,
  filterByDifficulty,
}: Props) {
  const [learningPathSelected, setLearningPathSelected] = useState("");
  const [toolSelected, setToolSelected] = useState("");
  const [difficultySelected, setDifficultySelected] = useState("");

  //rutas de aprendizaje
  const learningPaths = [...new Set(data?.map((item) => item?.learningPath))];

  //herramientas
  let tools = data?.map((item) => {
    if (item.learningPath == learningPathSelected) return item?.tool;
  });

  tools = [...new Set(tools)];

  //dificultad
  const difficulty = ["Basico", "Intermedio", "Avanzado"];

  //ejecuacion de funciones para los distintos filtros
  useEffect(() => {
    if (learningPathSelected.length > 0) {
      filterByLearningPath(learningPathSelected);

      if (toolSelected.length > 0) {
        filterByTool(learningPathSelected, toolSelected);

        if (difficultySelected.length > 0) {
          filterByDifficulty(
            learningPathSelected,
            toolSelected,
            difficultySelected
          );
        }
      } else {
        setDifficultySelected("");
      }
    } else {
      setToolSelected("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [learningPathSelected, toolSelected, difficultySelected]);

  
  return (
    <div className="ItemsFilter">
      <EachItemToFilter
        data={learningPaths}
        title="Rutas de Aprendizaje"
        setValue={setLearningPathSelected}
      />
      <EachItemToFilter
        data={tools || [""]}
        title="Herramientas"
        setValue={setToolSelected}
        message={
          learningPathSelected?.length == 0
            ? "Primero debes seleccionar una ruta de aprendizaje"
            : undefined
        }
      />
      <EachItemToFilter
        data={difficulty}
        title="Dificultad"
        setValue={setDifficultySelected}
        message={
          toolSelected?.length == 0
            ? "Primero debes seleccionar una herramienta"
            : undefined
        }
      />
    </div>
  );
}
