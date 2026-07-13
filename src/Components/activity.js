import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Section from "./section";

export default function Activity() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("https://githubcalendarapi.onrender.com/")
      .then((res) => res.json())
      .then((data) => {
        const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
        const flattened = weeks.flatMap((week) =>
          week.contributionDays.map((day) => ({
            date: day.date,
            count: day.contributionCount
          }))
        );
        setValues(flattened);
      })
      .catch(console.error);
  }, []);

  const today = new Date();
  const startDate = new Date();
  startDate.setFullYear(today.getFullYear() - 1);

  return (
    <Section id="contributions" eyebrow="// contributions">
      <div className="activity-heatmap overflow-x-auto">
        <CalendarHeatmap
          startDate={startDate}
          endDate={today}
          values={values}
          gutterSize={2}
          classForValue={(value) => {
            if (!value || value.count === 0) return "fill-none";
            if (value.count <= 2) return "fill-low";
            if (value.count <= 5) return "fill-mid";
            if (value.count <= 8) return "fill-high";
            return "fill-max";
          }}
          titleForValue={(value) =>
            value ? `${value.date} — ${value.count} contributions` : "No contributions"
          }
        />
      </div>
    </Section>
  );
}
