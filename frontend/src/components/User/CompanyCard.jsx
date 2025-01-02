import React from 'react';
import PropTypes from 'prop-types';

const CompanyCard = ({ company, onClickCompany }) => {
  return (
    <div
      className="company-card bg-[#181818] p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border border-[#3a3a3a] hover:border-[#1db954]"
      onClick={() => onClickCompany(company._id)}
    >
      <h3 className="text-xl font-semibold text-white mb-3">{company.name}</h3>
      <p className="text-gray-400 mb-2">
        <strong>Location:</strong> {company.location}
      </p>
      <p className="text-gray-400 mb-2">
        <strong>Email:</strong> {company.emails.join(', ')}
      </p>
      <p className="text-gray-400 mb-2">
        <strong>Phone:</strong> {company.phoneNumbers.join(', ')}
      </p>
      <p className="text-gray-400 mb-2">
        <strong>LinkedIn:</strong> {company.linkedinProfile || 'N/A'}
      </p>
    </div>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    emails: PropTypes.arrayOf(PropTypes.string).isRequired,
    phoneNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
    linkedinProfile: PropTypes.string,
  }).isRequired,
  onClickCompany: PropTypes.func.isRequired,
};

export default CompanyCard;
