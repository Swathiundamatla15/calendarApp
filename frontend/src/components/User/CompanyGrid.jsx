import React from 'react';
import PropTypes from 'prop-types';
import CompanyCard from './CompanyCard';

const CompanyGrid = ({ companies, onClickCompany }) => {
  if (!companies || companies.length === 0) {
    return (
      <div className="text-gray-400 text-center">No companies available.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {companies.map((company) => (
        <CompanyCard
          key={company._id}
          company={company}
          onClickCompany={onClickCompany}
        />
      ))}
    </div>
  );
};

CompanyGrid.propTypes = {
  companies: PropTypes.array.isRequired,
  onClickCompany: PropTypes.func.isRequired,
};

export default CompanyGrid;
