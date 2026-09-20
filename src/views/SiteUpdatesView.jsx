import React, { useState } from 'react';
import { SITE_UPDATES } from '../data/projectData';
import {
  Calendar,
  CloudSun,
  HardHat,
  Truck,
  ShieldCheck,
  Camera,
  ChevronDown,
  Plus,
  CheckCircle2
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
    <div className="view-container">
      <div className="section-header-wrap" style={{ marginBottom: '24px' }}>
        <div>
          <div className="hero-subtitle">Field Telemetry</div>
          <h1 className="section-title" style={{ fontSize: '1.75rem' }}>Daily Site Updates & Inspection Logs</h1>
          <p className="section-caption">
            Authenticated site logs recorded by licensed structural engineers and site supervisors.
          </p>
        </div>
        <button
          className="header-action-btn primary"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={14} strokeWidth={2.5} />
          <span>Record Daily Site Log</span>
        </button>
      </div>

      {/* Log Feed + Detail View */}
      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '24px' }}>
        {/* Left: Log Directory */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {updates.map((log) => {
            const isSelected = selectedUpdate.id === log.id;
            return (
              <div
                key={log.id}
                onClick={() => setSelectedUpdate(log)}
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: isSelected ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                  boxShadow: isSelected ? '0 0 0 1px var(--color-accent)' : 'var(--shadow-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '16px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span className="mono-nums" style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                    SITE UPDATE #{log.id}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>
                    {log.date}
                  </span>
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.35, marginBottom: '6px' }}>
                  {log.title}
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--color-text-secondary)' }}>
                  {log.engineer} · {log.workforceTotal} Workers
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Detailed Inspection Dossier */}
        {selectedUpdate && (
          <div className="intelligence-report-card" style={{ marginBottom: 0 }}>
            <div className="report-banner">
              <div className="report-doc-id">
                <Calendar size={14} color="#77746D" />
                <span>Site Update #{selectedUpdate.id}</span>
                <span style={{ color: 'var(--color-border)' }}>|</span>
                <span>{selectedUpdate.date} · {selectedUpdate.time}</span>
              </div>
              <div className="report-stamp">
                Sign-off: {selectedUpdate.engineer}
              </div>
            </div>

            <div className="report-body">
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '8px' }}>
                {selectedUpdate.title}
              </h2>

              <div style={{ display: 'flex', gap: '20px', fontSize: '0.78rem', color: 'var(--color-text-secondary)', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--color-secondary)' }}>
                <div><strong>Weather:</strong> {selectedUpdate.weather}</div>
                <div><strong>Total Site Muster:</strong> {selectedUpdate.workforceTotal} personnel</div>
                <div><strong>Safety Status:</strong> Zero Incidents</div>
              </div>

              {/* Work Summary */}
              <div className="report-section">
                <div className="report-label">Work Summary & Field Observations</div>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-text)', backgroundColor: 'var(--color-bg)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  {selectedUpdate.workSummary}
                </div>
              </div>

              {/* Workforce Distribution */}
              <div className="report-section">
                <div className="report-label">Workforce Trade Distribution</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {Object.entries(selectedUpdate.workforceDistribution).map(([trade, count]) => (
                    <div key={trade} style={{ backgroundColor: 'var(--color-bg)', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                      <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                        {trade.replace(/([A-Z])/g, ' $1')}
                      </div>
                      <div className="mono-nums" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '2px' }}>
                        {count} Hands
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment Telemetry */}
              <div className="report-section">
                <div className="report-label">Heavy Plant & Equipment Telemetry</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {selectedUpdate.equipmentStatus.map((eq, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', backgroundColor: '#FAF9F6' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{eq.name}</span>
                      <span className="critical-badge badge-monitoring mono-nums">{eq.uptime} Uptime</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Site Photos Inspection Notes */}
              <div className="report-section">
                <div className="report-label">Photographic Engineering Verification</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {selectedUpdate.photos.map((p, idx) => (
                    <div key={idx} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '12px', backgroundColor: 'var(--color-bg)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 700, marginBottom: '4px' }}>
                        <Camera size={13} />
                        <span>{p.location}</span>
                      </div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px' }}>
                        {p.title}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                        {p.notes}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal for New Site Log */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(32, 32, 32, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          backdropFilter: 'blur(2px)'
        }}>
          <div style={{
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            width: '560px',
            maxWidth: '90vw',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            overflow: 'hidden'
          }}>
            <div className="report-banner">
              <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                New Field Daily Site Log
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: 'var(--color-text-secondary)' }}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleCreateLog} style={{ padding: '24px' }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  Log Title / Milestone
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tower A 13th Floor Slab Concreting & Cube Cast"
                  value={newLogTitle}
                  onChange={(e) => setNewLogTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  Supervising Engineer
                </label>
                <input
                  type="text"
                  value={newLogEngineer}
                  onChange={(e) => setNewLogEngineer(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                  Observations & Progress Notes
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Record slump values, reinforcement checks, weather variations or trade delays..."
                  value={newLogSummary}
                  onChange={(e) => setNewLogSummary(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  className="header-action-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="header-action-btn primary"
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
