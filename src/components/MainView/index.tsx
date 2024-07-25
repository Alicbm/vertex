import { IoMenu } from "react-icons/io5";
import { Menu } from "../Menu";
import './MainView.css';

type Props = {
  modal: boolean;
  setModal: (arg: boolean) => void;
  children: React.ReactNode;
  title: string;
}

export function MainView ({ modal, setModal, children, title }: Props) {

  return (
    <div className="MainView">
      <Menu modal={modal} setModal={setModal} />

      <div className="MainView-content">
        <div className="MainView-content__header">
          <span 
            className="MainView-content__header-menu"
            onClick={() => setModal(!modal)}       
          ><IoMenu /></span>
          <p className="MainView-content__header-logo">VERTEX</p>
        </div>

        <div className="MainView-content__title">
          <h1>{ title }</h1>
        </div>

        { children }

      </div>

    </div>
  )
}