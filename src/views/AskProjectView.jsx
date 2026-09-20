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

    // Check if matching predefined report
    const match = Object.keys(INTELLIGENCE_REPORTS).find((q) =>
      q.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (match) {
      setActiveReportKey(match);
    } else {
      // Dynamic fallback for custom query adhering to structured format
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

  // Get active report or fallback generator
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

  // Filter suggested questions
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
    <div className="view-container">
      <div className="ask-project-container">
        {/* Header - EXACT USER REQUIREMENTS */}
        <section className="intel-header-area">
          <div className="intel-kicker">Project Intelligence</div>
          <h1 className="intel-title">Ask about your project data.</h1>
          <p className="intel-subtitle">
            Query schedules, material inventories, contractor milestones, and root cause engineering assessments.
          </p>
        </section>

        {/* Query Input Box (Not a chat bubble!) */}
        <form onSubmit={handleSearchSubmit} className="intel-search-box">
          <Search size={18} color="#77746D" />
          <input
            type="text"
            className="intel-search-input"
            placeholder="Search or ask an engineering question (e.g. Why is Tower A delayed?)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="intel-submit-btn">
            <span>Query Data</span>
          </button>
        </form>

        {/* Filter Categories */}
        <div className="intel-filters-row">
          <span className="filter-label">Filter:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`intel-filter-chip ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Large Suggested Question Cards as Clean Rectangular Cards */}
        <section style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
            Suggested Project Queries
          </div>
          <div className="suggested-questions-grid">
            {filteredQuestions.map((q) => {
              const isSelected = activeReportKey === q.question;
              return (
                <div
                  key={q.id}
                  className={`suggested-question-card ${isSelected ? 'active' : ''}`}
                  onClick={() => handleSelectQuestion(q.question)}
                >
                  <div className="question-cat-tag">{q.category}</div>
                  <div className="question-title-text">{q.question}</div>
                  <div className="question-preview-text">{q.preview}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* THE STRUCTURED PROJECT REPORT - EXACT USER FORMAT */}
        {currentReport && (
          <section className="intelligence-report-card">
            {/* Report Banner */}
            <div className="report-banner">
              <div className="report-doc-id">
                <FileText size={15} color="#77746D" />
                <span>{currentReport.reportNumber}</span>
                <span style={{ color: 'var(--color-border)' }}>|</span>
                <span>{currentReport.dateGenerated}</span>
              </div>
              <div className="report-stamp">
                Impact Analysis Verified
              </div>
            </div>

            {/* Report Body */}
            <div className="report-body">
              {/* Question */}
              <div className="report-section">
                <div className="report-label">Question</div>
                <h2 className="report-question-heading">{currentReport.question}</h2>
              </div>

              {/* Root Cause */}
              <div className="report-section">
                <div className="report-label">Root Cause</div>
                <div className="report-root-cause-box">
                  {currentReport.rootCause}
                </div>
              </div>

              {/* Impacted Activities */}
              <div className="report-section">
                <div className="report-label">Impacted Activities</div>
                <ul className="activities-list">
                  {currentReport.impactedActivities.map((act, index) => (
                    <li key={index} className="activity-item">
                      <span className="activity-item-bullet"></span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2-Column Metrics: Schedule Impact & Estimated Cost Impact */}
              <div className="report-impact-grid">
                <div className="impact-tile">
                  <div className="report-label">Schedule Impact</div>
                  <div className="impact-tile-val critical-val">
                    {currentReport.scheduleImpact}
                  </div>
                  <div className="impact-tile-detail">
                    {currentReport.scheduleDetails}
                  </div>
                </div>

                <div className="impact-tile">
                  <div className="report-label">Estimated Cost Impact</div>
                  <div className="impact-tile-val mono-nums">
                    {currentReport.estimatedCostImpact}
                  </div>
                  <div className="impact-tile-detail">
                    {currentReport.costBreakdown}
                  </div>
                </div>
              </div>

              {/* Recommended Action */}
              <div className="report-section">
                <div className="report-label">Recommended Action</div>
                <div className="recommended-action-box">
                  <div className="action-main-text">
                    {currentReport.recommendedAction}
                  </div>
                  {currentReport.actionSteps && currentReport.actionSteps.length > 0 && (
                    <ul className="action-steps-list">
                      {currentReport.actionSteps.map((step, idx) => (
                        <li key={idx} className="action-step-item">
                          <span className="action-step-number">0{idx + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Sources */}
              <div className="report-section">
                <div className="report-label">Sources</div>
                <div className="sources-pills-wrap">
                  {currentReport.sources.map((src, idx) => (
                    <div key={idx} className="source-pill">
                      <span>{src.name}</span>
                      <span className="source-pill-type">({src.type})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Report Footer & Actions */}
            <div className="report-footer">
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
