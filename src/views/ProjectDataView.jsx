import React, { useState } from 'react';
import { PROJECT_DATA_SPECS, PROJECT_INFO } from '../data/projectData';
import {
  Building2,
  FileSpreadsheet,
  Users2,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export default function ProjectDataView() {
  const [activeTab, setActiveTab] = useState('specs');

  // Split specs into two distinct architectural categories
  const engineeringSpecs = PROJECT_DATA_SPECS.structuralSpecs.slice(0, 4);
  const materialSpecs = PROJECT_DATA_SPECS.structuralSpecs.slice(4);

  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-72px)] py-8 md:py-12">
      {/* Centered Main Content Column taking up ~80% on desktop */}
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
        
        {/* Page Header & Visual Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-3">
              <Building2 size={18} strokeWidth={2.2} />
              <span>Project Knowledge Base</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Project Master Data & Specifications
            </h1>
            <p className="text-base md:text-lg text-gray-600 mt-2.5 max-w-3xl font-normal leading-relaxed">
              Structural design parameters, Bill of Quantities (BOQ) ledger, and certified contractor agreements for {PROJECT_INFO.name}.
            </p>
          </div>

          {/* Segmented Tab Control */}
          <div className="inline-flex p-2 bg-gray-200/70 rounded-xl border border-gray-200 shadow-inner self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Layers size={18} strokeWidth={activeTab === 'specs' ? 2.2 : 1.8} />
              <span>Structural Specs</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('boq')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'boq'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <FileSpreadsheet size={18} strokeWidth={activeTab === 'boq' ? 2.2 : 1.8} />
              <span>BOQ & Cost Ledger</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('contractors')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'contractors'
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Users2 size={18} strokeWidth={activeTab === 'contractors' ? 2.2 : 1.8} />
              <span>Contractor Roster</span>
            </button>
          </div>
        </div>

        {/* TAB 1: STRUCTURAL SPECS (Grouped into card-style containers & card grids) */}
        {activeTab === 'specs' && (
          <div className="space-y-8 md:space-y-10">
            {/* Group 1: Structural Engineering Parameters */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
                <div>
                  <span className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-500 block mb-0.5">Foundations & Framing</span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Structural Engineering Parameters
                  </h2>
                  <p className="text-base text-gray-500 mt-1">
                    Foundational loads, framed system geometry, and built-up area registry.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center px-3.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold">
                  IS 456 Compliant
                </span>
              </div>

              {/* Data Fields Responsive Card Grid with Hover Effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {engineeringSpecs.map((spec, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-xl border border-gray-200 p-6 md:p-7 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300 cursor-default"
                  >
                    <div className="text-sm font-medium uppercase tracking-wide text-gray-500">
                      {spec.label}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 leading-snug">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group 2: Material Standards & Seismic Codes */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
                <div>
                  <span className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-500 block mb-0.5">Material Science & Geotech</span>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    Material Standards & Seismic Codes
                  </h2>
                  <p className="text-base text-gray-500 mt-1">
                    Design mix grades, metallurgy certification, and regional earthquake resistance.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center px-3.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold">
                  Zone III Certified
                </span>
              </div>

              {/* Data Fields Responsive Card Grid with Hover Effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {materialSpecs.map((spec, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-xl border border-gray-200 p-6 md:p-7 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300 cursor-default"
                  >
                    <div className="text-sm font-medium uppercase tracking-wide text-gray-500">
                      {spec.label}
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 leading-snug">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BOQ & COST LEDGER */}
        {activeTab === 'boq' && (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-6 md:p-8 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-500 block mb-0.5">Financial Reconciliation</span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Bill of Quantities (BOQ) & Financial Variance
                </h2>
                <p className="text-base text-gray-500 mt-1">
                  Package allocations, committed subcontracts, and quantity surveyor reconciliations.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-200 self-start sm:self-auto">
                <CheckCircle2 size={18} />
                <span>Q2 Chartered Audit Approved</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-sm font-bold uppercase tracking-wider text-gray-500">
                    <th className="py-4 px-6">
                      Package Description
                    </th>
                    <th className="py-4 px-6 text-right">
                      Allocated Budget
                    </th>
                    <th className="py-4 px-6 text-right">
                      Committed / Billed
                    </th>
                    <th className="py-4 px-6 text-right">
                      Balance Available
                    </th>
                    <th className="py-4 px-6 text-right">
                      Cost Variance
                    </th>
                    <th className="py-4 px-6 text-center">
                      Audit Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-base">
                  {PROJECT_DATA_SPECS.boqSummary.map((item, idx) => {
                    const isFavorable = item.variance.startsWith('-');
                    return (
                      <tr
                        key={idx}
                        className="hover:bg-gray-50 transition-colors duration-150 cursor-default"
                      >
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          {item.item}
                        </td>
                        <td className="py-4 px-6 font-mono text-right text-gray-900">
                          {item.budget}
                        </td>
                        <td className="py-4 px-6 font-mono text-right text-gray-900">
                          {item.committed}
                        </td>
                        <td className="py-4 px-6 font-mono text-right text-gray-500">
                          {item.balance}
                        </td>
                        <td className="py-4 px-6 font-mono text-right font-bold">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                              isFavorable
                                ? 'text-green-700 bg-green-50 border border-green-200'
                                : item.variance === '0.0%'
                                ? 'text-gray-600 bg-gray-100 border border-gray-200'
                                : 'text-amber-700 bg-amber-50 border border-amber-200'
                            }`}
                          >
                            {item.variance}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-3.5 py-1 rounded-full">
                            Verified
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: CONTRACTOR ROSTER */}
        {activeTab === 'contractors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECT_DATA_SPECS.contractors.map((c, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {c.name}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-sm font-semibold">
                      ★ {c.rating}
                    </span>
                  </div>

                  <div className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-5">
                    {c.scope}
                  </div>

                  <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 space-y-3 mb-5">
                    <div className="flex justify-between items-center text-base">
                      <span className="text-gray-500 font-medium">Deployed Workforce</span>
                      <span className="font-mono font-bold text-gray-900 text-lg">{c.workers} Workers</span>
                    </div>
                    <div className="flex justify-between items-center text-base">
                      <span className="text-gray-500 font-medium">Safety Compliance</span>
                      <span className="font-semibold text-green-700">99.4% (Zero Violations)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-base text-gray-600">
                  <span className="font-mono font-medium">AGR-2025-GUJ-0{i + 1}</span>
                  <span className="text-green-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={16} />
                    <span>Active In-Force</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
