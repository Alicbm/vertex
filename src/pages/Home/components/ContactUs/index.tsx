import './ContactUs.css';

export function ContactUs() {
  return (
    <div className="ContactUs">
      
      <div className="ContactUs-info">
        <h3 className="ContactUs-info__title">Contáctate con nosotros</h3>
        <p className="ContactUs-info__text">
          Si tienes preguntas o sugerencias relacionadas con la plataforma o el
          desarrollador de esta no dudes en contactarnos
        </p>
      </div>

      <form className="ContactUs-form">

        <div className="ContactUs-form__name">
          <div className="ContactUs-form__element">
            <label htmlFor="firstName" className="ContactUs-form__element-label">Primer nombre</label>
            <input type="text" id="firstName" className="ContactUs-form__element-input" />
          </div>
          
          <div className="ContactUs-form__element">
            <label htmlFor="lastName" className="ContactUs-form__element-label">Apellido</label>
            <input type="text" id="lastName" className="ContactUs-form__element-input" />
          </div>
        </div>

        <div className="ContactUs-form__element">
          <label htmlFor="email" className="ContactUs-form__element-label">Correo electrónico</label>
          <input type="text" id="email" className="ContactUs-form__element-input" />
        </div>

        <div className="ContactUs-form__element">
          <label htmlFor="message" className="ContactUs-form__element-label">Mensaje</label>
          <input type="text" id="message" className="ContactUs-form__element-input" />
        </div>

        <div className='ContactUs-form__button'>
          <button type="submit" className="button">Enviar mensaje</button>
        </div>
      </form>
    </div>
  );
}
