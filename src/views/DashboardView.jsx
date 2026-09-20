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
  Layers
} from 'lucide-react';

export default function DashboardView({ onOpenIntelQuestion }) {
  return (
    <div className="view-container">
      {/* Hero Section */}
      <section className="dashboard-hero">
        <div className="hero-subtitle">Project Overview</div>
        <h1 className="hero-title">Good morning. Here's what needs your attention.</h1>
        <p className="hero-desc">
          Ahmedabad site active with 248 personnel. Superstructure milestone review scheduled for 16:00 IST.
        </p>
      </section>

      {/* 3 Most Important Project Issues */}
      <section style={{ marginBottom: '32px' }}>
        <div className="section-header-wrap">
          <div>
            <h2 className="section-title">Critical Attention Items</h2>
            <p className="section-caption">Prioritized operational & supply chain impediments</p>
          </div>
          <span className="mono-nums" style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
            3 Active Impediments
          </span>
        </div>

        <div className="critical-issues-grid">
          {CRITICAL_ISSUES.map((issue) => {
            const badgeClass =
              issue.priorityLevel === 'critical'
                ? 'badge-critical'
                : issue.priorityLevel === 'warning'
                ? 'badge-warning'
                : 'badge-monitoring';

            return (
              <div key={issue.id} className="critical-card">
                <div className="critical-card-header">
                  <div className="critical-number">{issue.id}</div>
                  <span className={`critical-badge ${badgeClass}`}>
                    {issue.priority}
                  </span>
                </div>

                <h3 className="critical-title">{issue.title}</h3>
                <div className="critical-location">{issue.location}</div>

                <div className="critical-impact-box">
                  <div className="critical-impact-row">
                    <span className="critical-impact-label">Impact Analysis</span>
                    <span className="critical-impact-val">{issue.impact}</span>
                  </div>
                  <div className="critical-impact-row">
                    <span className="critical-impact-label">Cost Exposure</span>
                    <span className="critical-impact-val mono-nums">{issue.costRisk}</span>
                  </div>
                </div>

                <div className="critical-recommendation">
                  <strong style={{ color: 'var(--color-primary)', display: 'block', marginBottom: '2px', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Recommended Action:
                  </strong>
                  {issue.recommendation}
                </div>

                <div className="critical-card-action">
                  <button
                    className="intel-inspect-btn"
                    onClick={() => onOpenIntelQuestion(issue.questionQuery)}
                  >
                    <span>View Project Intelligence Memo</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Key Engineering Telemetry & Metrics */}
      <section style={{ marginBottom: '36px' }}>
        <div className="section-header-wrap">
          <div>
            <h2 className="section-title">Site Telemetry & Resource Variance</h2>
            <p className="section-caption">Real-time batching, labor density, and expenditure</p>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
            {PROJECT_INFO.lastUpdate}
          </span>
        </div>

        <div className="metrics-row">
          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-label">Active Workforce</span>
              <HardHat size={16} color="#77746D" />
            </div>
            <div className="metric-val mono-nums">{PROJECT_INFO.workforceOnSite}</div>
            <div className="metric-sub positive">98% Deployment vs Planned</div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-label">Schedule Variance</span>
              <Clock size={16} color="#77746D" />
            </div>
            <div className="metric-val mono-nums" style={{ color: 'var(--color-status-critical)' }}>+4 Days</div>
            <div className="metric-sub critical">Isolated to Tower A Rebar cycle</div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-label">Committed Budget</span>
              <TrendingDown size={16} color="#77746D" />
            </div>
            <div className="metric-val mono-nums">₹41.2 Cr / ₹68.4 Cr</div>
            <div className="metric-sub positive">-1.4% Under Monthly Allowance</div>
          </div>

          <div className="metric-card">
            <div className="metric-header">
              <span className="metric-label">Site Weather / Pouring</span>
              <Truck size={16} color="#77746D" />
            </div>
            <div className="metric-val mono-nums">{PROJECT_INFO.weather.temp}</div>
            <div className="metric-sub positive">{PROJECT_INFO.weather.condition} · Ideal for RMC</div>
          </div>
        </div>
      </section>

      {/* Tower Progress Matrix */}
      <section style={{ marginBottom: '36px' }}>
        <div className="section-header-wrap">
          <div>
            <h2 className="section-title">Superstructure Elevation Matrix</h2>
            <p className="section-caption">Progress across 3 high-rise towers (18 Floors target)</p>
          </div>
        </div>

        <div className="towers-grid">
          {TOWER_STATUS.map((item) => (
            <div key={item.tower} className="tower-card">
              <div className="tower-card-top">
                <div>
                  <h3 className="tower-name">{item.tower}</h3>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    {item.currentFloor}
                  </div>
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
              <div className="tower-progress-bar-bg">
                <div
                  className={`tower-progress-bar-fill ${item.statusType === 'critical' ? 'accent' : ''}`}
                  style={{ width: `${item.completionRate}%` }}
                ></div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                <span>Completion</span>
                <span className="mono-nums" style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
                  {item.completionRate}% ({item.currentFloor.split(' ')[0]} / {item.targetFloor}F)
                </span>
              </div>

              <div className="tower-stats-grid">
                <div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.68rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    Workforce
                  </div>
                  <div className="mono-nums" style={{ fontWeight: 700, marginTop: '2px' }}>
                    {item.workforce} Masons & Techs
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.68rem', textTransform: 'uppercase', fontWeight: 700 }}>
                    Critical Path
                  </div>
                  <div style={{ fontWeight: 600, marginTop: '2px', color: 'var(--color-primary)' }}>
                    {item.criticalPath}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Log Strip */}
      <section>
        <div className="section-header-wrap">
          <div>
            <h2 className="section-title">Latest Certified Engineering Logs</h2>
            <p className="section-caption">Certified site supervisor sign-offs & cube test results</p>
          </div>
        </div>

        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Log ID</th>
                <th>Time / Date</th>
                <th>Milestone Inspected</th>
                <th>Testing Protocol</th>
                <th>Supervising Engineer</th>
                <th>Quality Compliance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mono-nums" style={{ fontWeight: 700 }}>LOG-2026-024</td>
                <td className="mono-nums">Today, 09:30 IST</td>
                <td>Tower B · Level 14 Columns Pour (48 m³)</td>
                <td>IS 456 Slump: 125mm (Pass)</td>
                <td>Er. Rajesh Varma</td>
                <td><span className="critical-badge badge-monitoring">IS Compliant</span></td>
              </tr>
              <tr>
                <td className="mono-nums" style={{ fontWeight: 700 }}>LOG-2026-023</td>
                <td className="mono-nums">19 Sept, 18:00 IST</td>
                <td>Tower C · Level 9 Soffit Striking</td>
                <td>Deflection & Honeycomb Laser Scan</td>
                <td>Er. Anita Desai</td>
                <td><span className="critical-badge badge-monitoring">IS Compliant</span></td>
              </tr>
              <tr>
                <td className="mono-nums" style={{ fontWeight: 700 }}>LOG-2026-022</td>
                <td className="mono-nums">18 Sept, 16:15 IST</td>
                <td>Basement B2 · Tanking Membrane</td>
                <td>Air Lance Pressure Test (2.5 bar)</td>
                <td>Er. Rajesh Varma</td>
                <td><span className="critical-badge badge-monitoring">Zero Leakage</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
