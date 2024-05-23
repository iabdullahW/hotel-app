// src/ResourceSelector.jsx


const resources = [
  { id: 1, name: 'Hotel Room 101' },
  { id: 2, name: 'Meeting Room A' },
  // Add more resources as needed
];

const ResourceSelector = ({ onSelectResource }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Available Resources</h2>
      {resources.map(resource => (
        <div key={resource.id} className="bg-gray-100 p-4 mb-4 rounded">
          <h3>{resource.name}</h3>
          <button 
            onClick={() => onSelectResource(resource)} 
            className="bg-green-500 text-white p-2 rounded mt-2">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResourceSelector;
