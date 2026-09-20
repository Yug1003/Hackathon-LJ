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
    <div className="w-full bg-gray-50 min-h-[calc(100vh-72px)] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-6 md:space-y-8">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs md:text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200 mb-3">
              <FileCheck size={15} strokeWidth={2.2} />
              <span>Executive Governance</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Formal Engineering Reports & Dossiers
            </h1>
            <p className="text-base text-gray-500 mt-2 leading-relaxed">
              Standard certified reports for developers, structural auditors, and financial lenders.
            </p>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 shadow-sm transition-colors cursor-pointer self-start sm:self-auto"
          >
            <Printer size={16} />
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
                  className={`bg-white rounded-xl border p-5 shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'border-gray-900 ring-1 ring-gray-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1.5">
                      {report.category}
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-gray-900 leading-snug mb-1">
                      {report.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500">
                      {report.subtitle}
                    </p>
                  </div>
                  {isSelected && (
                    <ChevronRight size={20} className="text-gray-900 ml-2 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dossier Document */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6 md:space-y-8">
            {/* Top Metadata Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                <FileText size={16} className="text-gray-400" />
                <span className="font-bold text-gray-800">DOSSIER: SUNRISE-ENG-{selectedReport.toUpperCase()}-2026</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-green-50 text-green-700 border border-green-200 self-start sm:self-auto">
                <BadgeCheck size={15} />
                <span>Ahmedabad Regional Authority Certified</span>
              </span>
            </div>

            {/* Document Title */}
            <div>
              <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block mb-1">
                Certified Sign-off · Project Dossier
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                {selectedReport === 'weekly' && 'Weekly Superstructure Execution & Handover Assessment'}
                {selectedReport === 'qa' && 'Structural Concrete Cube Tests & Rebar Metallurgy Compliance'}
                {selectedReport === 'cost' && 'Phase 2 Capital Expenditure & BOQ Variance Reconciliation'}
              </h2>
              <p className="text-sm text-gray-500 mt-1.5">
                Issued by Office of the Project Director · Sunrise Residency, Ahmedabad
              </p>
            </div>

            {/* Section 1: Executive Engineering Summary */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 block mb-2">
                Executive Engineering Summary
              </span>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-base leading-relaxed text-gray-800">
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
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 block mb-3">
                Key Governance Indicators
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block">
                    Overall Project Health
                  </span>
                  <div className="text-2xl md:text-3xl font-bold font-mono text-green-700 mt-1">
                    82%
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3 mb-2 overflow-hidden">
                    <div className="bg-green-600 h-full rounded-full transition-all duration-300" style={{ width: '82%' }}></div>
                  </div>
                  <p className="text-sm text-gray-500">
                    Weighted average across Schedule, Cost, Safety & Quality
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6">
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block">
                    Workforce Mobilization
                  </span>
                  <div className="text-2xl md:text-3xl font-bold font-mono text-gray-900 mt-1 flex items-center justify-between">
                    <span>248 <span className="text-sm font-normal text-gray-500">Personnel</span></span>
                    <Users size={22} className="text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Full capacity across bar bending, formwork, and MEP trades
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Authorized Signatories */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 block mb-3">
                Authorized Signatories
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Er. Rajesh Varma</h4>
                    <p className="text-sm text-gray-500">Principal Site Engineer (Civil)</p>
                    <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono text-green-700 font-semibold mt-2">
                      <ShieldCheck size={15} />
                      <span>Digitally Signed · 20-09-2026</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-sm">
                    RV
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Dr. V. K. Sanghavi</h4>
                    <p className="text-sm text-gray-500">Chief Structural Consultant</p>
                    <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono text-green-700 font-semibold mt-2">
                      <ShieldCheck size={15} />
                      <span>Digitally Signed · 20-09-2026</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-200 text-gray-700 font-bold flex items-center justify-center text-sm">
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
