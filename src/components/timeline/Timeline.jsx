// src/components/timeline/Timeline.jsx
import { desc, section } from "framer-motion/client";
import "./timeline.css";
import TimelineItem from "./TimelineItem";

const timelineData = [

  {year: "2010",
   title: "The passion is born",
   description: "My first console was a PS1. What began as playing games slowly turned into wanting to create one."

  },

  {
    year: "2018",
    title: "My fisrt tech hack",
    description: "Got my Nintendo 3DS and, since games were expensive in Brazil, I unlocked it myself. Curiosity officially activated."
  },
  {
    year: "2021",
    title: "Discovering Programming",
    description: "Still in high school, I took a 1-year Alura course. Built websites with HTML, CSS, JS and created APIs with Node and Java."
  },
  {
    year: "2024",
    title: "Computer Science Begins",
    description: "Started my Computer Science degree and fell in love with programming and design. Planning a postgrad in Data after graduating in 2027."
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="section_timeline">
      <div className="timeline_wrapper">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
