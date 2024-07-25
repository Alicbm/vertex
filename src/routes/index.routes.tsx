import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Courses } from '../pages/Courses';

export function Router () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/courses' element={ <Courses /> } />
      </Routes>
    </HashRouter>
  )
}