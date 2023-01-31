import emailjs from "@emailjs/browser";
import "./index.css";
import { useRef } from "react";
import { MdOutlinePets } from "react-icons/md";
import Navbar from "../../components/navbar";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fvezj0w",
        "template_5ldt5tq",
        form.current,
        "-pOIPxi-WOnfyGNn4"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="container_contact-page">
        <div className="text-zone">
          <h1>Contact Us</h1>
          <p style={{ fontSize: "14px" }}>
            you can contact us for more information{" "}
          </p>
          <br />
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li>
                <input
                  className="name"
                  placeholder="Name"
                  type="text"
                  name="name"
                  required
                />
              </li>
              <li>
                <input
                  className="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </li>
              <li>
                <input
                  className="subject"
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
