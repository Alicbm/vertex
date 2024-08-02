import { useNavigate } from 'react-router-dom';
import './Header.css';

export function Header () {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <p 
        className='activated'
        onClick={() => navigate('/')}
      >Inicio</p>
      <p onClick={() => navigate('/cursos')}>Cursos</p>
      <p onClick={() => navigate('/examenes')}>Exámenes</p>
      <p onClick={() => navigate('/ejercicios')}>Ejercicios</p>
      <p onClick={() => navigate('/rutas')}>Rutas</p>
    </div>
  )
}