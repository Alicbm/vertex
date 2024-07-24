import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export function Router () {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </HashRouter>
  )
}