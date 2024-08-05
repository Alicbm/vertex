import { useState } from 'react';
import { ModalTakeChallenge } from '../ModalTakeChallenge';
import image from '../../images/proyect-test.png';
import './Proyect.css';
import { ChallengeI } from '../../types';

type Props = {
  proyect: ChallengeI;
}

export function Proyect ({ proyect }: Props) {
  const [modal, setModal] = useState(false);

  return (
    <div className="Proyect">
      <img src={image} alt=""  className="Proyect-image" />
      <div className="Proyect-title">
        <div className="Proyect-title__title">
          <h2 className="Proyect-title__title-name">{proyect?.name}</h2>
          <p className="Proyect-title__title-route">{proyect?.learningPath}</p>
        </div>

        <div className="Proyect-title__button">
          <button>Ver código</button>
          <button onClick={() => setModal(true)}>Ver proyecto</button>
        </div>
      </div>

      <p className="Proyect-text">{proyect?.description}</p>
      {modal && <ModalTakeChallenge setModal={setModal} /> }
    </div>
  )
}