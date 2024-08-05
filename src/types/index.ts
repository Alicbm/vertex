export type RoutesType = {
  label: string;
  route: string;
  icon: JSX.Element;
  selected: boolean;
};

export interface CourseI {
  id: number;
  name: string;
  nameToSearch: string;
  learningPath: string;
  image: string;
  difficulty: string;
  tool: string;
}

export interface ExerciseI {
  id: number;
  test: string;
  learningPath: string;
  image: string;
  difficulty: string;
  tool: string;
}

export interface ChallengeI {
  id: number;
  name: string;
  description: string;
  learningPath: string;
  image: string;
  difficulty: string;
  tool: string;
}

export interface ExamI {
  id: number;
  name: string;
  nameToSearch: string;
  learningPath: string;
  image: string;
  difficulty: string;
  tool: string;
}