import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
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
  };

  const handleNewSiteLogClick = () => {
    setCurrentTab('site-updates');
    setIsSiteLogModalOpen(true);
  };

  const handleAskIntelClick = () => {
    setCurrentTab('ask-project');
  };

  return (
    <div className="app-container">
      {/* Left Navigation Sidebar */}
      <Sidebar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          if (tab !== 'ask-project') {
            setSelectedIntelQuery('');
          }
        }}
      />

      {/* Main Command Center Layout */}
      <main className="main-wrapper">
        <Header
          onNewSiteLogClick={handleNewSiteLogClick}
          onAskIntelClick={handleAskIntelClick}
        />

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
    </div>
  );
}
