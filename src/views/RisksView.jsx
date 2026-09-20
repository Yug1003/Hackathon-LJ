import React from 'react';
import { PROJECT_RISKS } from '../data/projectData';
import { AlertTriangle, ShieldCheck, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function RisksView() {
  return (
    <div className="view-container">
      <div className="section-header-wrap" style={{ marginBottom: '24px' }}>
        <div>
          <div className="hero-subtitle">Risk Mitigation Registry</div>
          <h1 className="section-title" style={{ fontSize: '1.75rem' }}>Project Risk Assessment & Contingency</h1>
          <p className="section-caption">
            Comprehensive geotechnical, supply chain, structural, and safety vulnerability controls.
          </p>
        </div>
      </div>

      {/* 2x2 Risk Metrics summary */}
      <div className="metrics-row" style={{ marginBottom: '28px' }}>
        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Critical Exposure</span>
            <AlertTriangle size={16} color="#B65345" />
          </div>
          <div className="metric-val mono-nums" style={{ color: 'var(--color-status-critical)' }}>1 Active</div>
          <div className="metric-sub critical">Steel logistics bottleneck</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Controlled Vulnerabilities</span>
            <ShieldCheck size={16} color="#557A62" />
          </div>
          <div className="metric-val mono-nums" style={{ color: 'var(--color-status-success)' }}>3 Mitigated</div>
          <div className="metric-sub positive">Dual pumps & safety lockouts active</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">Contingency Reserve</span>
            <span className="mono-nums" style={{ fontSize: '0.75rem', fontWeight: 700 }}>₹2.4 Cr</span>
          </div>
          <div className="metric-val mono-nums">88% Intact</div>
          <div className="metric-sub positive">₹1.8L current claim exposure</div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <span className="metric-label">HSE Safe Hours</span>
            <ShieldAlert size={16} color="#6F7658" />
          </div>
          <div className="metric-val mono-nums">342,000</div>
          <div className="metric-sub positive">Zero Lost Time Injuries (LTI)</div>
        </div>
      </div>

      {/* Risks Table / Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {PROJECT_RISKS.map((risk) => (
          <div
            key={risk.id}
            className="critical-card"
            style={{ padding: '20px 24px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="mono-nums" style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  {risk.id}
                </span>
                <span className="question-cat-tag" style={{ margin: 0 }}>
                  {risk.category}
                </span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                  {risk.title}
                </h3>
              </div>
              <span className={`critical-badge ${risk.level === 'High' ? 'badge-critical' : 'badge-warning'}`}>
                {risk.level} Risk
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', background: 'var(--color-bg)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', margin: '12px 0' }}>
              <div>
                <span className="critical-impact-label" style={{ display: 'block', fontSize: '0.68rem' }}>Probability</span>
                <span className="critical-impact-val mono-nums" style={{ fontSize: '0.84rem' }}>{risk.probability}</span>
              </div>
              <div>
                <span className="critical-impact-label" style={{ display: 'block', fontSize: '0.68rem' }}>Schedule & Cost Impact</span>
                <span className="critical-impact-val mono-nums" style={{ fontSize: '0.84rem' }}>{risk.impact}</span>
              </div>
              <div>
                <span className="critical-impact-label" style={{ display: 'block', fontSize: '0.68rem' }}>Assigned Risk Owner</span>
                <span className="critical-impact-val" style={{ fontSize: '0.84rem' }}>{risk.owner}</span>
              </div>
              <div>
                <span className="critical-impact-label" style={{ display: 'block', fontSize: '0.68rem' }}>Mitigation Status</span>
                <span className="critical-impact-val" style={{ fontSize: '0.84rem', color: 'var(--color-olive)' }}>{risk.status}</span>
              </div>
            </div>

            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--color-primary)' }}>Engineered Protocol: </strong>
              {risk.mitigation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
