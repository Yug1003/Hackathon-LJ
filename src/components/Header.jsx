import React from 'react';
import { PROJECT_INFO } from '../data/projectData';
import { Calendar, Users, Activity, Plus } from 'lucide-react';

export default function Header({ onNewSiteLogClick, onAskIntelClick }) {
  return (
    <header className="project-header">
      <div className="header-left">
        <div className="project-title-area">
          <div className="project-main-name">
            <span className="status-indicator-dot" title="Active Construction Site"></span>
            {PROJECT_INFO.name}
          </div>
          <div className="project-subtext">
            {PROJECT_INFO.details}
          </div>
        </div>

        <div className="header-divider"></div>

        <div className="header-metric-pill">
          <span className="header-metric-label">Site Phase</span>
          <span className="header-metric-value">{PROJECT_INFO.phase}</span>
        </div>

        <div className="header-divider"></div>

        <div className="header-metric-pill">
          <span className="header-metric-label">Target Handover</span>
          <span className="header-metric-value tabular-nums">{PROJECT_INFO.daysToHandover} Days Remaining</span>
        </div>
      </div>

      <div className="header-right">
        {/* Project Health Gauge */}
        <div className="health-gauge-badge" title="Structural & Schedule Health Composite">
          <Activity size={15} color="#557A62" />
          <div>
            <div className="health-gauge-title">Project Health</div>
            <div className="health-gauge-number tabular-nums">{PROJECT_INFO.healthScore}%</div>
          </div>
        </div>

        {/* Quick Actions */}
        <button
          className="header-action-btn"
          onClick={onAskIntelClick}
          title="Query Project Intelligence Engine"
        >
          <span>Query Intelligence</span>
        </button>

        <button
          className="header-action-btn primary"
          onClick={onNewSiteLogClick}
        >
          <Plus size={14} strokeWidth={2.5} />
          <span>Log Site Entry</span>
        </button>
      </div>
    </header>
  );
}
