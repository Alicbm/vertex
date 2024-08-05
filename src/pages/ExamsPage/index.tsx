/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MainView } from "../../components/MainView";
import { InputCourse } from "../../components/InputCourse";
import { ItemsFilter } from "../../components/ItemsFilter";
import { ItemExam } from "../../components/ItemExam";
import { Pagination } from "../../components/Pagination";
import { data } from '../../data/examsData.json';
import { useFilter } from "../../hooks/useFilter";
import { ExamI } from "../../types";
import { searchElements } from "../../utils/searchElements";
import './ExamsPage.css';

export function ExamsPage () {
  const [modal, setModal] = useState(false);
  const [newData, setNewData] = useState<ExamI | any>(data);
  const [textSearch, setTextSearch] = useState("");

  const {
    filterByLearningPath,
    filterByTool,
    filterByDifficulty
  } = useFilter(
    data, 
    setNewData, 
    setTextSearch
  )

  const searchCourse = (text: string) => {
    searchElements(text, data, setNewData, setTextSearch);
  };

  return (
    <MainView
      modal={modal}
      setModal={setModal}
      title="Valida tus conocimientos con nuestros exámenes"
    > 
      <div className="ExamsPage content-mainView">
        <div className="ExamsPage-filter">
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

          <div className="ExamsPage-exams">
            {
              newData?.map((item: ExamI, index: number) => (
                <ItemExam key={index} exam={item} />
              ))
            }
          </div>

          <Pagination />
      </div>
    </MainView>
  )
}