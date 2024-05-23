// src/PaymentForm.jsx


const PaymentForm = ({ resource, date, onClose }) => {
  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here
    alert('Payment successful!');
    onClose();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Payment for {resource.name}</h2>
      <p>Date: {date}</p>
      <form onSubmit={handlePayment}>
        <label className="block mb-2">Card Number:</label>
        <input 
          type="text" 
          className="p-2 border rounded mb-4"
        />
        <button 
          type="submit" 
          className="bg-green-500 text-white p-2 rounded">
          Pay Now
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

export default PaymentForm;
