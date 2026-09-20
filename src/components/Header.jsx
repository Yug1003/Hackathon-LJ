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
  ChevronDown,
  Search,
  Bell
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
    <header className="site-top-navbar">
      {/* Upper Navigation Row: Brand + Project Telemetry + Global Actions */}
      <div className="navbar-upper">
        <div className="navbar-upper-left">
          {/* ConstructIQ Brand */}
          <div className="brand-logo-wrap" onClick={() => setCurrentTab('dashboard')} style={{ cursor: 'pointer' }}>
            <div className="brand-symbol">
              <Building size={17} strokeWidth={2.3} />
            </div>
            <div>
              <div className="brand-name">
                CONSTRUCT<span>IQ</span>
              </div>
              <div className="brand-tagline">Engineering Command</div>
            </div>
          </div>

          <div className="header-divider"></div>

          {/* Project Selector Badge */}
          <div className="project-badge-selector" title="Active Project">
            <div className="project-badge-top">
              <span className="status-indicator-dot" title="Active Construction Phase"></span>
              <span className="project-badge-title">{PROJECT_INFO.name}</span>
              <ChevronDown size={13} color="#77746D" />
            </div>
            <div className="project-badge-sub">
              {PROJECT_INFO.details} · <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{PROJECT_INFO.phase}</span>
            </div>
          </div>
        </div>

        <div className="navbar-upper-right">
          {/* Project Health Gauge */}
          <div className="health-gauge-badge" title="Structural & Schedule Health Composite">
            <Activity size={15} color="#557A62" />
            <div>
              <div className="health-gauge-title">Project Health</div>
              <div className="health-gauge-number tabular-nums">{PROJECT_INFO.healthScore}%</div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <button
            className="header-action-btn intel-quick-btn"
            onClick={onAskIntelClick}
            title="Ask Project Intelligence Engine"
          >
            <Compass size={14} color="var(--color-accent)" />
            <span>Project Intel</span>
          </button>

          <button
            className="header-action-btn primary"
            onClick={onNewSiteLogClick}
          >
            <Plus size={14} strokeWidth={2.5} />
            <span>Log Site Entry</span>
          </button>

          {/* User Profile Pill */}
          <div className="engineer-profile-pill" title="Current Certified Site Engineer">
            <div className="engineer-avatar">RV</div>
            <div className="engineer-info">
              <span className="engineer-name">Er. R. Varma</span>
              <span className="engineer-role">Lead Site Engineer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navigation Row: All Page Links */}
      <nav className="navbar-lower">
        <div className="navbar-nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                className={`top-nav-btn ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentTab(item.id)}
              >
                <Icon className="top-nav-icon" strokeWidth={isActive ? 2.2 : 1.8} />
                <span>{item.label}</span>
                {item.isIntelligence && (
                  <span className="nav-badge-intel">INTEL</span>
                )}
                {isActive && <span className="active-nav-indicator"></span>}
              </button>
            );
          })}
        </div>

        <div className="navbar-lower-meta">
          <span className="live-telemetry-badge">
            <span className="live-pulse"></span>
            248 Personnel Active On-Site
          </span>
          <span className="mono-nums meta-clock">
            {PROJECT_INFO.weather.temp} · {PROJECT_INFO.weather.condition}
          </span>
        </div>
      </nav>
    </header>
  );
}
