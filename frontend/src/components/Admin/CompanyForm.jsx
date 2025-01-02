import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { addCompany, updateCompany, fetchCompanyById } from '../../utils/api';

const CompanyForm = ({ companyId, onSave }) => {
  const [company, setCompany] = useState({
    name: '',
    location: '',
    linkedinProfile: '',
    emails: [],
    phoneNumbers: [],
    comments: '',
    communicationPeriodicity: '2 weeks',
  });

  useEffect(() => {
    if (companyId) {
      fetchCompanyById(companyId).then((data) => setCompany(data));
    }
  }, [companyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevCompany) => ({ ...prevCompany, [name]: value }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setCompany((prevCompany) => ({
      ...prevCompany,
      [name]: value.split(',').map((item) => item.trim()),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (companyId) {
      await updateCompany(companyId, company);
    } else {
      await addCompany(company);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={company.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-1">Location:</label>
        <input
          type="text"
          name="location"
          value={company.location}
          onChange={handleChange}
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-1">LinkedIn Profile:</label>
        <input
          type="text"
          name="linkedinProfile"
          value={company.linkedinProfile}
          onChange={handleChange}
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-1">Emails:</label>
        <input
          type="text"
          name="emails"
          value={company.emails.join(', ')}
          onChange={handleArrayChange}
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-1">Phone Numbers:</label>
        <input
          type="text"
          name="phoneNumbers"
          value={company.phoneNumbers.join(', ')}
          onChange={handleArrayChange}
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-1">Comments:</label>
        <textarea
          name="comments"
          value={company.comments}
          onChange={handleChange}
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        ></textarea>
      </div>
      <div>
        <label className="block text-gray-300 mb-1">
          Communication Periodicity:
        </label>
        <input
          type="text"
          name="communicationPeriodicity"
          value={company.communicationPeriodicity}
          onChange={handleChange}
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
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

CompanyForm.propTypes = {
  companyId: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};

export default CompanyForm;
