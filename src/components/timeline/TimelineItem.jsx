// src/components/timeline/TimelineItem.jsx

export default function TimelineItem({ year, title, description }) {
  return (
    <div className="timeline_item">
      <div className="timeline_dot"></div>

      <div className="timeline_content">
        <span className="timeline_year">{year}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
