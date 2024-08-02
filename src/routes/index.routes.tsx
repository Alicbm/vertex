import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { CoursesPage } from '../pages/CoursesPage';
import { ChallengesPage } from '../pages/ChallengesPage';
import { ExamsPage } from '../pages/ExamsPage';
import { LearningPaths } from '../pages/LearningPaths';
import { ExercisesPage } from '../pages/ExercisesPage';
import { LearningPathSelected } from '../pages/LearningPathSelected';
import { CourseSelectedPage } from '../pages/CourseSelectedPage';
import { ExamSelectedPage } from '../components/ExamSelectedPage';
import { AnswerSelectedPage } from '../pages/AnswerSelectedPage';
import { ExamResults } from '../pages/ExamResults';

export function Router () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        
        <Route path='/cursos' element={ <CoursesPage /> } />
        <Route path='/cursos/seleccionado' element={ <CourseSelectedPage /> } />
        
        <Route path='/retos' element={ <ChallengesPage /> } />
        
        <Route path='/examenes' element={ <ExamsPage /> } />
        <Route path='/examenes/seleccionado' element={ <ExamSelectedPage /> } />
        <Route path='/examenes/respuestas' element={ <AnswerSelectedPage /> } />
        <Route path='/examenes/resultados' element={ <ExamResults /> } />
        
        <Route path='/rutas' element={ <LearningPaths />} />
        <Route path='/rutas/seleccionado' element={ <LearningPathSelected /> } />
        
        <Route path='/ejercicios' element={ <ExercisesPage /> } />
      </Routes>
    </HashRouter>
  )
}