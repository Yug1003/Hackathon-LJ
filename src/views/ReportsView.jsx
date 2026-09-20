import React, { useState } from 'react';
import { PROJECT_INFO } from '../data/projectData';
import {
  Printer,
  FileText,
  BadgeCheck,
  Users,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function ReportsView() {
  const [selectedReport, setSelectedReport] = useState('weekly');

  const handlePrint = () => {
    window.print();
  };

  const reports = [
    {
      id: 'weekly',
      category: 'WEEKLY MILESTONE REVIEW',
      categoryType: 'milestone',
      title: 'Superstructure Progress Report #W-38',
      subtitle: 'Week ending 20 Sept 2026'
    },
    {
      id: 'qa',
      category: 'QUALITY ASSURANCE',
      categoryType: 'quality',
      title: 'IS 456 Structural Concrete & Rebar Audit',
      subtitle: 'Certified Cube Strength Dossier'
    },
    {
      id: 'cost',
      category: 'FINANCIAL VARIANCE',
      categoryType: 'financial',
      title: 'Phase 2 BOQ Escalation & Contingency Audit',
      subtitle: 'SAP ERP Reconciliation'
    }
  ];

  return (
    <div className="reports-page-container">
      {/* Page Header Block */}
      <div className="reports-header-row">
        <div className="reports-header-left">
          <div className="reports-eyebrow">Executive Governance</div>
          <h1 className="reports-title">Formal Engineering Reports & Dossiers</h1>
          <p className="reports-description">
            Standard certified reports for developers, structural auditors, and financial lenders.
          </p>
        </div>
        <button
          className="reports-print-btn"
          onClick={handlePrint}
          type="button"
          aria-label="Print Dossier"
        >
          <Printer size={16} />
          <span>Print Dossier</span>
        </button>
      </div>

      {/* Two-Column Layout Grid */}
      <div className="reports-layout-grid">
        {/* Left Column: Sticky, independently scrollable report list */}
        <div className="reports-sidebar" role="tablist" aria-label="Available Dossiers">
          {reports.map((report) => {
            const isSelected = selectedReport === report.id;
            return (
              <div
                key={report.id}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => setSelectedReport(report.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedReport(report.id);
                  }
                }}
                className={`reports-list-card ${isSelected ? 'active' : ''}`}
              >
                <div className="reports-card-main">
                  <div className="reports-category-tag">
                    <span className={`reports-category-dot ${report.categoryType}`}></span>
                    <span>{report.category}</span>
                  </div>
                  <div className="reports-item-title">
                    {report.title}
                  </div>
                  <div className="reports-item-subtitle">
                    {report.subtitle}
                  </div>
                </div>
                {isSelected && (
                  <ChevronRight size={16} className="reports-chevron-icon" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right Dossier Panel */}
        <div key={selectedReport} className="reports-dossier-card">
          {/* Top Metadata Row */}
          <div className="reports-top-meta-row">
            <div className="reports-dossier-pill">
              <FileText size={14} className="reports-dossier-pill-icon" />
              <span>DOSSIER: SUNRISE-ENG-{selectedReport.toUpperCase()}-2026</span>
            </div>
            <div className="reports-certified-pill">
              <BadgeCheck size={14} />
              <span>Ahmedabad Regional Authority Certified</span>
            </div>
          </div>

          {/* Subline Meta Badges */}
          <div className="reports-meta-subline">
            <span>Certified Sign-off</span>
            <span className="reports-meta-dot">·</span>
            <span>Project Dossier</span>
          </div>

          {/* Dossier Document Title */}
          <h2 className="reports-dossier-title">
            {selectedReport === 'weekly' && 'Weekly Superstructure Execution & Handover Assessment'}
            {selectedReport === 'qa' && 'Structural Concrete Cube Tests & Rebar Metallurgy Compliance'}
            {selectedReport === 'cost' && 'Phase 2 Capital Expenditure & BOQ Variance Reconciliation'}
          </h2>

          <div className="reports-dossier-issuer">
            Issued by Office of the Project Director · Sunrise Residency, Ahmedabad
          </div>

          <hr className="reports-dossier-divider" />

          {/* Section 1: Executive Engineering Summary */}
          <div className="reports-section">
            <div className="reports-section-title">Executive Engineering Summary</div>
            <div className="reports-summary-box">
              {selectedReport === 'weekly' &&
                'Superstructure progress across Towers A, B, and C stands at 68.3% cumulative execution against a baseline of 70.1%. A net variance of 4 days on Tower A column concreting is under active resolution via alternate rebar dispatch. Tower B and Tower C maintain scheduled milestone pace.'}
              {selectedReport === 'qa' &&
                '28-day compressive strength tests for 18 sets of M35 grade concrete cubes across Tower B columns averaged 41.2 N/mm² (exceeding specified target characteristic strength of 35 N/mm²). Rebar chemical composition test verified sulfur and phosphorus within IS 1786 tolerances.'}
              {selectedReport === 'cost' &&
                'Cumulative civil and MEP expenditures stand at ₹41.2 Cr against committed budget of ₹41.8 Cr (-1.4% favorable variance). Contingency reserve balance of ₹2.4 Cr remains intact with zero unbudgeted structural change-orders logged.'}
            </div>
          </div>

          {/* Section 2: Key Governance Indicators */}
          <div className="reports-section">
            <div className="reports-section-title">Key Governance Indicators</div>
            <div className="reports-metrics-grid">
              {/* Overall Project Health */}
              <div className="reports-metric-card">
                <div className="reports-metric-label">Overall Project Health</div>
                <div className="reports-metric-val-row">
                  <span className="reports-metric-num">82%</span>
                </div>
                <div className="reports-progress-track">
                  <div className="reports-progress-fill" style={{ width: '82%' }}></div>
                </div>
                <div className="reports-metric-desc">
                  Weighted average across Schedule, Cost, Safety & Quality
                </div>
              </div>

              {/* Workforce Mobilization */}
              <div className="reports-metric-card">
                <div className="reports-metric-label">Workforce Mobilization</div>
                <div className="reports-metric-val-row">
                  <span className="reports-metric-num">248</span>
                  <span className="reports-metric-unit">Personnel</span>
                  <Users size={18} className="reports-metric-icon" />
                </div>
                <div className="reports-metric-desc">
                  Full capacity across bar bending, formwork, and MEP trades
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Authorized Signatories */}
          <div className="reports-section">
            <div className="reports-section-title">Authorized Signatories</div>
            <div className="reports-signatories-grid">
              <div className="reports-signatory-card">
                <div className="reports-signatory-top">
                  <div className="reports-signatory-avatar">RV</div>
                  <div className="reports-signatory-info">
                    <div className="reports-signatory-name">Er. Rajesh Varma</div>
                    <div className="reports-signatory-role">Principal Site Engineer (Civil)</div>
                  </div>
                </div>
                <div className="reports-signatory-bottom">
                  <ShieldCheck size={14} className="reports-signatory-stamp-icon" />
                  <span>Digitally Signed · 20-09-2026</span>
                </div>
              </div>

              <div className="reports-signatory-card">
                <div className="reports-signatory-top">
                  <div className="reports-signatory-avatar">VS</div>
                  <div className="reports-signatory-info">
                    <div className="reports-signatory-name">Dr. V. K. Sanghavi</div>
                    <div className="reports-signatory-role">Chief Structural Consultant, SV Consultants</div>
                  </div>
                </div>
                <div className="reports-signatory-bottom">
                  <ShieldCheck size={14} className="reports-signatory-stamp-icon" />
                  <span>Digitally Signed · 20-09-2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
