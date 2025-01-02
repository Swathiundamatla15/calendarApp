import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const OverdueTrends = () => {
  const [overdueData, setOverdueData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverdueData = async () => {
      try {
        const response = await axios.get('/api/communications/overdue');
        setOverdueData(response.data);
      } catch (error) {
        console.error('Error fetching overdue data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverdueData();
  }, []);

  const chartData = {
    labels: overdueData.map((item) => item.companyName),
    datasets: [
      {
        label: 'Overdue Communications',
        data: overdueData.map((item) => item.overdueCount),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Overdue Communication Trends</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Bar data={chartData} options={{ responsive: true }} />
      )}
    </div>
  );
};

export default OverdueTrends;
