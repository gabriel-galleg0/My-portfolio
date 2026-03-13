
import Carousel from "../../components/carousel/Carousel"
import "./project.css"

export default function Projects() {
  return (
    <section id="projects" className="section_projects">
      <div className="projects_container">
      <h1 className="projects_desc">From Student to Software Builder</h1>
      <p className="projects_text">Every project below marks a step forward in my technical maturity — better structure, better logic, better decisions.</p>

      <Carousel />

      </div>
    </section>
  )
}