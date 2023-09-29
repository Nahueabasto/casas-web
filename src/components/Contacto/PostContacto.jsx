import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./PostContacto.css";
import { useHistory } from "react-router-dom"; // Import useHistory from React Router

export default function PostContacto() {
    const form = useRef();
  const history = useHistory(); // Initialize the history object

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_549k4lj', 'template_z1xl3y8', form.current, 'RvQUzDzL-207noaP1')
      .then((result) => {
        console.log(result.text);

        // Check if the email was sent successfully
        if (result.status === 200) {
          // Redirect to the "Thank You" page or any other route you prefer
          history.push("/gracias");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="formulario">
      <form ref={form} action="" onSubmit={handleSubmit}>
        <div className="header-contact">
          <h1>Contacto</h1>
          <fieldset className="field-name">
            <label className="symbol-requiered name" htmlFor="">
              Name
            </label>
            <input name="user_name" type="text" placeholder="Ej: Raul" required />
          </fieldset>
          <fieldset className="field-email">
            <label className="symbol-requiered" htmlFor="">
              Email
            </label>
            <input name="user_email" type="email" placeholder="Ej: nahuel@gmail.com" id="email" required />
          </fieldset>
          <fieldset className="field-message">
            <label className="symbol-requiered" htmlFor="">
              Message
            </label>
            <textarea maxLength="500" type="email" placeholder="type your message" name="message" id="" cols="30" rows required />
          </fieldset>
        </div>
        <button className="btn-send">Send</button>
      </form>
    </div>
  );
}
