// src/DatePicker.jsx


const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <div className="p-4">
      <label className="block mb-2">Select a Date:</label>
      <input 
        type="date" 
        value={selectedDate || ''} 
        onChange={(e) => onDateChange(e.target.value)} 
        className="p-2 border rounded"
      />
    </div>
  );
};

export default DatePicker;
