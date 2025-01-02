import React from 'react';
import { Link } from 'react-router-dom';

const ReportsHome = () => {
  return (
    <div className="reports-home p-4">
      <h2 className="text-2xl font-bold mb-6">Reports Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/reports/frequency"
          className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
        >
          <h3 className="text-lg font-semibold">Frequency Report</h3>
          <p>Analyze communication frequency by method and other metrics.</p>
        </Link>
        <Link
          to="/reports/effectiveness"
          className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
        >
          <h3 className="text-lg font-semibold">Effectiveness Report</h3>
          <p>Evaluate the effectiveness of different communication methods.</p>
        </Link>
        <Link
          to="/reports/overdue"
          className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
        >
          <h3 className="text-lg font-semibold">Overdue Trends</h3>
          <p>Review overdue communications and trends by company.</p>
        </Link>
      </div>
    </div>
  );
};

export default ReportsHome;
