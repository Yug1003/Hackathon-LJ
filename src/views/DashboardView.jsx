import React from 'react';
import {
  PROJECT_INFO,
  CRITICAL_ISSUES,
  TOWER_STATUS
} from '../data/projectData';
import {
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Clock,
  HardHat,
  Truck,
  CheckCircle2,
  AlertCircle,
  FileCheck2,
  Layers,
  MapPin,
  Calendar,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';

export default function DashboardView({ onOpenIntelQuestion }) {
  return (
    <div className="view-container spacious-layout">
      {/* Hero Section - Bold Architectural Presence with Generous Air */}
      <section className="dashboard-hero-spacious">
        <div className="hero-kicker-wrap">
          <span className="hero-kicker-tag">PROJECT OVERVIEW</span>
          <span className="hero-kicker-sep">/</span>
          <span className="hero-kicker-meta">Command Center Telemetry</span>
        </div>
        <h1 className="hero-title-large">
          Good morning. Here's what needs your attention.
        </h1>
        <p className="hero-lead-text">
          Active superstructure civil execution at Sunrise Residency. 3 critical operational bottlenecks flagged across Procurement, Inventory, and MEP coordination.
        </p>

        {/* Spacious Project Meta Ribbon */}
        <div className="project-editorial-ribbon">
          <div className="ribbon-item">
            <span className="ribbon-label">Location & Structure</span>
            <span className="ribbon-val">{PROJECT_INFO.name} · {PROJECT_INFO.details}</span>
          </div>
          <div className="ribbon-item">
            <span className="ribbon-label">Current Execution Phase</span>
            <span className="ribbon-val">
              <span className="status-indicator-dot" style={{ display: 'inline-block', marginRight: '6px' }}></span>
              {PROJECT_INFO.phase}
            </span>
          </div>
          <div className="ribbon-item">
            <span className="ribbon-label">Handover Timeline</span>
            <span className="ribbon-val mono-nums">{PROJECT_INFO.daysToHandover} Days to Handover ({PROJECT_INFO.targetCompletion})</span>
          </div>
          <div className="ribbon-item">
            <span className="ribbon-label">Active Field Deployment</span>
            <span className="ribbon-val mono-nums">{PROJECT_INFO.workforceOnSite} Personnel Certified On-Site</span>
          </div>
        </div>
      </section>

      {/* SECTION 1: The 3 Critical Project Issues - Roomy & High Contrast */}
      <section className="dashboard-major-section">
        <div className="section-headline-bar">
          <div>
            <div className="section-kicker">Priority 1 / Immediate Resolution</div>
            <h2 className="section-title-large">Critical Attention Items</h2>
            <p className="section-subtitle">
              Prioritized impediments impacting schedule baseline, material inventory, and consultant sign-offs.
            </p>
          </div>
          <div className="section-action-meta">
            <span className="critical-counter-pill">3 Active Impediments</span>
          </div>
        </div>

        <div className="critical-issues-grid-spacious">
          {CRITICAL_ISSUES.map((issue) => {
            const badgeClass =
              issue.priorityLevel === 'critical'
                ? 'badge-critical'
                : issue.priorityLevel === 'warning'
                ? 'badge-warning'
                : 'badge-monitoring';

            return (
              <div key={issue.id} className="critical-card-spacious">
                <div className="card-top-row">
                  <span className="card-mono-index">{issue.id}</span>
                  <span className={`critical-badge ${badgeClass}`}>
                    {issue.priority}
                  </span>
                </div>

                <div className="card-title-group">
                  <h3 className="card-major-title">{issue.title}</h3>
                  <div className="card-sub-location">{issue.location}</div>
                </div>

                <div className="card-impact-panel">
                  <div className="impact-line">
                    <span className="impact-line-label">Impact Analysis:</span>
                    <span className="impact-line-value">{issue.impact}</span>
                  </div>
                  <div className="impact-line">
                    <span className="impact-line-label">Cost Exposure:</span>
                    <span className="impact-line-value mono-nums">{issue.costRisk}</span>
                  </div>
                </div>

                <div className="card-recommendation-block">
                  <div className="rec-header-label">Recommended Action</div>
                  <p className="rec-body-text">{issue.recommendation}</p>
                </div>

                <div className="card-footer-action">
                  <button
                    className="intel-inspect-button"
                    onClick={() => onOpenIntelQuestion(issue.questionQuery)}
                  >
                    <span>Inspect in Project Intelligence</span>
                    <ArrowRight size={14} className="action-arrow" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: Key Site Telemetry & Engineering Indicators */}
      <section className="dashboard-major-section">
        <div className="section-headline-bar">
          <div>
            <div className="section-kicker">Operational Metrics</div>
            <h2 className="section-title-large">Site Telemetry & Performance Variance</h2>
            <p className="section-subtitle">
              Measured against certified Primavera baseline schedules and chartered quantity survey certificates.
            </p>
          </div>
          <span className="section-meta-text">
            {PROJECT_INFO.lastUpdate}
          </span>
        </div>

        <div className="metrics-grid-spacious">
          <div className="metric-tile-spacious">
            <div className="metric-tile-header">
              <span className="metric-tile-label">Active Workforce</span>
              <HardHat size={18} color="#77746D" />
            </div>
            <div className="metric-tile-number mono-nums">{PROJECT_INFO.workforceOnSite}</div>
            <div className="metric-tile-sub positive">
              <span>98% target mobilization</span> · 6 trades active
            </div>
          </div>

          <div className="metric-tile-spacious">
            <div className="metric-tile-header">
              <span className="metric-tile-label">Critical Path Schedule Variance</span>
              <Clock size={18} color="#B65345" />
            </div>
            <div className="metric-tile-number mono-nums" style={{ color: 'var(--color-status-critical)' }}>
              +4 Days
            </div>
            <div className="metric-tile-sub critical">
              Tower A rebar transit delay (Hazira freight)
            </div>
          </div>

          <div className="metric-tile-spacious">
            <div className="metric-tile-header">
              <span className="metric-tile-label">Capital Expenditure vs Budget</span>
              <TrendingDown size={18} color="#557A62" />
            </div>
            <div className="metric-tile-number mono-nums">₹41.2 Cr</div>
            <div className="metric-tile-sub positive">
              -1.4% Net Favorable Variance (Allocated: ₹68.4 Cr)
            </div>
          </div>

          <div className="metric-tile-spacious">
            <div className="metric-tile-header">
              <span className="metric-tile-label">Meteorology / Pour Readiness</span>
              <Truck size={18} color="#6F7658" />
            </div>
            <div className="metric-tile-number mono-nums">{PROJECT_INFO.weather.temp}</div>
            <div className="metric-tile-sub positive">
              {PROJECT_INFO.weather.condition} · Humidity {PROJECT_INFO.weather.humidity}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Superstructure Elevation Matrix */}
      <section className="dashboard-major-section">
        <div className="section-headline-bar">
          <div>
            <div className="section-kicker">Structural Progress</div>
            <h2 className="section-title-large">Superstructure Elevation Matrix</h2>
            <p className="section-subtitle">
              Slab cycles, shuttering strike intervals, and vertical progression across all 3 towers.
            </p>
          </div>
        </div>

        <div className="towers-grid-spacious">
          {TOWER_STATUS.map((item) => (
            <div key={item.tower} className="tower-card-spacious">
              <div className="tower-header-row">
                <div>
                  <h3 className="tower-title-text">{item.tower}</h3>
                  <div className="tower-floor-stage">{item.currentFloor}</div>
                </div>
                <span
                  className={`critical-badge ${
                    item.statusType === 'critical' ? 'badge-critical' : 'badge-monitoring'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="tower-bar-track">
                <div
                  className={`tower-bar-fill ${item.statusType === 'critical' ? 'accent' : ''}`}
                  style={{ width: `${item.completionRate}%` }}
                ></div>
              </div>

              <div className="tower-stat-row-top">
                <span className="stat-label-muted">Structural Completion</span>
                <span className="mono-nums stat-bold-val">
                  {item.completionRate}% ({item.currentFloor.split(' ')[0]} / {item.targetFloor} Floors)
                </span>
              </div>

              <div className="tower-stats-panel">
                <div className="tower-stat-item">
                  <div className="stat-label-muted">Assigned Workforce</div>
                  <div className="mono-nums stat-highlight-val">{item.workforce} Masons & Carpenters</div>
                </div>
                <div className="tower-stat-item">
                  <div className="stat-label-muted">Critical Path Milestone</div>
                  <div className="stat-highlight-val">{item.criticalPath}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Certified Engineering Quality Logs */}
      <section className="dashboard-major-section" style={{ marginBottom: '40px' }}>
        <div className="section-headline-bar">
          <div>
            <div className="section-kicker">Quality Assurance Dossier</div>
            <h2 className="section-title-large">Certified Engineering Inspection Logs</h2>
            <p className="section-subtitle">
              Field observations, cube strength verifications, and compliance with IS 456 / IS 1893.
            </p>
          </div>
        </div>

        <div className="spacious-table-wrapper">
          <table className="data-table spacious-table">
            <thead>
              <tr>
                <th>Log Code</th>
                <th>Time & Date</th>
                <th>Structural Milestone Inspected</th>
                <th>Quality / Slump Testing</th>
                <th>Supervising Engineer</th>
                <th>Compliance Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mono-nums" style={{ fontWeight: 800, color: 'var(--color-primary)' }}>
                  LOG-2026-024
                </td>
                <td className="mono-nums">Today, 09:30 IST</td>
                <td style={{ fontWeight: 600 }}>Tower B · Level 14 Columns Concreting (48 m³)</td>
                <td>IS 456 Slump: 125mm · 6 Cubes Cast</td>
                <td>Er. Rajesh Varma</td>
                <td><span className="critical-badge badge-monitoring">IS Compliant</span></td>
              </tr>
              <tr>
                <td className="mono-nums" style={{ fontWeight: 800, color: 'var(--color-primary)' }}>
                  LOG-2026-023
                </td>
                <td className="mono-nums">19 Sept, 18:00 IST</td>
                <td style={{ fontWeight: 600 }}>Tower C · Level 9 Soffit Formwork Striking</td>
                <td>Laser Deflection & Honeycomb Scan</td>
                <td>Er. Anita Desai</td>
                <td><span className="critical-badge badge-monitoring">Zero Defects</span></td>
              </tr>
              <tr>
                <td className="mono-nums" style={{ fontWeight: 800, color: 'var(--color-primary)' }}>
                  LOG-2026-022
                </td>
                <td className="mono-nums">18 Sept, 16:15 IST</td>
                <td style={{ fontWeight: 600 }}>Basement B2 · Exterior Waterproofing Tanking</td>
                <td>Air Lance Hydrostatic Joint Pressure Test</td>
                <td>Er. Rajesh Varma</td>
                <td><span className="critical-badge badge-monitoring">Passed (2.5 bar)</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
