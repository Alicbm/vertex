import { IoClose } from "react-icons/io5";
import { Modal } from "../Modal";
import './ModalTakeExam.css';

type Props = {
  setModal: (arg: boolean) => void;
}

export function ModalTakeExam({ setModal }: Props) {
  return (
    <Modal>
      <div className="ModalTakeExam">
        <span 
          className="ModalTakeExam-close"
          onClick={() => setModal(false)}
        ><IoClose /></span>
        
        <h3 className="ModalTakeExam-title">¿Estás seguro de tomar el examen?</h3>
        <ul className="ModalTakeExam-list">
          <li>El examen consta de 15 preguntas, debes responder bien mínimo 13 preguntas</li>
          <li>Tendrás un total de 20 minutos para completar el examen</li>
          <li>Puedes tomar el examen tantas veces como quieras</li>
        </ul>

        <div className="ModalTakeExam-buttons">
          <button 
            className="ModalTakeExam-buttons__cancel button"
            onClick={() => setModal(false)}
          >Cancelar</button>
          <button className="ModalTakeExam-buttons__takeExam button">Tomar examen</button>
        </div>

      </div>
    </Modal>
  );
}
