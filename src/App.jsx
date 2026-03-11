import Timeline from "./components/timeline/Timeline"
import Hero from "./sections/Hero/Hero"
import Intro from "./sections/Intro/Intro"
import Projects from "./sections/Projects/Projects"
import Contact from "./sections/Contact/Contact"
import Navbar from "./components/layout/Navbar/Navbar"
import "./styles/variables.css"

export default function App() {
  return (
    <>
    <Navbar />
     <Hero />
     <Intro/>
     <Timeline />
    <Projects />
    <Contact />
    </>
  )
}
