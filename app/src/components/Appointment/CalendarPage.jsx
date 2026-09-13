import React, { useState, useEffect, useMemo } from 'react';

// ---------------------------------------------------------------------------
// MOCK DATA — replace with real API calls to your Flask backend.
//
// GET  /api/barbers/:barberId/availability?start=YYYY-MM-DD&end=YYYY-MM-DD
//   -> returns which dates + time slots the barber opened up
// GET  /api/barbers/:barberId/appointments?start=...&end=...
//   -> returns which of those slots are already booked
// POST /api/appointments
//   -> { barberId, date, time } creates the appointment for the logged-in client
// ---------------------------------------------------------------------------

const MOCK_BARBER_ID = 1;

const ALL_TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM',
];

// Simulates what your backend would return: which slots the barber
// has opened up for each date, and which of those are already booked.
function getMockAvailability(dateStr) {
  const seed = dateStr.split('-').reduce((a, c) => a + c.charCodeAt(0), 0);
  const openSlots = ALL_TIME_SLOTS.filter((_, i) => (seed + i) % 3 !== 0);
  const bookedSlots = openSlots.filter((_, i) => (seed + i) % 4 === 0);
  return { openSlots, bookedSlots };
}

function fetchAvailabilityForDate(barberId, dateStr) {
  // TODO: replace with real fetch, e.g.:
  // return fetch(`/api/barbers/${barberId}/availability?date=${dateStr}`)
  //   .then(res => res.json());
  return new Promise((resolve) => {
    setTimeout(() => resolve(getMockAvailability(dateStr)), 250);
  });
}

function bookAppointment(barberId, dateStr, time) {
  // TODO: replace with real fetch, e.g.:
  // return fetch('/api/appointments', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  //   body: JSON.stringify({ barberId, date: dateStr, time }),
  // }).then(res => res.json());
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 300));
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getNextNDays(n) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

const WEEKDAY_LABEL = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const CalendarPage = () => {
  const upcomingDays = useMemo(() => getNextNDays(14), []);
  const [selectedDate, setSelectedDate] = useState(formatDateKey(upcomingDays[0]));
  const [availability, setAvailability] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);
  const [booking, setBooking] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    setLoading(true);
    setSelectedTime(null);
    setConfirmation(null);
    fetchAvailabilityForDate(MOCK_BARBER_ID, selectedDate).then((data) => {
      setAvailability(data);
      setLoading(false);
    });
  }, [selectedDate]);

  const handleBook = async () => {
    if (!selectedTime) return;
    setBooking(true);
    const result = await bookAppointment(MOCK_BARBER_ID, selectedDate, selectedTime);
    setBooking(false);
    if (result.success) {
      setConfirmation(`Booked for ${selectedDate} at ${selectedTime}`);
      setAvailability((prev) => ({
        ...prev,
        bookedSlots: [...prev.bookedSlots, selectedTime],
      }));
      setSelectedTime(null);
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
        Book an Appointment
      </h1>
      <p className="text-gray-400 mb-10 text-center">
        Pick a day, then choose an open time slot.
      </p>

      <div className="w-full max-w-5xl">
        {/* Date strip */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {upcomingDays.map((date) => {
            const key = formatDateKey(date);
            const isSelected = key === selectedDate;
            return (
              <button
                key={key}
                onClick={() => setSelectedDate(key)}
                className={`flex-shrink-0 w-20 rounded-xl border-2 py-3 px-2 text-center transition-colors
                  ${
                    isSelected
                      ? 'bg-neutral-950 text-green-400 border-green-400'
                      : 'bg-neutral-900 text-gray-300 border-neutral-700 hover:border-gray-400'
                  }`}
              >
                <div className={`text-xs uppercase tracking-wide ${isSelected ? 'text-green-400' : ''}`}>
                  {WEEKDAY_LABEL[date.getDay()]}
                </div>
                <div className="text-lg font-semibold">{date.getDate()}</div>
              </button>
            );
          })}
        </div>

        {/* Time slots */}
        <div className="bg-neutral-900 rounded-2xl p-6 md:p-8 border border-neutral-800">
          <h2 className="text-white text-xl font-semibold mb-4">
            Available times
          </h2>

          {loading ? (
            <p className="text-gray-400">Loading availability...</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {ALL_TIME_SLOTS.map((time) => {
                const isOpen = availability?.openSlots.includes(time);
                const isBooked = availability?.bookedSlots.includes(time);
                const isAvailable = isOpen && !isBooked;
                const isSelected = selectedTime === time;

                return (
                  <button
                    key={time}
                    disabled={!isAvailable}
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-lg py-3 text-sm font-medium border transition-colors
                      ${
                        !isAvailable
                          ? 'bg-neutral-950 text-gray-600 border-neutral-800 cursor-not-allowed'
                          : isSelected
                          ? 'bg-green-400 text-black border-green-400 font-semibold'
                          : 'bg-neutral-800 text-white border-neutral-700 hover:border-gray-400'
                      }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          )}

          <button
            onClick={handleBook}
            disabled={!selectedTime || booking}
            className={`mt-8 w-full md:w-auto px-8 py-3 rounded-xl font-semibold transition-colors
              ${
                !selectedTime || booking
                  ? 'bg-neutral-800 text-gray-500 cursor-not-allowed'
                  : 'bg-green-400 text-black hover:bg-green-300'
              }`}
          >
            {booking ? 'Booking...' : 'Confirm Appointment'}
          </button>

          {confirmation && (
            <p className="mt-4 text-green-400 text-sm">{confirmation}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;