import "./_contactStyles.scss";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_evrsy0y",
        "template_t2vnomr",
        form.current,
        "q8reFt7VH5iluOoHv"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("success");
        },
        (error) => {
          console.log(error.text);
          alert("failed");
        }
      );
  };

  return (
    <section id="section-contact" className="contact-container">
      <p className="contact-title">Let&apos;s be in contact</p>
      <div className="container-content-contact">
        <div className="form-container">
          <form
            ref={form}
            onSubmit={sendEmail}
            id="contact-form"
            className="contact-form"
          >
            <input
              name="name"
              id="name"
              type="text"
              placeholder="John Smith"
            ></input>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="johnsmith@gmail.com"
            ></input>
            <input
              name="subject"
              id="subject"
              type="text"
              placeholder="Job offer"
            ></input>
            <textarea
              id="message"
              name="message"
              placeholder="Hey! I have this offer for you, Elian :)"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <img src="https://media4.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.gif?cid=ecf05e47icevldo3usdxw2275hhb6cjkvts9aanqfjrkphsb&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      </div>
    </section>
  );
};

export default Contact;
