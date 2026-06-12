import "@/styles/layout/contact/Contact.scss";

function Contact({
  formData,
  submitContactForm,
  submitted,
  changeContactForm,
}) {
  const handleChange = (event) => {
    changeContactForm(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;
    const to = "nuria.campo7@gmail.com";
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    );
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;

    window.open(mailtoLink, "_blank");
    submitContactForm();
  };

  return (
    <section className="contact">
      <h1 className="contact__title">Contacta conmigo</h1>
      <p className="contact__text">
        ¿Tienes un proyecto en mente o quieres hablar sobre tecnología?
        Escríbeme y te respondo lo antes posible.
      </p>

      {submitted ? (
        <div className="contact__waiting">
          <p>Espera mientras se abre tu aplicación de correo ¡Gracias!</p>
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
