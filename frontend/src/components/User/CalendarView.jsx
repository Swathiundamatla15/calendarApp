import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { fetchCommunications } from '../../utils/api';

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchCommunications();
        const formattedEvents = data.map((event) => ({
          title: event.type,
          date: event.date,
          description: event.notes,
        }));
        setEvents(formattedEvents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleEventClick = (info) => {
    alert(
      `Event: ${info.event.title}\nDate: ${info.event.start}\nNotes: ${info.event.extendedProps.description}`
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="calendar-view bg-gradient-to-b from-[#121212] to-black min-h-screen p-6 text-white">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        height="auto"
        contentHeight="auto"
        className="bg-white rounded-lg shadow-lg p-4"
      />
    </div>
  );
};

export default CalendarView;
