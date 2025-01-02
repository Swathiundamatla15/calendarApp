import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  addCommunicationMethod,
  updateCommunicationMethod,
  fetchCommunicationMethodById,
} from '../../utils/api';

const CommunicationMethodForm = ({ methodId, onSave }) => {
  const [method, setMethod] = useState({
    name: '',
    description: '',
    sequence: 0,
    mandatory: false,
  });

  useEffect(() => {
    if (methodId) {
      fetchCommunicationMethodById(methodId).then((data) => setMethod(data));
    }
  }, [methodId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMethod((prevMethod) => ({
      ...prevMethod,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (methodId) {
      await updateCommunicationMethod(methodId, method);
    } else {
      await addCommunicationMethod(method);
    }
    onSave();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-darkGray p-6 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-white mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={method.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1">Description:</label>
        <textarea
          name="description"
          value={method.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1">Sequence:</label>
        <input
          type="number"
          name="sequence"
          value={method.sequence}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="text-white mr-2">Mandatory:</label>
        <input
          type="checkbox"
          name="mandatory"
          checked={method.mandatory}
          onChange={handleChange}
          className="text-white"
        />
      </div>
      <button
        type="submit"
        className="bg-spotifyGreen text-white px-4 py-2 rounded hover:bg-spotifyDarkGreen transition duration-300"
      >
        Save
      </button>
    </form>
  );
};

CommunicationMethodForm.propTypes = {
  methodId: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};

export default CommunicationMethodForm;
