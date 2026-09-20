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
    <div className="w-full bg-[#F7F6F2] min-h-[calc(100vh-72px)] py-8 md:py-12">
      {/* Centered Main Content Column */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header & Visual Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10 pb-6 border-b border-[#E5E3DD]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#FAF4ED] border border-[#E8BFAB] text-[#C96B3B] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Building2 size={13} strokeWidth={2.4} />
              <span>Project Knowledge Base</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202020] tracking-tight">
              Project Master Data & Specifications
            </h1>
            <p className="text-sm sm:text-base text-[#77746D] mt-1.5 max-w-2xl font-normal leading-relaxed">
              Structural design parameters, Bill of Quantities (BOQ) ledger, and certified contractor agreements for {PROJECT_INFO.name}.
            </p>
          </div>

          {/* Segmented Tab Control */}
          <div className="inline-flex p-1.5 bg-[#EBE8E1] rounded-xl border border-[#DCD8CF] shadow-inner self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveTab('specs')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-white text-[#202020] shadow-sm border border-[#E5E3DD]'
                  : 'text-[#77746D] hover:text-[#202020] hover:bg-white/60 border border-transparent'
              }`}
            >
              <Layers size={15} strokeWidth={activeTab === 'specs' ? 2.2 : 1.8} className={activeTab === 'specs' ? 'text-[#C96B3B]' : ''} />
              <span>Structural Specs</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('boq')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'boq'
                  ? 'bg-white text-[#202020] shadow-sm border border-[#E5E3DD]'
                  : 'text-[#77746D] hover:text-[#202020] hover:bg-white/60 border border-transparent'
              }`}
            >
              <FileSpreadsheet size={15} strokeWidth={activeTab === 'boq' ? 2.2 : 1.8} className={activeTab === 'boq' ? 'text-[#C96B3B]' : ''} />
              <span>BOQ & Cost Ledger</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('contractors')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'contractors'
                  ? 'bg-white text-[#202020] shadow-sm border border-[#E5E3DD]'
                  : 'text-[#77746D] hover:text-[#202020] hover:bg-white/60 border border-transparent'
              }`}
            >
              <Users2 size={15} strokeWidth={activeTab === 'contractors' ? 2.2 : 1.8} className={activeTab === 'contractors' ? 'text-[#C96B3B]' : ''} />
              <span>Contractor Roster</span>
            </button>
          </div>
        </div>

        {/* TAB 1: STRUCTURAL SPECS (Grouped into card-style containers & 3-col card grid) */}
        {activeTab === 'specs' && (
          <div className="space-y-10">
            {/* Group 1: Structural Engineering Parameters */}
            <div className="bg-white rounded-xl border border-[#E5E3DD] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E3DD]">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#202020] tracking-tight">
                    Structural Engineering Parameters
                  </h2>
                  <p className="text-xs sm:text-sm text-[#77746D] mt-0.5">
                    Foundational loads, framed system geometry, and built-up area registry.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md bg-[#EDF3EF] border border-[#CAD1BE] text-[#557A62] text-xs font-semibold">
                  IS 456 Compliant
                </span>
              </div>

              {/* Data Fields Responsive Card Grid with Hover Effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {engineeringSpecs.map((spec, i) => (
                  <div
                    key={i}
                    className="group bg-[#FAFAF8] rounded-xl border border-[#E5E3DD] p-4 sm:p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-[#C96B3B]/60 hover:bg-white cursor-default"
                  >
                    <div className="text-[11px] uppercase tracking-wider font-bold text-[#77746D] group-hover:text-[#C96B3B] transition-colors duration-200">
                      {spec.label}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#202020] mt-1.5 leading-snug">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group 2: Material Standards & Seismic Codes */}
            <div className="bg-white rounded-xl border border-[#E5E3DD] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E3DD]">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#202020] tracking-tight">
                    Material Standards & Seismic Codes
                  </h2>
                  <p className="text-xs sm:text-sm text-[#77746D] mt-0.5">
                    Design mix grades, metallurgy certification, and regional earthquake resistance.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-md bg-[#F2F4ED] border border-[#CAD1BE] text-[#6F7658] text-xs font-semibold">
                  Zone III Certified
                </span>
              </div>

              {/* Data Fields Responsive Card Grid with Hover Effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {materialSpecs.map((spec, i) => (
                  <div
                    key={i}
                    className="group bg-[#FAFAF8] rounded-xl border border-[#E5E3DD] p-4 sm:p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-[#C96B3B]/60 hover:bg-white cursor-default"
                  >
                    <div className="text-[11px] uppercase tracking-wider font-bold text-[#77746D] group-hover:text-[#C96B3B] transition-colors duration-200">
                      {spec.label}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#202020] mt-1.5 leading-snug">
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
          <div className="bg-white rounded-xl border border-[#E5E3DD] overflow-hidden shadow-sm">
            <div className="p-6 sm:p-7 border-b border-[#E5E3DD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#202020] tracking-tight">
                  Bill of Quantities (BOQ) & Financial Variance
                </h2>
                <p className="text-xs sm:text-sm text-[#77746D] mt-0.5">
                  Package allocations, committed subcontracts, and quantity surveyor reconciliations.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#557A62] bg-[#EDF3EF] px-3 py-1.5 rounded-lg border border-[#CAD1BE] self-start sm:self-auto">
                <CheckCircle2 size={14} />
                <span>Q2 Chartered Audit Approved</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#E5E3DD]">
                    <th className="py-3.5 px-6 text-xs font-bold text-[#77746D] uppercase tracking-wider">
                      Package Description
                    </th>
                    <th className="py-3.5 px-6 text-xs font-bold text-[#77746D] uppercase tracking-wider text-right">
                      Allocated Budget
                    </th>
                    <th className="py-3.5 px-6 text-xs font-bold text-[#77746D] uppercase tracking-wider text-right">
                      Committed / Billed
                    </th>
                    <th className="py-3.5 px-6 text-xs font-bold text-[#77746D] uppercase tracking-wider text-right">
                      Balance Available
                    </th>
                    <th className="py-3.5 px-6 text-xs font-bold text-[#77746D] uppercase tracking-wider text-right">
                      Cost Variance
                    </th>
                    <th className="py-3.5 px-6 text-xs font-bold text-[#77746D] uppercase tracking-wider text-center">
                      Audit Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E3DD]">
                  {PROJECT_DATA_SPECS.boqSummary.map((item, idx) => {
                    const isFavorable = item.variance.startsWith('-');
                    return (
                      <tr
                        key={idx}
                        className="hover:bg-[#F8F7F3] transition-colors duration-150 cursor-default"
                      >
                        <td className="py-4 px-6 text-sm font-bold text-[#202020]">
                          {item.item}
                        </td>
                        <td className="py-4 px-6 text-sm font-mono text-right text-[#202020]">
                          {item.budget}
                        </td>
                        <td className="py-4 px-6 text-sm font-mono text-right text-[#202020]">
                          {item.committed}
                        </td>
                        <td className="py-4 px-6 text-sm font-mono text-right text-[#77746D]">
                          {item.balance}
                        </td>
                        <td className="py-4 px-6 text-sm font-mono text-right font-bold">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-xs ${
                              isFavorable
                                ? 'text-[#557A62] bg-[#EDF3EF]'
                                : item.variance === '0.0%'
                                ? 'text-[#77746D] bg-[#EBE8E1]'
                                : 'text-[#C18A3A] bg-[#FBF4E8]'
                            }`}
                          >
                            {item.variance}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#6F7658] bg-[#F2F4ED] border border-[#CAD1BE] px-2.5 py-0.5 rounded-full">
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
                className="group bg-white rounded-xl border border-[#E5E3DD] p-6 sm:p-7 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-[#C96B3B]/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-bold text-[#202020] group-hover:text-[#C96B3B] transition-colors duration-200">
                      {c.name}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#FAF4ED] text-[#C96B3B] border border-[#E8BFAB] text-xs font-bold">
                      ★ {c.rating}
                    </span>
                  </div>

                  <div className="text-xs font-semibold uppercase tracking-wider text-[#77746D] mb-5">
                    {c.scope}
                  </div>

                  <div className="bg-[#FAFAF8] rounded-lg border border-[#E5E3DD] p-4 space-y-2 mb-4 group-hover:bg-[#FFFDFB] transition-colors duration-200">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#77746D] font-medium">Deployed Workforce</span>
                      <span className="font-mono font-bold text-[#202020]">{c.workers} Workers</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#77746D] font-medium">Safety Compliance</span>
                      <span className="font-semibold text-[#557A62]">99.4% (Zero Violations)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E5E3DD] flex items-center justify-between text-xs text-[#77746D]">
                  <span className="font-mono">AGR-2025-GUJ-0{i + 1}</span>
                  <span className="text-[#6F7658] font-semibold">Active In-Force</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
