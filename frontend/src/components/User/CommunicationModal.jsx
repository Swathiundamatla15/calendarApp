import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { logCommunication } from '../../utils/api';

const CommunicationModal = ({
  isOpen,
  onRequestClose,
  companyId,
  existingCommunications,
}) => {
  const [communicationType, setCommunicationType] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const communicationData = {
      companyId,
      type: communicationType,
      date,
      notes,
    };
    await logCommunication(communicationData);
    onRequestClose(); // Close the modal after logging communication
  };

  useEffect(() => {
    if (existingCommunications) {
      // Reset form if there are existing communications
      setCommunicationType('');
      setDate('');
      setNotes('');
    }
  }, [existingCommunications, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="communication-modal bg-[#181818] p-8 rounded-lg shadow-xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
    >
      <h2 className="text-2xl font-semibold text-white mb-6">
        Log Communication
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label
            htmlFor="communicationType"
            className="block text-lg mb-2 text-gray-300"
          >
            Communication Type:
          </label>
          <select
            id="communicationType"
            value={communicationType}
            onChange={(e) => setCommunicationType(e.target.value)}
            required
            className="w-full p-3 bg-[#181818] border border-[#3a3a3a] rounded text-gray-300"
          >
            <option value="">Select...</option>
            <option value="LinkedIn Post">LinkedIn Post</option>
            <option value="LinkedIn Message">LinkedIn Message</option>
            <option value="Email">Email</option>
            <option value="Phone Call">Phone Call</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-lg mb-2 text-gray-300">
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full p-3 bg-[#181818] border border-[#3a3a3a] rounded text-gray-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block text-lg mb-2 text-gray-300">
            Notes:
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-3 bg-[#181818] border border-[#3a3a3a] rounded text-gray-300"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onRequestClose}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Log Communication
          </button>
        </div>
      </form>
    </Modal>
  );
};

CommunicationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  companyId: PropTypes.string.isRequired,
  existingCommunications: PropTypes.array,
};

export default CommunicationModal;
