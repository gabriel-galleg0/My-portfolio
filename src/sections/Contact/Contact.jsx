import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "./contact.css"

export default function Contact(){

  const form = useRef()
  const [status, setStatus] = useState("idle")

  const sendEmail = (e) => {
    e.preventDefault()

    setStatus("sending")

    emailjs.sendForm(
      "service_zyqf6pn",
      "template_qfdudti",
      form.current,
      "6vzivHHGOSfOgWxKA"
    )
    .then(() => {

      setStatus("success")
      form.current.reset()

      setTimeout(() => {
        setStatus("idle")
      }, 4000)

    })
    .catch(() => {
      setStatus("error")
    })
  }

  return (
    <section id="contact" className="section_contact">

      <div className="contact_content">

        <h2 className="contact_title">Let's Build Something Together</h2>

        <p className="contact_desc">Have a project in mind or want to collaborate? Send me a message.</p>

        <form ref={form} onSubmit={sendEmail} className="contact_form">

          <input type="text" name="user_name" placeholder="Your name" required />

          <input type="email" name="user_email" placeholder="Your email" required />

          <textarea name="message" rows="5" placeholder="Your message" required />

          <button type="submit">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

        </form>

        {status === "success" && (
          <p className="form_success">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="form_error">
            Failed to send message. Try again.
          </p>
        )}

      </div>

    </section>
  )
}