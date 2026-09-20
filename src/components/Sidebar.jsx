import React from 'react';
import {
  LayoutDashboard,
  Database,
  ClipboardList,
  CheckSquare,
  AlertTriangle,
  Compass,
  FileText,
  Building,
  ChevronDown
} from 'lucide-react';

export default function Sidebar({ currentTab, setCurrentTab }) {
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
    <aside className="app-sidebar">
      {/* Brand Header */}
      <div className="sidebar-header">
        <div className="brand-logo-wrap">
          <div className="brand-symbol">
            <Building size={18} strokeWidth={2.2} />
          </div>
          <div>
            <div className="brand-name">
              CONSTRUCT<span>IQ</span>
            </div>
            <div className="brand-tagline">Engineering Command</div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="sidebar-nav">
        <div className="nav-section-label">Command Center</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setCurrentTab(item.id)}
            >
              <Icon className="nav-icon" strokeWidth={isActive ? 2.2 : 1.8} />
              <span>{item.label}</span>
              {item.isIntelligence && (
                <span className="nav-badge-intel">INTEL</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Project Switcher / Active Site Footer */}
      <div className="sidebar-footer">
        <div className="project-quick-selector">
          <div className="project-quick-name">
            <span>SUNRISE RESIDENCY</span>
            <ChevronDown size={14} color="#77746D" />
          </div>
          <div className="project-quick-loc">Ahmedabad · 3 Towers · 18F</div>
        </div>
      </div>
    </aside>
  );
}
