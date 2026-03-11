import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

export default function MyActivity() {

  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://githubcalendarapi.onrender.com/")
        .then((res) => res.json())
        .then((data) => {

          const weeks =
            data.data.user.contributionsCollection.contributionCalendar.weeks;

          const flattened = weeks.flatMap((week) =>
            week.contributionDays.map((day) => ({
              date: day.date,
              count: day.contributionCount
            }))
          );

          setValues(flattened);
        })
        .catch(console.error);
    };
    fetchData();
  }, []);

  const today = new Date();
  const startDate = new Date();
  startDate.setFullYear(today.getFullYear() - 1);

  return (
    <div className="w-full text-center">

      <h2 className="text-xl font-mono font-bold mb-6">
        Contributions
      </h2>

      <div className="overflow-x-auto">

        <CalendarHeatmap
          startDate={startDate}
          endDate={today}
          values={values}
          gutterSize={3}

          classForValue={(value) => {
            if (!value || value.count === 0) return "fill-gray-200";
            if (value.count <= 2) return "fill-purple-300";
            if (value.count <= 5) return "fill-purple-500";
            if (value.count <= 8) return "fill-purple-700";
            return "fill-purple-900";
          }}

          titleForValue={(value) =>
            value
              ? `${value.date} — ${value.count} contributions`
              : "No contributions"
          }
        />

      </div>

    </div>
  );
}