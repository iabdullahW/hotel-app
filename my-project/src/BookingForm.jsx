// src/BookingForm.jsx
import  { useState } from 'react';
import DatePicker from './DatePicker';
import PaymentForm from './PaymentForm';

const BookingForm = ({ resource, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    // Here you would handle the booking logic, e.g., updating the database
    setBookingConfirmed(true);
  };

  if (bookingConfirmed) {
    return <PaymentForm resource={resource} date={selectedDate} onClose={onClose} />;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Book {resource.name}</h2>
      <form onSubmit={handleBooking}>
        <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded mt-4">
          Confirm Booking
        </button>
      </form>
      <button 
        onClick={onClose} 
        className="bg-red-500 text-white p-2 rounded mt-4">
        Cancel
      </button>
    </div>
  );
};

export default BookingForm;
