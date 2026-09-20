import React from 'react';
import { PROJECT_INFO } from '../data/projectData';
import {
  Building,
  LayoutDashboard,
  Database,
  ClipboardList,
  CheckSquare,
  AlertTriangle,
  Compass,
  FileText,
  Activity,
  Plus,
  ChevronDown
} from 'lucide-react';

export default function Header({
  currentTab,
  setCurrentTab,
  onNewSiteLogClick,
  onAskIntelClick
}) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'project-data', label: 'Project Data', icon: Database },
    { id: 'site-updates', label: 'Site Updates', icon: ClipboardList },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'risks', label: 'Risks', icon: AlertTriangle },
    { id: 'ask-project', label: 'Ask Project', icon: Compass, isIntelligence: true },
    { id: 'reports', label: 'Reports', icon: FileText }
  ];

  return (
    <header className="site-unified-navbar">
      <div className="navbar-container">
        {/* Brand & Project Identity */}
        <div className="navbar-brand-section">
          <div
            className="brand-logo-wrap"
            onClick={() => setCurrentTab('dashboard')}
            role="button"
            tabIndex={0}
            title="ConstructIQ Home"
          >
            <div className="brand-symbol">
              <Building size={16} strokeWidth={2.4} />
            </div>
            <div className="brand-text-block">
              <div className="brand-name">
                CONSTRUCT<span>IQ</span>
              </div>
            </div>
          </div>

          <div className="navbar-vertical-divider"></div>

          {/* Project Indicator */}
          <div className="navbar-project-indicator" title="Active High-Rise Project">
            <span className="status-indicator-dot"></span>
            <div className="project-indicator-text">
              <span className="project-indicator-name">{PROJECT_INFO.name}</span>
              <span className="project-indicator-loc">Ahmedabad · 18F</span>
            </div>
          </div>
        </div>

        {/* Central Navigation Tabs - Spacious and Clean */}
        <nav className="navbar-central-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                className={`unified-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentTab(item.id)}
              >
                <Icon size={15} strokeWidth={isActive ? 2.2 : 1.8} className="nav-link-icon" />
                <span>{item.label}</span>
                {item.isIntelligence && (
                  <span className="unified-nav-badge">INTEL</span>
                )}
                {isActive && <span className="nav-active-bar"></span>}
              </button>
            );
          })}
        </nav>

        {/* Right Actions & Health Telemetry */}
        <div className="navbar-right-actions">
          {/* Health Gauge */}
          <div className="unified-health-badge" title="Project Health composite score">
            <Activity size={14} color="#557A62" strokeWidth={2.2} />
            <span className="health-badge-label">Health</span>
            <span className="health-badge-val mono-nums">{PROJECT_INFO.healthScore}%</span>
          </div>

          {/* Primary CTA */}
          <button
            className="navbar-cta-btn"
            onClick={onNewSiteLogClick}
          >
            <Plus size={14} strokeWidth={2.5} />
            <span>Log Entry</span>
          </button>
        </div>
      </div>
    </header>
  );
}
