import React, { useEffect, useState } from 'react';
import { fetchCompanies, deleteCompany } from '../../utils/api';
import CompanyForm from './CompanyForm';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCompanies();
      setCompanies(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteCompany(id);
    setCompanies(companies.filter((company) => company._id !== id));
  };

  const handleSave = () => {
    setSelectedCompanyId(null);
    const fetchData = async () => {
      const data = await fetchCompanies();
      setCompanies(data);
    };
    fetchData();
  };

  return (
    <div className="bg-gradient-to-b from-[#121212] to-black text-[#B3B3B3] min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Company List
      </h2>
      <div className="bg-darkGray p-6 rounded-lg shadow-lg mb-8 max-w-4xl mx-auto">
        <CompanyForm companyId={selectedCompanyId} onSave={handleSave} />
      </div>
      <table className="min-w-full bg-darkGray rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-white">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-white">
              Location
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-white">
              LinkedIn Profile
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-white">
              Emails
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-white">
              Phone Numbers
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-white">
              Comments
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-white">
              Communication Periodicity
            </th>
            <th className="py-2 px-4 border-b border-gray-700 text-left text-white">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr
              key={company._id}
              className="hover:bg-gray-700 transition duration-300"
            >
              <td className="py-2 px-4 border-b border-gray-700">
                {company.name}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {company.location}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {company.linkedinProfile}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {company.emails.join(', ')}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {company.phoneNumbers.join(', ')}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {company.comments}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                {company.communicationPeriodicity}
              </td>
              <td className="py-2 px-4 border-b border-gray-700">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition duration-300"
                  onClick={() => setSelectedCompanyId(company._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(company._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
