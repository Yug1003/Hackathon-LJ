import React, { useState } from 'react';
import { PROJECT_INFO } from '../data/projectData';
import {
  Printer,
  FileText,
  BadgeCheck,
  Users,
  ShieldCheck,
  ChevronRight,
  FileCheck
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
      title: 'Superstructure Progress Report #W-38',
      subtitle: 'Week ending 20 Sept 2026'
    },
    {
      id: 'qa',
      category: 'QUALITY ASSURANCE',
      title: 'IS 456 Structural Concrete & Rebar Audit',
      subtitle: 'Certified Cube Strength Dossier'
    },
    {
      id: 'cost',
      category: 'FINANCIAL VARIANCE',
      title: 'Phase 2 BOQ Escalation & Contingency Audit',
      subtitle: 'SAP ERP Reconciliation'
    }
  ];

  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-72px)] py-8">
      <div className="max-w-7xl mx-auto px-6 space-y-6">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 mb-2">
              <FileCheck size={13} strokeWidth={2.2} />
              <span>Executive Governance</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Formal Engineering Reports & Dossiers
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Standard certified reports for developers, structural auditors, and financial lenders.
            </p>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 shadow-sm transition-colors cursor-pointer self-start sm:self-auto"
          >
            <Printer size={15} />
            <span>Print Dossier</span>
          </button>
        </div>

        {/* Two-Column Grid: Reports List on Left, Dossier on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Dossier Selection */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block mb-1">
              Available Dossiers
            </span>

            {reports.map((report) => {
              const isSelected = selectedReport === report.id;

              return (
                <div
                  key={report.id}
                  onClick={() => setSelectedReport(report.id)}
                  className={`bg-white rounded-xl border p-4 shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-gray-900 ring-1 ring-gray-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-1">
                      {report.category}
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1">
                      {report.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {report.subtitle}
                    </p>
                  </div>
                  {isSelected && (
                    <ChevronRight size={18} className="text-gray-900 ml-2 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dossier Document */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Top Metadata Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <FileText size={14} className="text-gray-400" />
                <span className="font-bold text-gray-800">DOSSIER: SUNRISE-ENG-{selectedReport.toUpperCase()}-2026</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200 self-start sm:self-auto">
                <BadgeCheck size={13} />
                <span>Ahmedabad Regional Authority Certified</span>
              </span>
            </div>

            {/* Document Title */}
            <div>
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block mb-1">
                Certified Sign-off · Project Dossier
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {selectedReport === 'weekly' && 'Weekly Superstructure Execution & Handover Assessment'}
                {selectedReport === 'qa' && 'Structural Concrete Cube Tests & Rebar Metallurgy Compliance'}
                {selectedReport === 'cost' && 'Phase 2 Capital Expenditure & BOQ Variance Reconciliation'}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Issued by Office of the Project Director · Sunrise Residency, Ahmedabad
              </p>
            </div>

            {/* Section 1: Executive Engineering Summary */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2">
                Executive Engineering Summary
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-sm text-gray-800 leading-relaxed">
                {selectedReport === 'weekly' &&
                  'Superstructure progress across Towers A, B, and C stands at 68.3% cumulative execution against a baseline of 70.1%. A net variance of 4 days on Tower A column concreting is under active resolution via alternate rebar dispatch. Tower B and Tower C maintain scheduled milestone pace.'}
                {selectedReport === 'qa' &&
                  '28-day compressive strength tests for 18 sets of M35 grade concrete cubes across Tower B columns averaged 41.2 N/mm² (exceeding specified target characteristic strength of 35 N/mm²). Rebar chemical composition test verified sulfur and phosphorus within IS 1786 tolerances.'}
                {selectedReport === 'cost' &&
                  'Cumulative civil and MEP expenditures stand at ₹41.2 Cr against committed budget of ₹41.8 Cr (-1.4% favorable variance). Contingency reserve balance of ₹2.4 Cr remains intact with zero unbudgeted structural change-orders logged.'}
              </div>
            </div>

            {/* Section 2: Key Governance Indicators */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2">
                Key Governance Indicators
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block">
                    Overall Project Health
                  </span>
                  <div className="text-2xl font-bold font-mono text-green-700 mt-1">
                    82%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 mb-2 overflow-hidden">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Weighted average across Schedule, Cost, Safety & Quality
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block">
                    Workforce Mobilization
                  </span>
                  <div className="text-2xl font-bold font-mono text-gray-900 mt-1 flex items-center justify-between">
                    <span>248 <span className="text-sm font-normal text-gray-500">Personnel</span></span>
                    <Users size={20} className="text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Full capacity across bar bending, formwork, and MEP trades
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Authorized Signatories */}
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2">
                Authorized Signatories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Er. Rajesh Varma</h4>
                    <p className="text-xs text-gray-500">Principal Site Engineer (Civil)</p>
                    <div className="inline-flex items-center gap-1 text-[11px] font-mono text-green-700 font-semibold mt-2">
                      <ShieldCheck size={12} />
                      <span>Digitally Signed · 20-09-2026</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-xs">
                    RV
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Dr. V. K. Sanghavi</h4>
                    <p className="text-xs text-gray-500">Chief Structural Consultant</p>
                    <div className="inline-flex items-center gap-1 text-[11px] font-mono text-green-700 font-semibold mt-2">
                      <ShieldCheck size={12} />
                      <span>Digitally Signed · 20-09-2026</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-xs">
                    VS
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
