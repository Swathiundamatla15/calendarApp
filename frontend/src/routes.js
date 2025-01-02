import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/User/Dashboard';
import CompanyGrid from './components/User/CompanyGrid';
import CommunicationModal from './components/User/CommunicationModal';
import CalendarView from './components/User/CalendarView';
import CompanyForm from './components/Admin/CompanyForm';
import CompanyList from './components/Admin/CompanyList';
import CommunicationMethodForm from './components/Admin/CommunicationMethodForm';
import CommunicationMethodList from './components/Admin/CommunicationMethodList';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import FrequencyReport from './components/Reporting/FrequencyReport';
import EffectivenessReport from './components/Reporting/EffectivenessReport';
import OverdueTrends from './components/Reporting/OverdueTrends';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/companies" exact component={CompanyGrid} />
        <Route path="/companies/new" component={CompanyForm} />
        <Route path="/companies/edit/:id" component={CompanyForm} />
        <Route path="/communications" component={CommunicationModal} />
        <Route path="/calendar" component={CalendarView} />
        <Route path="/admin/companies" component={CompanyList} />
        <Route
          path="/admin/communication-methods"
          component={CommunicationMethodList}
        />
        <Route
          path="/admin/communication-methods/new"
          component={CommunicationMethodForm}
        />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Route path="/reporting/frequency" component={FrequencyReport} />
        <Route
          path="/reporting/effectiveness"
          component={EffectivenessReport}
        />
        <Route path="/reporting/overdue" component={OverdueTrends} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
