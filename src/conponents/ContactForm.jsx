import "../styles/ContactForm.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ContactForm() {
  const { theme } = useContext(ThemeContext);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5ht1f2z",
        "template_a5xyqyc",
        form.current,
        "Ys1ADlNIfHwE6GyWY"
      )
      .then(
        (result) => {
          e.target.reset();
          alert("Email Sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className={theme}>
      <div id="contact-me">
        <h2>
          Contact Form <span className="line"></span>
        </h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <legend className="contactDesc">
            Please fill out the form below to discuss any work opportunities.
          </legend>
          <input
            type="text"
            className="client-name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className={theme}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
