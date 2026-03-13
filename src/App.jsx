import Hero from "./sections/Hero/Hero"
import Intro from "./sections/Intro/Intro"
import Contact from "./sections/Contact/Contact"
import Navbar from "./components/layout/Navbar/Navbar"
import "./styles/variables.css"

import {lazy, Suspense} from "react"
import BackgroundShape from "./components/background/BackgroundShape"
import Footer from "./sections/Footer/Footer"

const Projects = lazy(() => import("./sections/Projects/Projects"))
const Timeline = lazy(() => import("./components/timeline/Timeline"))

export default function App() {
  return (
    <>
    <BackgroundShape />

    <Navbar />
     <Hero />
     <Intro/>

     <Suspense fallback={null}>
     <Timeline />
      </Suspense>

    <Suspense fallback={null}>
     <Projects />
      </Suspense>
  
    <Contact />
    <Footer />
    </>
  )
}
