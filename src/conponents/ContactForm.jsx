import "../styles/ContactForm.css";

export default function ContactForm() {
  return (
    <section id="contact-me">
      <h2>
        Contact Form <span className="line"></span>
      </h2>
      <form className="contact-form">
        <legend className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </legend>
        <input type="text" className="client-name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea
          name="message"
          rows="5"
          className="msg"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}
