import { useState } from "react";
import "@/styles/layout/contact/Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="contact">
      <h1 className="contact__title">Contacta conmigo</h1>
      <p className="contact__text">
        ¿Tienes un proyecto en mente o quieres hablar sobre tecnología?
        Escríbeme y te respondo lo antes posible.
      </p>

      {submitted ? (
        <div className="contact__success">
          <p>¡Mensaje enviado! Gracias por contactar.</p>
        </div>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form__group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="contact__form__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="contact__form__group">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="¿De qué va?"
              required
            />
          </div>

          <div className="contact__form__group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntame los detalles..."
              rows="5"
              required
            />
          </div>

          <button type="submit" className="contact__form__submit">
            Enviar mensaje
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;
