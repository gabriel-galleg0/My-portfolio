import { section } from "framer-motion/client";
import "./intro.css";

export default function Intro() {
    return (
        <section id="intro" className="section_intro">
            <div className="intro_content">
                <h1 className="intro_title">Welcome! I'm Gallego and</h1>
                <h1 className="intro_subtitle">I will be your host</h1>
                <p className="text_intro">Now introducing: ME</p>
            </div>


        </section>
    )
}