import './Modal.css';

type Props = {
  children: React.ReactNode;
}

export function Modal ({ children }: Props) {
  return (
    <div className="Modal">
      {children}
    </div>
  )
}