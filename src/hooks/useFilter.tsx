import { ChallengeI, CourseI, ExerciseI, ExamI } from "../types";

export const useFilter = (
  data: ChallengeI[] | CourseI[] | ExerciseI[] | ExamI[],
  setNewData: (arg: (ChallengeI | CourseI | ExerciseI| ExamI)[] ) => void,
  setTextSearch?: (arg: string) => void
) => {

  //filtrar por ruta de aprendizaje
  const filterByLearningPath = (learningPath: string) => {
    const resData = data?.filter((item) => item?.learningPath == learningPath);

    setNewData(resData);
    setTextSearch && setTextSearch("");
  };

  //filtrar por herramienta
  const filterByTool = (learningPath: string, tool: string) => {
    const resData = data?.filter(
      (item) => item?.learningPath == learningPath && item?.tool == tool
    );

    setNewData(resData);
  };

  //filtrar por dificultad
  const filterByDifficulty = (
    learningPath: string,
    tool: string,
    difficulty: string
  ) => {
    const resData = data?.filter(
      (item) =>
        item?.learningPath == learningPath &&
        item?.tool == tool &&
        item?.difficulty == difficulty
    );

    setNewData(resData);
  };

  return {
    filterByLearningPath,
    filterByTool,
    filterByDifficulty,
  };
};
