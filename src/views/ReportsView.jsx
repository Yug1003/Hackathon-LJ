import React, { useState } from 'react';
import { PROJECT_INFO } from '../data/projectData';
import { FileText, Download, Printer, CheckCircle, ExternalLink, Calendar } from 'lucide-react';

export default function ReportsView() {
  const [selectedReport, setSelectedReport] = useState('weekly');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="view-container">
      <div className="section-header-wrap" style={{ marginBottom: '24px' }}>
        <div>
          <div className="hero-subtitle">Executive Governance</div>
          <h1 className="section-title" style={{ fontSize: '1.75rem' }}>Formal Engineering Reports & Dossiers</h1>
          <p className="section-caption">
            Standard certified reports for developers, structural auditors, and financial lenders.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            className="header-action-btn"
            onClick={handlePrint}
          >
            <Printer size={14} />
            <span>Print Dossier</span>
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '24px' }}>
        {/* Report Selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div
            onClick={() => setSelectedReport('weekly')}
            className={`critical-card ${selectedReport === 'weekly' ? 'active' : ''}`}
            style={{
              padding: '16px',
              cursor: 'pointer',
              borderColor: selectedReport === 'weekly' ? 'var(--color-accent)' : 'var(--color-border)',
              boxShadow: selectedReport === 'weekly' ? '0 0 0 1px var(--color-accent)' : 'none'
            }}
          >
            <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-olive)' }}>
              Weekly Milestone Review
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '4px' }}>
              Superstructure Progress Report #W-38
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
              Week ending 20 Sept 2026
            </div>
          </div>

          <div
            onClick={() => setSelectedReport('qa')}
            className={`critical-card ${selectedReport === 'qa' ? 'active' : ''}`}
            style={{
              padding: '16px',
              cursor: 'pointer',
              borderColor: selectedReport === 'qa' ? 'var(--color-accent)' : 'var(--color-border)',
              boxShadow: selectedReport === 'qa' ? '0 0 0 1px var(--color-accent)' : 'none'
            }}
          >
            <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-olive)' }}>
              Quality Assurance
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '4px' }}>
              IS 456 Structural Concrete & Rebar Audit
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
              Certified Cube Strength Dossier
            </div>
          </div>

          <div
            onClick={() => setSelectedReport('cost')}
            className={`critical-card ${selectedReport === 'cost' ? 'active' : ''}`}
            style={{
              padding: '16px',
              cursor: 'pointer',
              borderColor: selectedReport === 'cost' ? 'var(--color-accent)' : 'var(--color-border)',
              boxShadow: selectedReport === 'cost' ? '0 0 0 1px var(--color-accent)' : 'none'
            }}
          >
            <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-olive)' }}>
              Financial Variance
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '4px' }}>
              Phase 2 BOQ Escalation & Contingency Audit
            </div>
            <div style={{ fontSize: '0.74rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
              SAP ERP Reconciliation
            </div>
          </div>
        </div>

        {/* Selected Report Content */}
        <div className="intelligence-report-card">
          <div className="report-banner">
            <div className="report-doc-id">
              <FileText size={15} color="#77746D" />
              <span>DOSSIER: SUNRISE-ENG-{selectedReport.toUpperCase()}-2026</span>
              <span style={{ color: 'var(--color-border)' }}>|</span>
              <span>Ahmedabad Regional Authority Certified</span>
            </div>
            <div className="report-stamp">Certified Sign-off</div>
          </div>

          <div className="report-body">
            <div className="report-section">
              <div className="report-label">Project Dossier</div>
              <h2 className="report-question-heading">
                {selectedReport === 'weekly' && 'Weekly Superstructure Execution & Handover Assessment'}
                {selectedReport === 'qa' && 'Structural Concrete Cube Tests & Rebar Metallurgy Compliance'}
                {selectedReport === 'cost' && 'Phase 2 Capital Expenditure & BOQ Variance Reconciliation'}
              </h2>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                Issued by Office of the Project Director · Sunrise Residency, Ahmedabad
              </div>
            </div>

            <div className="report-section">
              <div className="report-label">Executive Engineering Summary</div>
              <div className="report-root-cause-box" style={{ borderLeftColor: 'var(--color-olive)' }}>
                {selectedReport === 'weekly' &&
                  'Superstructure progress across Towers A, B, and C stands at 68.3% cumulative execution against a baseline of 70.1%. A net variance of 4 days on Tower A column concreting is under active resolution via alternate rebar dispatch. Tower B and Tower C maintain scheduled milestone pace.'}
                {selectedReport === 'qa' &&
                  '28-day compressive strength tests for 18 sets of M35 grade concrete cubes across Tower B columns averaged 41.2 N/mm² (exceeding specified target characteristic strength of 35 N/mm²). Rebar chemical composition test verified sulfur and phosphorus within IS 1786 tolerances.'}
                {selectedReport === 'cost' &&
                  'Cumulative civil and MEP expenditures stand at ₹41.2 Cr against committed budget of ₹41.8 Cr (-1.4% favorable variance). Contingency reserve balance of ₹2.4 Cr remains intact with zero unbudgeted structural change-orders logged.'}
              </div>
            </div>

            <div className="report-section">
              <div className="report-label">Key Governance Indicators</div>
              <div className="report-impact-grid">
                <div className="impact-tile">
                  <div className="report-label">Overall Project Health</div>
                  <div className="impact-tile-val mono-nums" style={{ color: 'var(--color-olive)' }}>82%</div>
                  <div className="impact-tile-detail">Weighted average across Schedule, Cost, Safety & Quality</div>
                </div>
                <div className="impact-tile">
                  <div className="report-label">Workforce Mobilization</div>
                  <div className="impact-tile-val mono-nums">248 Personnel</div>
                  <div className="impact-tile-detail">Full capacity across bar bending, formwork, and MEP trades</div>
                </div>
              </div>
            </div>

            <div className="report-section">
              <div className="report-label">Authorized Signatories</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '10px' }}>
                <div style={{ border: '1px solid var(--color-border)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>Er. Rajesh Varma</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>Principal Site Engineer (Civil)</div>
                  <div className="mono-nums" style={{ fontSize: '0.7rem', color: 'var(--color-olive)', marginTop: '8px' }}>
                    Digitally Signed · 20-09-2026
                  </div>
                </div>
                <div style={{ border: '1px solid var(--color-border)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800 }}>Dr. V. K. Sanghavi</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>Chief Structural Consultant, SV Consultants</div>
                  <div className="mono-nums" style={{ fontSize: '0.7rem', color: 'var(--color-olive)', marginTop: '8px' }}>
                    Digitally Signed · 20-09-2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
