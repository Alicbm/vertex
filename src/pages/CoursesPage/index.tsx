/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Course } from "../../components/Course";
import { InputCourse } from "../../components/InputCourse";
import { ItemsFilter } from "../../components/ItemsFilter";
import { MainView } from "../../components/MainView";
import { Pagination } from "../../components/Pagination";
import { data } from "../../data/coursesData.json";
import { CourseI } from "../../types";
import { useFilter } from "../../hooks/useFilter";
import { searchElements } from "../../utils/searchElements";
import "./CoursesPage.css";

export function CoursesPage() {
  const [modal, setModal] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const [newData, setNewData] = useState<CourseI | any>(data);

  const { 
    filterByLearningPath, 
    filterByTool, 
    filterByDifficulty 
  } = useFilter(
    data,
    setNewData,
    setTextSearch
  );

  const searchCourse = (text: string) => {
    searchElements(text, data, setNewData, setTextSearch);
  };

  return (
    <MainView
      modal={modal}
      setModal={setModal}
      title="Accede a todos los cursos"
    >
      <div className="CoursesPage content-mainView">
        <div className="CoursesPage-filter">
          <InputCourse
            coursesToSearch={data?.map((item) => item?.nameToSearch)}
            searchCourse={searchCourse}
          />
          <ItemsFilter
            filterByLearningPath={filterByLearningPath}
            filterByTool={filterByTool}
            filterByDifficulty={filterByDifficulty}
          />
        </div>

        {textSearch?.length > 0 && (
          <div className="CoursesPage-resultText">
            <p>
              Resultados para: <i>{textSearch}</i>
            </p>
          </div>
        )}

        <div className="CoursesPage-courses">
          {newData.map((item: CourseI) => (
            <Course key={item?.id} course={item} />
          ))}
        </div>

        <Pagination />
      </div>
    </MainView>
  );
}
