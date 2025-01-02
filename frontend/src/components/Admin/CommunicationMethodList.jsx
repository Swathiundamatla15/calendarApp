import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommunicationMethodForm from './CommunicationMethodForm';

const CommunicationMethodList = () => {
  const [methods, setMethods] = useState([]);
  const [selectedMethodId, setSelectedMethodId] = useState(null);

  useEffect(() => {
    axios.get('/api/communicationMethods').then((response) => {
      setMethods(response.data);
    });
  }, []);

  const handleEdit = (id) => {
    setSelectedMethodId(id);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/communicationMethods/${id}`).then(() => {
      setMethods(methods.filter((method) => method._id !== id));
    });
  };

  const handleSave = () => {
    setSelectedMethodId(null);
    axios.get('/api/communicationMethods').then((response) => {
      setMethods(response.data);
    });
  };

  return (
    <div>
      <h2>Communication Method Management</h2>
      <CommunicationMethodForm
        methodId={selectedMethodId}
        onSave={handleSave}
      />
      <ul>
        {methods.map((method) => (
          <li key={method._id}>
            {method.sequence}. {method.name} - {method.description} (Mandatory:{' '}
            {method.mandatory ? 'Yes' : 'No'})
            <button onClick={() => handleEdit(method._id)}>Edit</button>
            <button onClick={() => handleDelete(method._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodList;
