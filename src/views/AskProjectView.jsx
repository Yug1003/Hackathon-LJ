import React, { useState, useEffect } from 'react';
import {
  SUGGESTED_QUESTIONS,
  INTELLIGENCE_REPORTS
} from '../data/projectData';
import {
  Search,
  FileText,
  Printer,
  Copy,
  Check,
  Compass,
  ArrowRight,
  CheckCircle2
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
    <div className="w-full bg-gray-50 min-h-[calc(100vh-72px)] py-8">
      <div className="max-w-6xl mx-auto px-6 space-y-6">

        {/* Page Header */}
        <div className="pb-6 border-b border-gray-200">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 mb-2">
            <Compass size={13} strokeWidth={2.4} />
            <span>PROJECT INTELLIGENCE</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Ask about your project data.
          </h1>
          <p className="text-sm text-gray-500 mt-1 max-w-2xl font-normal leading-relaxed">
            Query schedules, material inventories, contractor milestones, and root cause engineering assessments.
          </p>
        </div>

        {/* Query Input Bar */}
        <form onSubmit={handleSearchSubmit} className="bg-white border border-gray-200 rounded-xl p-2.5 shadow-sm flex items-center gap-3 focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-transparent transition-all">
          <Search size={18} className="text-gray-400 ml-2" />
          <input
            type="text"
            className="flex-1 text-sm bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
            placeholder="Search or ask an engineering question (e.g. Why is Tower A delayed?)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-gray-900 text-white text-xs font-semibold hover:bg-gray-800 shadow-sm transition-colors cursor-pointer"
          >
            Query Data
          </button>
        </form>

        {/* Filter Pills */}
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-gray-400 mr-1">Filter:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Suggested Question Cards */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-3">
            Suggested Project Queries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredQuestions.map((q) => {
              const isSelected = activeReportKey === q.question;

              return (
                <div
                  key={q.id}
                  onClick={() => handleSelectQuestion(q.question)}
                  className={`bg-white rounded-xl border p-4 shadow-sm transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-gray-900 ring-1 ring-gray-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-1">
                      {q.category}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1.5">
                      {q.question}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {q.preview}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-700">
                    <span>Inspect Memo</span>
                    <ArrowRight size={13} className="text-gray-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Structured Engineering Report Card */}
        {currentReport && (
          <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Banner */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <FileText size={14} className="text-gray-400" />
                <span className="font-bold text-gray-800">{currentReport.reportNumber}</span>
                <span>|</span>
                <span>{currentReport.dateGenerated}</span>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200 self-start sm:self-auto">
                Impact Analysis Verified
              </span>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Question */}
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block mb-1">
                  Question
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {currentReport.question}
                </h2>
              </div>

              {/* Root Cause */}
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block mb-1.5">
                  Root Cause
                </span>
                <div className="bg-amber-50/70 border-l-4 border-amber-600 rounded-r-lg p-4 text-sm text-gray-900 leading-relaxed">
                  {currentReport.rootCause}
                </div>
              </div>

              {/* Impacted Activities */}
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block mb-2">
                  Impacted Activities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentReport.impactedActivities.map((act, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></span>
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule & Cost Impact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block">
                    Schedule Impact
                  </span>
                  <div className="text-2xl font-bold font-mono text-red-700 mt-1">
                    {currentReport.scheduleImpact}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {currentReport.scheduleDetails}
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block">
                    Estimated Cost Impact
                  </span>
                  <div className="text-2xl font-bold font-mono text-gray-900 mt-1">
                    {currentReport.estimatedCostImpact}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {currentReport.costBreakdown}
                  </p>
                </div>
              </div>

              {/* Recommended Action */}
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block mb-2">
                  Recommended Action
                </span>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 space-y-3">
                  <div className="text-sm font-bold text-gray-900">
                    {currentReport.recommendedAction}
                  </div>
                  {currentReport.actionSteps && currentReport.actionSteps.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-gray-200">
                      {currentReport.actionSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 leading-normal">
                          <span className="font-mono font-bold text-amber-700 text-[11px] bg-amber-50 border border-amber-200 px-1.5 rounded">
                            0{idx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Sources */}
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block mb-2">
                  Sources
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentReport.sources.map((src, idx) => (
                    <div key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700">
                      <span className="font-semibold text-gray-900">{src.name}</span>
                      <span className="text-gray-400">({src.type})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
              <span>Verified against Primavera Baseline & Daily Site Log ledger.</span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyReport}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy Memo'}</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors cursor-pointer shadow-sm"
                >
                  <Printer size={14} />
                  <span>Print Memo</span>
                </button>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
