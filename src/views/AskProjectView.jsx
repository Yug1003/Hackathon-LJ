import React, { useState, useEffect } from 'react';
import {
  SUGGESTED_QUESTIONS,
  INTELLIGENCE_REPORTS
} from '../data/projectData';
import {
  Search,
  FileText,
  Printer,
  Share2,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Layers,
  Copy,
  Check
} from 'lucide-react';

export default function AskProjectView({ selectedQuestionQuery }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeReportKey, setActiveReportKey] = useState(
    selectedQuestionQuery || 'Why is Tower A delayed?'
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedQuestionQuery) {
      setActiveReportKey(selectedQuestionQuery);
      setSearchQuery('');
    }
  }, [selectedQuestionQuery]);

  const filters = [
    'All',
    'Schedule Impact',
    'Materials & Supply Chain',
    'Structural & Pouring',
    'Procurement & Vendors',
    'Cost & Commercials'
  ];

  const handleSelectQuestion = (questionText) => {
    setActiveReportKey(questionText);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const match = Object.keys(INTELLIGENCE_REPORTS).find((q) =>
      q.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (match) {
      setActiveReportKey(match);
    } else {
      setActiveReportKey(searchQuery);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyReport = () => {
    const report = currentReport;
    if (!report) return;
    const text = `CONSTRUCTIQ PROJECT INTELLIGENCE MEMO:
QUESTION: ${report.question}
ROOT CAUSE: ${report.rootCause}
SCHEDULE IMPACT: ${report.scheduleImpact}
ESTIMATED COST IMPACT: ${report.estimatedCostImpact}
RECOMMENDED ACTION: ${report.recommendedAction}
SOURCES: ${report.sources ? report.sources.map(s => s.name).join(', ') : 'Sunrise Residency Master Logs'}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentReport =
    INTELLIGENCE_REPORTS[activeReportKey] || {
      question: activeReportKey,
      category: "Ad-Hoc Engineering Audit",
      dateGenerated: "20 Sept 2026 · Live Telemetry",
      reportNumber: "PI-MEMO-DYNAMIC-01",
      rootCause: `Correlated telemetry indicates operational parameter variance for "${activeReportKey}". Cross-referencing site logs with current Bill of Quantities.`,
      impactedActivities: [
        "Primary structural execution cycle",
        "Subcontractor shift allocation",
        "Quality assurance staging"
      ],
      scheduleImpact: "+1 day buffer evaluation",
      scheduleDetails: "Minimal baseline deviation if mitigated in today's site coordination meeting.",
      estimatedCostImpact: "₹65,000",
      costBreakdown: "Contingency reserve allocation under civil variance.",
      recommendedAction: "Review daily contractor muster and verify material dispatch tickets with stores supervisor.",
      actionSteps: [
        "Verify material receipt inspection checklist",
        "Confirm consultant RFI status",
        "Document notes in Site Update #25"
      ],
      sources: [
        { name: "Site Update #24 (20 Sept 2026)", type: "Daily Log" },
        { name: "Sunrise Residency Master Schedule v3.2", type: "Primavera P6" }
      ]
    };

  const filteredQuestions = SUGGESTED_QUESTIONS.filter((item) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Schedule Impact' && item.category.includes('Schedule')) return true;
    if (selectedFilter === 'Materials & Supply Chain' && item.category.includes('Materials')) return true;
    if (selectedFilter === 'Structural & Pouring' && item.category.includes('Structural')) return true;
    if (selectedFilter === 'Procurement & Vendors' && item.category.includes('Procurement')) return true;
    if (selectedFilter === 'Cost & Commercials' && item.category.includes('Cost')) return true;
    return false;
  });

  return (
    <div className="view-container spacious-layout">
      <div className="ask-project-container-spacious">
        {/* Header Area */}
        <section className="intel-header-area-spacious">
          <div className="hero-kicker-wrap">
            <span className="hero-kicker-tag">PROJECT INTELLIGENCE</span>
            <span className="hero-kicker-sep">/</span>
            <span className="hero-kicker-meta">Engineering Decision Engine</span>
          </div>
          <h1 className="hero-title-large" style={{ marginBottom: '14px' }}>
            Ask about your project data.
          </h1>
          <p className="hero-lead-text" style={{ maxWidth: '820px' }}>
            Query live field logs, supply chain dependencies, contractor commitments, and IS code compliance to generate structured engineering memos.
          </p>
        </section>

        {/* Large Architectural Query Input Bar */}
        <form onSubmit={handleSearchSubmit} className="intel-search-box-spacious">
          <Search size={20} color="#77746D" />
          <input
            type="text"
            className="intel-search-input-spacious"
            placeholder="Ask a technical or schedule question (e.g. Why is Tower A delayed?)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="intel-submit-btn-spacious">
            <span>Query Intelligence</span>
          </button>
        </form>

        {/* Filter Categories with generous spacing */}
        <div className="intel-filters-row-spacious">
          <span className="filter-label">Filter Domains:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`intel-filter-chip-spacious ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Large Suggested Question Cards */}
        <section style={{ marginBottom: '64px' }}>
          <div className="section-kicker" style={{ marginBottom: '16px' }}>
            Standard Project Enquiries
          </div>
          <div className="suggested-questions-grid-spacious">
            {filteredQuestions.map((q) => {
              const isSelected = activeReportKey === q.question;
              return (
                <div
                  key={q.id}
                  className={`suggested-question-card-spacious ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectQuestion(q.question)}
                >
                  <div className="question-cat-tag">{q.category}</div>
                  <div className="question-title-text-spacious">{q.question}</div>
                  <div className="question-preview-text">{q.preview}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* THE STRUCTURED PROJECT REPORT - SPACIOUS & HIGH CONTRAST */}
        {currentReport && (
          <section className="intelligence-report-card-spacious">
            {/* Report Banner */}
            <div className="report-banner-spacious">
              <div className="report-doc-id">
                <FileText size={16} color="#77746D" />
                <span className="mono-nums">{currentReport.reportNumber}</span>
                <span style={{ color: 'var(--color-border)' }}>|</span>
                <span>{currentReport.dateGenerated}</span>
              </div>
              <div className="report-stamp">
                Verified Engineering Memo
              </div>
            </div>

            {/* Report Body */}
            <div className="report-body-spacious">
              {/* Question */}
              <div className="report-section-spacious">
                <div className="report-label">Target Question</div>
                <h2 className="report-question-heading-spacious">{currentReport.question}</h2>
              </div>

              {/* Root Cause */}
              <div className="report-section-spacious">
                <div className="report-label">Root Cause Analysis</div>
                <div className="report-root-cause-box-spacious">
                  {currentReport.rootCause}
                </div>
              </div>

              {/* Impacted Activities */}
              <div className="report-section-spacious">
                <div className="report-label">Impacted Downstream Activities</div>
                <ul className="activities-list-spacious">
                  {currentReport.impactedActivities.map((act, index) => (
                    <li key={index} className="activity-item-spacious">
                      <span className="activity-item-bullet"></span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2-Column Metrics: Schedule Impact & Estimated Cost Impact */}
              <div className="report-impact-grid-spacious">
                <div className="impact-tile-spacious">
                  <div className="report-label">Schedule Impact</div>
                  <div className="impact-tile-val-spacious critical-val">
                    {currentReport.scheduleImpact}
                  </div>
                  <div className="impact-tile-detail-spacious">
                    {currentReport.scheduleDetails}
                  </div>
                </div>

                <div className="impact-tile-spacious">
                  <div className="report-label">Estimated Cost Impact</div>
                  <div className="impact-tile-val-spacious mono-nums">
                    {currentReport.estimatedCostImpact}
                  </div>
                  <div className="impact-tile-detail-spacious">
                    {currentReport.costBreakdown}
                  </div>
                </div>
              </div>

              {/* Recommended Action */}
              <div className="report-section-spacious">
                <div className="report-label">Recommended Action & Protocol</div>
                <div className="recommended-action-box-spacious">
                  <div className="action-main-text-spacious">
                    {currentReport.recommendedAction}
                  </div>
                  {currentReport.actionSteps && currentReport.actionSteps.length > 0 && (
                    <ul className="action-steps-list-spacious">
                      {currentReport.actionSteps.map((step, idx) => (
                        <li key={idx} className="action-step-item-spacious">
                          <span className="action-step-number">0{idx + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Sources */}
              <div className="report-section-spacious" style={{ marginBottom: 0 }}>
                <div className="report-label">Traceable Information Sources</div>
                <div className="sources-pills-wrap-spacious">
                  {currentReport.sources.map((src, idx) => (
                    <div key={idx} className="source-pill-spacious">
                      <span>{src.name}</span>
                      <span className="source-pill-type">({src.type})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Report Footer & Actions */}
            <div className="report-footer-spacious">
              <div className="report-footer-left">
                Verified against Primavera Baseline & Daily Site Log ledger.
              </div>
              <div className="report-footer-actions">
                <button
                  className="header-action-btn"
                  onClick={handleCopyReport}
                  title="Copy Report to Clipboard"
                >
                  {copied ? <Check size={14} color="#557A62" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy Memo'}</span>
                </button>
                <button
                  className="header-action-btn primary"
                  onClick={handlePrint}
                  title="Print Engineering Intelligence Dossier"
                >
                  <Printer size={14} />
                  <span>Print Engineering Memo</span>
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
