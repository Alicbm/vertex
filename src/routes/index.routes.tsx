import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { CoursesPage } from '../pages/CoursesPage';
import { ChallengesPage } from '../pages/ChallengesPage';

export function Router () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/courses' element={ <CoursesPage /> } />
        <Route path='/challenges' element={ <ChallengesPage /> } />
      </Routes>
    </HashRouter>
  )
}