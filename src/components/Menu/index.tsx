import { FaHome, FaLinkedin, FaGithub, FaUserCircle  } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";
import { FaLayerGroup } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { IoMdTrophy } from "react-icons/io";
import { PiExamFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import './Menu.css';

type Props = {
  modal: boolean;
  setModal: (arg: boolean) => void;
}

export function Menu ({ modal, setModal }: Props) {
  return (
    <div className={`Menu ${!modal ? 'inactive' : ''}`}>
      <span 
        className="Menu-close"
        onClick={() => setModal(!modal)}
      ><IoClose /></span>

      <div className="Menu-content">
        <div className="Menu-content__logo">
          <p>VERTEX</p>
        </div>

        <ul className="Menu-content__sections">
          <li><span><FaHome /> </span>Inicio</li>
          <li><span><LiaBookSolid /> </span>Cursos</li>
          <li><span><FaLayerGroup /> </span>Rutas</li>
          <li><span><GrTest /> </span>Ejercicios</li>
          <li><span><IoMdTrophy /> </span>Retos</li>
          <li><span><PiExamFill /> </span>Exámenes</li>
        </ul>

        <ul className="Menu-content__contact">
          <li><span><FaLinkedin /></span>LinkedIn</li>
          <li><span><FaGithub  /></span>Github</li>
          <li><span><FaUserCircle  /></span>Quién es Alic?</li>
        </ul>
      </div>

    </div>
  )
}