import Timeline from "./components/timeline/Timeline"
import Hero from "./sections/Hero/Hero"
import Intro from "./sections/Intro/Intro"
import Projects from "./sections/Projects/Projects"
import Contact from "./sections/Contact/Contact"

export default function App() {
  return (
    <>
     <Hero />
     <Intro/>
     <Timeline />
    <Projects />
    <Contact />
    </>
  )
}
