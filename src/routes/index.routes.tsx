import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { CoursesPage } from '../pages/CoursesPage';
import { ChallengesPage } from '../pages/ChallengesPage';
import { ExamsPage } from '../pages/ExamsPage';
import { LearningPaths } from '../pages/LearningPaths';
import { ExercisesPage } from '../pages/ExercisesPage';
import { LearningPathSelected } from '../pages/LearningPathSelected';

export function Router () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/courses' element={ <CoursesPage /> } />
        <Route path='/challenges' element={ <ChallengesPage /> } />
        <Route path='/exams' element={ <ExamsPage /> } />
        <Route path='/learning-paths' element={ <LearningPaths />} />
        <Route path='/learning-paths/path' element={ <LearningPathSelected /> } />
        <Route path='/exercises' element={ <ExercisesPage /> } />
      </Routes>
    </HashRouter>
  )
}