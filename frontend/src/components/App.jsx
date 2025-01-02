import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Admin from './Admin/CompanyList';
import Dashboard from './User/Dashboard';
import CalendarView from './User/CalendarView';
import Login from './Auth/Login';
import Register from './Auth/Register';
import FrequencyReport from './Reporting/FrequencyReport';
import EffectivenessReport from './Reporting/EffectivenessReport';
import OverdueTrends from './Reporting/OverdueTrends';
import ReportsHome from './Reporting/ReportsHome'; // Import the ReportsHome component

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#121212] to-black text-gray-200 min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reports" element={<ReportsHome />} />{' '}
            {/* Add this route */}
            <Route path="/reports/frequency" element={<FrequencyReport />} />
            <Route
              path="/reports/effectiveness"
              element={<EffectivenessReport />}
            />
            <Route path="/reports/overdue" element={<OverdueTrends />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
