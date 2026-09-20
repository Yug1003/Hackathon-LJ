import React, { useState } from 'react';
import { PROJECT_DATA_SPECS, PROJECT_INFO } from '../data/projectData';
import { Database, FileCode, Users, Layers, Download, CheckCircle, ExternalLink } from 'lucide-react';

export default function ProjectDataView() {
  const [activeTab, setActiveTab] = useState('specs');

  return (
    <div className="view-container">
      <div className="section-header-wrap" style={{ marginBottom: '24px' }}>
        <div>
          <div className="hero-subtitle">Engineering Repositories</div>
          <h1 className="section-title" style={{ fontSize: '1.75rem' }}>Project Master Data & Specifications</h1>
          <p className="section-caption">
            Structural design basis, Bill of Quantities (BOQ), contractor contracts, and technical compliance.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            className={`intel-filter-chip ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            Structural Specs
          </button>
          <button
            className={`intel-filter-chip ${activeTab === 'boq' ? 'active' : ''}`}
            onClick={() => setActiveTab('boq')}
          >
            BOQ & Cost Ledger
          </button>
          <button
            className={`intel-filter-chip ${activeTab === 'contractors' ? 'active' : ''}`}
            onClick={() => setActiveTab('contractors')}
          >
            Contractor Roster
          </button>
        </div>
      </div>

      {activeTab === 'specs' && (
        <div className="critical-issues-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div className="critical-card">
            <h3 className="section-title" style={{ fontSize: '1.05rem', marginBottom: '14px' }}>
              Structural Engineering Parameters
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {PROJECT_DATA_SPECS.structuralSpecs.slice(0, 4).map((spec, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--color-secondary)', paddingBottom: '10px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    {spec.label}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '2px' }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="critical-card">
            <h3 className="section-title" style={{ fontSize: '1.05rem', marginBottom: '14px' }}>
              Material Standards & Seismic Codes
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {PROJECT_DATA_SPECS.structuralSpecs.slice(4).map((spec, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--color-secondary)', paddingBottom: '10px' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    {spec.label}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)', marginTop: '2px' }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'boq' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Package Description</th>
                <th>Allocated Budget</th>
                <th>Committed / Billed</th>
                <th>Balance Available</th>
                <th>Cost Variance</th>
                <th>Audit Status</th>
              </tr>
            </thead>
            <tbody>
              {PROJECT_DATA_SPECS.boqSummary.map((item, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 700 }}>{item.item}</td>
                  <td className="mono-nums">{item.budget}</td>
                  <td className="mono-nums">{item.committed}</td>
                  <td className="mono-nums">{item.balance}</td>
                  <td
                    className="mono-nums"
                    style={{
                      fontWeight: 700,
                      color: item.variance.startsWith('-') ? 'var(--color-status-success)' : 'var(--color-status-warning)'
                    }}
                  >
                    {item.variance}
                  </td>
                  <td>
                    <span className="critical-badge badge-monitoring">Verified</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'contractors' && (
        <div className="critical-issues-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {PROJECT_DATA_SPECS.contractors.map((c, i) => (
            <div key={i} className="critical-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 className="critical-title">{c.name}</h3>
                <span className="critical-badge badge-monitoring">Rating: {c.rating}</span>
              </div>
              <div className="critical-location">{c.scope}</div>
              <div className="critical-impact-box">
                <div className="critical-impact-row">
                  <span className="critical-impact-label">Deployed Labor Force</span>
                  <span className="critical-impact-val mono-nums">{c.workers} Workers</span>
                </div>
                <div className="critical-impact-row">
                  <span className="critical-impact-label">Safety Compliance Score</span>
                  <span className="critical-impact-val positive">99.4% (Zero Violations)</span>
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                Registered Under Contract Agreement #AGR-2025-GUJ-88
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
