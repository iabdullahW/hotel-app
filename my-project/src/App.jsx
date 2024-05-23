// src/App.jsx
import  { useState } from 'react';
import Header from './Header';
import ResourceSelector from './ResourceSelector';
import BookingForm from './BookingForm';

const App = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-4">
        {!selectedResource && <ResourceSelector onSelectResource={setSelectedResource} />}
        {selectedResource && (
          <BookingForm 
            resource={selectedResource} 
            onClose={() => setSelectedResource(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default App;
