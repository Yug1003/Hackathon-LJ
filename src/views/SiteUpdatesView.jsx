import React, { useState } from 'react';
import { SITE_UPDATES } from '../data/projectData';
import {
  Calendar,
  CloudSun,
  Users,
  ShieldCheck,
  Camera,
  Plus,
  X
} from 'lucide-react';

export default function SiteUpdatesView({ isModalOpen, setIsModalOpen }) {
  const [updates, setUpdates] = useState(SITE_UPDATES);
  const [selectedUpdate, setSelectedUpdate] = useState(SITE_UPDATES[0]);
  const [newLogTitle, setNewLogTitle] = useState('');
  const [newLogSummary, setNewLogSummary] = useState('');
  const [newLogEngineer, setNewLogEngineer] = useState('Er. Rajesh Varma');

  const handleCreateLog = (e) => {
    e.preventDefault();
    if (!newLogTitle.trim()) return;

    const newEntry = {
      id: updates.length + 22,
      date: '20 Sept 2026',
      time: '12:00 PM',
      title: newLogTitle,
      engineer: newLogEngineer,
      weather: '34°C · Sunny',
      workforceTotal: 248,
      workforceDistribution: {
        barBenders: 72,
        carpenters: 64,
        masons: 48,
        mepTechnicians: 34,
        safetyMarshals: 12,
        craneOperators: 18
      },
      workSummary: newLogSummary || 'Daily inspection recorded. Structural alignment meets IS 456 standards.',
      safetyIncidents: 'Zero incidents recorded.',
      equipmentStatus: [
        { name: 'Tower Crane 01', status: 'Operational', uptime: '99%' },
        { name: 'Batching Plant', status: 'Active', uptime: '95%' }
      ],
      photos: [
        { title: 'Site Inspection Entry', location: 'Tower A · Level 12', notes: 'Field observation logged.' }
      ]
    };

    setUpdates([newEntry, ...updates]);
    setSelectedUpdate(newEntry);
    setIsModalOpen(false);
    setNewLogTitle('');
    setNewLogSummary('');
  };

  return (
    <div className="su-page-container">
      {/* Page Header Block */}
      <div className="su-header-row">
        <div className="su-header-left">
          <div className="su-eyebrow">Field Telemetry</div>
          <h1 className="su-title">Daily Site Updates & Inspection Logs</h1>
          <p className="su-description">
            Authenticated site logs recorded by licensed structural engineers and site supervisors.
          </p>
        </div>
        <button
          className="su-record-btn"
          onClick={() => setIsModalOpen(true)}
          type="button"
        >
          <Plus size={16} strokeWidth={2.5} />
          <span>Record Daily Site Log</span>
        </button>
      </div>

      {/* Two-Column Layout Grid */}
      <div className="su-layout-grid">
        {/* Left Column: Sticky, independently scrollable list */}
        <div className="su-left-column">
          {updates.map((log) => {
            const isSelected = selectedUpdate?.id === log.id;
            return (
              <div
                key={log.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedUpdate(log)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedUpdate(log);
                  }
                }}
                className={`su-list-card ${isSelected ? 'active' : ''}`}
              >
                <div className="su-card-top-row">
                  <span className="su-card-id">
                    SITE UPDATE #{log.id}
                  </span>
                  <span className="su-card-date">
                    {log.date}
                  </span>
                </div>
                <div className="su-card-title">
                  {log.title}
                </div>
                <div className="su-card-meta">
                  {log.engineer} · {log.workforceTotal} Workers
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Detail Panel */}
        {selectedUpdate && (
          <div key={selectedUpdate.id} className="su-detail-card">
            {/* Header */}
            <div className="su-detail-header">
              <div className="su-badge-pill">
                <Calendar size={13} strokeWidth={2.2} />
                <span>Site Update #{selectedUpdate.id} · {selectedUpdate.date} · {selectedUpdate.time}</span>
              </div>
              <div className="su-signoff">
                Sign-off: {selectedUpdate.engineer}
              </div>
              <h2 className="su-detail-title">
                {selectedUpdate.title}
              </h2>

              {/* Inline Chips */}
              <div className="su-chips-row">
                <div className="su-chip">
                  <CloudSun size={15} strokeWidth={2} className="su-chip-icon" />
                  <span><strong>Weather:</strong> {selectedUpdate.weather}</span>
                </div>
                <div className="su-chip">
                  <Users size={15} strokeWidth={2} className="su-chip-icon" />
                  <span><strong>Total Site Muster:</strong> {selectedUpdate.workforceTotal} personnel</span>
                </div>
                <div className={`su-chip ${!selectedUpdate.safetyIncidents || selectedUpdate.safetyIncidents.toLowerCase().includes('zero incidents') ? 'su-chip-safety-zero' : ''}`}>
                  <ShieldCheck size={15} strokeWidth={2} className="su-chip-icon" />
                  <span><strong>Safety Status:</strong> Zero Incidents</span>
                </div>
              </div>
            </div>

            <div className="su-divider"></div>

            {/* Work Summary & Field Observations */}
            <div className="su-section">
              <div className="su-section-title">Work Summary & Field Observations</div>
              <div className="su-work-summary-box">
                {selectedUpdate.workSummary}
              </div>
            </div>

            <div className="su-divider"></div>

            {/* Workforce Trade Distribution */}
            <div className="su-section">
              <div className="su-section-title">Workforce Trade Distribution</div>
              <div className="su-workforce-grid">
                {Object.entries(selectedUpdate.workforceDistribution).map(([trade, count]) => {
                  const total = selectedUpdate.workforceTotal || 248;
                  const share = Math.min(100, Math.round((count / total) * 100));
                  return (
                    <div key={trade} className="su-workforce-card">
                      <div>
                        <div className="su-workforce-label">
                          {trade.replace(/([A-Z])/g, ' $1')}
                        </div>
                        <div className="su-workforce-val-row">
                          <span className="su-workforce-val">{count}</span>
                          <span className="su-workforce-unit">Hands</span>
                        </div>
                      </div>
                      <div className="su-progress-track" title={`${share}% of total workforce (${total})`}>
                        <div className="su-progress-bar" style={{ width: `${share}%` }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="su-divider"></div>

            {/* Heavy Plant & Equipment Telemetry */}
            <div className="su-section">
              <div className="su-section-title">Heavy Plant & Equipment Telemetry</div>
              <div className="su-equipment-grid">
                {selectedUpdate.equipmentStatus.map((eq, i) => {
                  const uptimeNum = parseInt(eq.uptime, 10) || 0;
                  let badgeVariant = 'su-badge-amber';
                  let dotVariant = 'su-dot-amber';
                  if (uptimeNum >= 98) {
                    badgeVariant = 'su-badge-green';
                    dotVariant = 'su-dot-green';
                  } else if (uptimeNum < 90) {
                    badgeVariant = 'su-badge-red';
                    dotVariant = 'su-dot-red';
                  }

                  return (
                    <div key={i} className="su-equipment-card">
                      <div className="su-equipment-left">
                        <span className={`su-status-dot ${dotVariant}`}></span>
                        <span className="su-equipment-name">{eq.name}</span>
                      </div>
                      <span className={`su-uptime-badge ${badgeVariant}`}>
                        {eq.uptime} Uptime
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="su-divider"></div>

            {/* Photographic Engineering Verification */}
            <div className="su-section">
              <div className="su-section-title">Photographic Engineering Verification</div>
              <div className="su-photo-grid">
                {selectedUpdate.photos.map((p, idx) => (
                  <div key={idx} className="su-photo-card">
                    <div className="su-photo-banner">
                      <div className="su-photo-blueprint-overlay"></div>
                      <div className="su-photo-cam-badge">
                        <Camera size={18} strokeWidth={2} />
                      </div>
                      <span className="su-photo-tag-pill">SITE VERIFIED</span>
                    </div>
                    <div className="su-photo-content">
                      <div className="su-photo-loc">
                        <Camera size={13} strokeWidth={2.2} />
                        <span>{p.location}</span>
                      </div>
                      <div className="su-photo-title">
                        {p.title}
                      </div>
                      <div className="su-photo-notes">
                        {p.notes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for New Site Log */}
      {isModalOpen && (
        <div className="su-modal-overlay">
          <div className="su-modal-container">
            <div className="su-modal-header">
              <span className="su-modal-title">
                New Field Daily Site Log
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="su-modal-close-btn"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleCreateLog} className="su-modal-form">
              <div className="su-form-group">
                <label className="su-form-label">
                  Log Title / Milestone
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tower A 13th Floor Slab Concreting & Cube Cast"
                  value={newLogTitle}
                  onChange={(e) => setNewLogTitle(e.target.value)}
                  className="su-form-input"
                />
              </div>

              <div className="su-form-group">
                <label className="su-form-label">
                  Supervising Engineer
                </label>
                <input
                  type="text"
                  value={newLogEngineer}
                  onChange={(e) => setNewLogEngineer(e.target.value)}
                  className="su-form-input"
                />
              </div>

              <div className="su-form-group">
                <label className="su-form-label">
                  Observations & Progress Notes
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Record slump values, reinforcement checks, weather variations or trade delays..."
                  value={newLogSummary}
                  onChange={(e) => setNewLogSummary(e.target.value)}
                  className="su-form-textarea"
                />
              </div>

              <div className="su-modal-actions">
                <button
                  type="button"
                  className="su-btn-cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="su-btn-submit"
                >
                  Commit Log to Project Ledger
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
