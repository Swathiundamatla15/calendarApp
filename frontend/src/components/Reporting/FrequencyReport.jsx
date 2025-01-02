import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const FrequencyReport = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Update the URL to the correct backend port (5000)
        const response = await axios.get(
          'http://localhost:5000/api/communications/frequency'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching frequency data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: data.map((item) => item.method),
    datasets: [
      {
        label: 'Communication Frequency',
        data: data.map((item) => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="report-container">
      <h2>Communication Frequency Report</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default FrequencyReport;
