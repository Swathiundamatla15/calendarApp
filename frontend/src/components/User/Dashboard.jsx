import React, { useState, useEffect } from 'react';
import { fetchCompanies } from '../../utils/api';
import CompanyGrid from './CompanyGrid';
import CommunicationModal from './CommunicationModal';

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all companies
  useEffect(() => {
    const getCompanies = async () => {
      const data = await fetchCompanies();
      setCompanies(data);
      if (data.length > 0) setSelectedCompany(data[0]); // Set the first company as default
    };
    getCompanies();
  }, []);

  // Open the modal for logging communication
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Update the selected company when a company is clicked
  const handleCompanyClick = (companyId) => {
    const company = companies.find((c) => c._id === companyId);
    setSelectedCompany(company);
  };

  return (
    <div className="bg-gradient-to-b from-[#121212] to-black text-[#B3B3B3] min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-200">
        User Dashboard
      </h1>

      {/* Main Company Details */}
      <div className="company-details bg-darkGray p-6 rounded-lg shadow-lg mb-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-200">
          Company Details
        </h2>
        {selectedCompany ? (
          <>
            <p className="mb-4 text-lg text-gray-400">
              <strong>Company:</strong> {selectedCompany.name}
            </p>
            <p className="mb-4 text-lg text-gray-400">
              <strong>City:</strong> {selectedCompany.location}
            </p>
            <p className="mb-4 text-lg text-gray-400">
              <strong>Phone:</strong> {selectedCompany.phoneNumbers.join(', ')}
            </p>
            <p className="mb-4 text-lg text-gray-400">
              <strong>Email:</strong> {selectedCompany.emails.join(', ')}
            </p>
            <p className="mb-4 text-lg text-gray-400">
              <strong>LinkedIn Profile:</strong>{' '}
              {selectedCompany.linkedinProfile}
            </p>
            <button
              className="bg-spotifyGreen text-white px-6 py-2 rounded-full mt-4 hover:bg-spotifyDarkGreen transition duration-300"
              onClick={handleOpenModal}
            >
              Log Communication
            </button>
          </>
        ) : (
          <p className="text-lg text-gray-400">No company selected.</p>
        )}
      </div>

      {/* Company Grid */}
      <CompanyGrid companies={companies} onClickCompany={handleCompanyClick} />

      {/* Communication Modal */}
      {isModalOpen && (
        <CommunicationModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          company={selectedCompany}
        />
      )}
    </div>
  );
};

export default Dashboard;
