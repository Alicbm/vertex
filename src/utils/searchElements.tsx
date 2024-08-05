import { CourseI, ExamI } from "../types";

export const searchElements = (
  text: string,
  data: (CourseI | ExamI)[],
  setNewData: (arg: (CourseI | ExamI)[]) => void,
  setTextSearch: (arg: string) => void
) => {
  const resData = data?.filter((item) =>
    item?.nameToSearch?.toLocaleLowerCase()?.includes(text.toLocaleLowerCase())
  );

  setNewData(resData);
  setTextSearch(text);
};
