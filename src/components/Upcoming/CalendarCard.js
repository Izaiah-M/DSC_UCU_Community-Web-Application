import "./CalendarCard.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
// import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: {
    "en-US": enUS,
  },
});

// TODO: use onSelectSlot

export const CalendarCard = ({ events, onSelectEvent }) => {
  return (
    <div className="calendar-card">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        className="calendarr"
        views={{
          month: true,
          day: false,
          week: false,
          agenda: false,
        }}
        defaultView="month"
        onSelectEvent={onSelectEvent}
      />
    </div>
  );
};
