import React, { useState } from 'react';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
import AskProjectView from './views/AskProjectView';
import ProjectDataView from './views/ProjectDataView';
import SiteUpdatesView from './views/SiteUpdatesView';
import TasksView from './views/TasksView';
import RisksView from './views/RisksView';
import ReportsView from './views/ReportsView';

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [selectedIntelQuery, setSelectedIntelQuery] = useState('');
  const [isSiteLogModalOpen, setIsSiteLogModalOpen] = useState(false);

  const handleOpenIntelQuestion = (questionQuery) => {
    setSelectedIntelQuery(questionQuery);
    setCurrentTab('ask-project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewSiteLogClick = () => {
    setCurrentTab('site-updates');
    setIsSiteLogModalOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAskIntelClick = () => {
    setCurrentTab('ask-project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    if (tab !== 'ask-project') {
      setSelectedIntelQuery('');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="website-root">
      {/* Comprehensive Professional Top Navbar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        onNewSiteLogClick={handleNewSiteLogClick}
        onAskIntelClick={handleAskIntelClick}
      />

      {/* Main Full-Width Content Container */}
      <main className="website-main">
        {currentTab === 'dashboard' && (
          <DashboardView onOpenIntelQuestion={handleOpenIntelQuestion} />
        )}

        {currentTab === 'project-data' && (
          <ProjectDataView />
        )}

        {currentTab === 'site-updates' && (
          <SiteUpdatesView
            isModalOpen={isSiteLogModalOpen}
            setIsModalOpen={setIsSiteLogModalOpen}
          />
        )}

        {currentTab === 'tasks' && (
          <TasksView />
        )}

        {currentTab === 'risks' && (
          <RisksView />
        )}

        {currentTab === 'ask-project' && (
          <AskProjectView selectedQuestionQuery={selectedIntelQuery} />
        )}

        {currentTab === 'reports' && (
          <ReportsView />
        )}
      </main>

      {/* Modern Professional Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-brand">CONSTRUCT<strong>IQ</strong></span>
            <span className="footer-divider">|</span>
            <span>Enterprise Construction & Engineering Intelligence</span>
          </div>
          <div className="footer-center">
            <span>SUNRISE RESIDENCY · Ahmedabad Regional Development Authority Compliant</span>
          </div>
          <div className="footer-right">
            <span className="footer-status-pill">IS 456 / IS 1893 Verified</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
