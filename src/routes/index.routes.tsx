import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { CoursesPage } from '../pages/CoursesPage';
import { ChallengesPage } from '../pages/ChallengesPage';
import { ExamsPage } from '../pages/ExamsPage';
import { LearningPaths } from '../pages/LearningPaths';
import { ExercisesPage } from '../pages/ExercisesPage';
import { LearningPathSelected } from '../pages/LearningPathSelected';
import { CourseSelectedPage } from '../pages/CourseSelectedPage';
import { ExamSelectedPage } from '../components/Exam/ExamSelectedPage';

export function Router () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        
        <Route path='/courses' element={ <CoursesPage /> } />
        <Route path='/courses/selected' element={ <CourseSelectedPage /> } />
        
        <Route path='/challenges' element={ <ChallengesPage /> } />
        
        <Route path='/exams' element={ <ExamsPage /> } />
        <Route path='/exams/selected' element={ <ExamSelectedPage /> } />
        
        <Route path='/learning-paths' element={ <LearningPaths />} />
        <Route path='/learning-paths/selected' element={ <LearningPathSelected /> } />
        
        <Route path='/exercises' element={ <ExercisesPage /> } />
      </Routes>
    </HashRouter>
  )
}