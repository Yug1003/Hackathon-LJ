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
    <div className="website-root min-h-screen flex flex-col bg-[#F7F6F2]">
      {/* Comprehensive Professional Top Navbar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        onNewSiteLogClick={handleNewSiteLogClick}
        onAskIntelClick={handleAskIntelClick}
      />

      {/* Main Content Area */}
      <main className="website-main flex-1 w-full">
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

      {/* Modern Professional Footer with Tailwind Flexbox Spacing */}
      <footer className="w-full bg-white border-t border-gray-200 py-6 px-6 md:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          {/* Left: Branding & Tagline */}
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-gray-900 text-base tracking-tight">
              CONSTRUCT<span className="text-gray-400 font-normal">IQ</span>
            </span>
            <span className="text-gray-200">|</span>
            <span className="font-medium">Enterprise Construction & Engineering Intelligence</span>
          </div>

          {/* Center: Compliance / Authority */}
          <div className="text-center font-normal">
            <span>SUNRISE RESIDENCY · Ahmedabad Regional Development Authority Compliant</span>
          </div>

          {/* Right: Verification Status Badge */}
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-green-50 text-green-700 border border-green-200">
              IS 456 / IS 1893 Verified
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
