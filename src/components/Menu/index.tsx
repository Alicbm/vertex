import { FaLinkedin, FaGithub, FaUserCircle  } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { routesServices } from "../../utils/routes";
import { verfyServiceSelected } from "../../utils/verifyRouteSelected";
import './Menu.css';

type Props = {
  modal: boolean;
  setModal: (arg: boolean) => void;
}

export function Menu ({ modal, setModal }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  verfyServiceSelected(routesServices, location);

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
          {
            routesServices?.map(item => (
              <li 
                key={item?.label}
                onClick={() => navigate(item?.route)}
                className={`${item?.selected ? 'activated': ''}`}
              >
                <span>{item?.icon}</span>
                { item?.label }
              </li>   
            ))
          }
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