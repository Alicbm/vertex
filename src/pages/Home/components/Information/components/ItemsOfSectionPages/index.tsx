import './ItemsOfSectionPages.css';

type Props = {
  icon: JSX.Element;
  title: string;
  text: string;
}

export function ItemsOfSectionPages ({ icon, title, text }: Props) {
  return (
    <div className="ItemsOfSectionPages">
      
      <div className="ItemsOfSectionPages-icon">
        { icon }
      </div>

      <div className="ItemsOfSectionPages__info">
        <h4 className="ItemsOfSectionPages__info-title">{ title }</h4>
        <p className="ItemsOfSectionPages__info-text">{ text }</p>
      </div>

    </div>
  )
}