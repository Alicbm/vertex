import { IoClose } from "react-icons/io5";
import { Modal } from "../Modal";
import image from "../../images/proyect-test.png";
import "./ModalTakeChallenge.css";

type Props = {
  setModal: (arg: boolean) => void;
}

export function ModalTakeChallenge({ setModal }: Props) {
  return (
    <Modal>
      <div className="ModalTakeChallenge">
        <span 
          className="ModalTakeChallenge-close"
          onClick={() => setModal(false)}
        ><IoClose /></span>

        {/* Sección de la imagen */}
        <div className="ModalTakeChallenge-image">
          <img src={image} alt="" />
        </div>

        {/* Sección de la información */}
        <div className="ModalTakeChallenge-info">
          <div className="ModalTakeChallenge-info__title">
            <h1>Weather App</h1>
            <p>
              Desarrolla una aplicación web que permita a los usuarios buscar
              información climatológica de cualquier ciudad. La aplicación debe
              mostrar el reporte semanal del clima y un mapa que ubique la
              ciudad consultada. Además, debe incluir información sobre la
              calidad del aire en la ciudad seleccionada. Toda la información se
              obtendrá a través del consumo de una API REST.
            </p>
          </div>

          <div className="ModalTakeChallenge-info__list">
            <h3>Recursos para el desarrollo de reto</h3>
            <ul>
              <li>Primer recurso</li>
              <li>Primer recurso</li>
              <li>Primer recurso</li>
            </ul>
          </div>

          <div className="ModalTakeChallenge-info__list">
            <h3>Herramientas utilizadas</h3>
            <ul>
              <li>Primer recurso</li>
              <li>Primer recurso</li>
              <li>Primer recurso</li>
            </ul>
          </div>

          <div className="ModalTakeChallenge-info__buttons">
            <button className="button">Ver codigo</button>
            <button className="button">Ver proyecto</button>
          </div>

        </div>
      </div>
    </Modal>
  );
}
