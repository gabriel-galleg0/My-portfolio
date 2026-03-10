import { useRef } from "react"
import emailjs from "@emailjs/browser"

import "./contact.css"

export default function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_zyqf6pn",
      "template_qfdudti",
      form.current,
      "6vzivHHGOSfOgWxKA"
    )
    .then(() => {
      alert("Message sent successfully!")
      form.current.reset()
    })
    .catch(() => {
      alert("Failed to send message.")
    })
  }

  return (
    <section className="section_contact">
      <div className="contact_content">

        <h2 className="contact_title">Get In Touch</h2>

        <p className="contact_desc">
          Have a project in mind or want to collaborate? Send me a message.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact_form">

          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}