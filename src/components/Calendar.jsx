import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "../styles/calendar.css"; // Import your CSS file

export default function Calendar(props) {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  const end = new Date(today.getFullYear(), today.getMonth() + 3, 0); // +3 porque getMonth() es base 0 y queremos fin del segundo mes siguiente

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      locale={"es"}
      initialView="dayGridMonth"
      buttonText={{
        today: "Hoy",
      }}
      events={props.events}
      validRange={{
        start: start.toISOString().split("T")[0],
        end: end.toISOString().split("T")[0],
      }}
    />
  );
}
