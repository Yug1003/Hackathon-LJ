import React from 'react';
import { PROJECT_RISKS } from '../data/projectData';
import {
  AlertTriangle,
  ShieldCheck,
  ShieldAlert,
  Coins,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldX
} from 'lucide-react';

export default function RisksView() {
  return (
    <div className="w-full bg-[#F7F6F2] min-h-[calc(100vh-72px)] py-8 md:py-12 select-none">
      {/* Centered Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header & Visual Hierarchy */}
        <div className="mb-8 pb-6 border-b border-[#E5E3DD]">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#FAF4ED] border border-[#E8BFAB] text-[#C96B3B] text-xs font-bold uppercase tracking-wider mb-2.5">
            <ShieldAlert size={13} strokeWidth={2.4} />
            <span>Risk Mitigation Registry</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202020] tracking-tight">
            Project Risk Assessment & Contingency
          </h1>
          <p className="text-sm sm:text-base text-[#77746D] mt-1.5 max-w-2xl font-normal leading-relaxed">
            Geotechnical, supply chain, structural compliance, and site safety vulnerability protocols for Sunrise Residency.
          </p>
        </div>

        {/* 4 Summary Stat Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Card 1: Critical Exposure */}
          <div className="bg-white rounded-xl border border-[#E5E3DD] border-l-4 border-l-[#B65345] p-5 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#77746D] uppercase tracking-wider">
                Critical Exposure
              </span>
              <div className="w-7 h-7 rounded-lg bg-[#F9EFEF] flex items-center justify-center text-[#B65345]">
                <AlertTriangle size={15} strokeWidth={2.4} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#B65345] tracking-tight font-mono">
              1 Active
            </div>
            <p className="text-xs text-[#77746D] mt-1.5 font-medium leading-normal">
              Steel logistics bottleneck (Hazira transit)
            </p>
          </div>

          {/* Card 2: Controlled Vulnerabilities */}
          <div className="bg-white rounded-xl border border-[#E5E3DD] border-l-4 border-l-[#557A62] p-5 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#77746D] uppercase tracking-wider">
                Controlled Risks
              </span>
              <div className="w-7 h-7 rounded-lg bg-[#EDF3EF] flex items-center justify-center text-[#557A62]">
                <ShieldCheck size={15} strokeWidth={2.4} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#557A62] tracking-tight font-mono">
              3 Mitigated
            </div>
            <p className="text-xs text-[#77746D] mt-1.5 font-medium leading-normal">
              Dual pumps, retarders & tag lockouts active
            </p>
          </div>

          {/* Card 3: Contingency Reserve */}
          <div className="bg-white rounded-xl border border-[#E5E3DD] border-l-4 border-l-[#C96B3B] p-5 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#77746D] uppercase tracking-wider">
                Contingency Reserve
              </span>
              <div className="w-7 h-7 rounded-lg bg-[#FAF4ED] flex items-center justify-center text-[#C96B3B]">
                <Coins size={15} strokeWidth={2.4} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#202020] tracking-tight font-mono">
              88% Intact
            </div>
            <p className="text-xs text-[#77746D] mt-1.5 font-medium leading-normal">
              ₹2.4 Cr reserve (₹1.8L current exposure)
            </p>
          </div>

          {/* Card 4: HSE Safe Hours */}
          <div className="bg-white rounded-xl border border-[#E5E3DD] border-l-4 border-l-[#6F7658] p-5 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#77746D] uppercase tracking-wider">
                HSE Safe Hours
              </span>
              <div className="w-7 h-7 rounded-lg bg-[#F2F4ED] flex items-center justify-center text-[#6F7658]">
                <ShieldAlert size={15} strokeWidth={2.4} />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-[#202020] tracking-tight font-mono">
              342,000
            </div>
            <p className="text-xs text-[#557A62] mt-1.5 font-semibold leading-normal flex items-center gap-1">
              <CheckCircle2 size={12} />
              <span>Zero Lost Time Injuries (LTI)</span>
            </p>
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#202020] tracking-tight">
            Active Hazard & Mitigation Register
          </h2>
          <span className="text-xs font-semibold text-[#77746D] font-mono">
            {PROJECT_RISKS.length} Registered Hazards
          </span>
        </div>

        {/* Risk Entry Cards - Stacked with clean vertical spacing */}
        <div className="space-y-4 sm:space-y-5">
          {PROJECT_RISKS.map((risk) => {
            const isHigh = risk.level === 'High';
            const isMedium = risk.level === 'Medium';

            return (
              <div
                key={risk.id}
                className="bg-white rounded-xl border border-[#E5E3DD] p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[#C96B3B]/60 transition-all duration-200"
              >
                {/* Header Row: Code, Category, Title + Right-aligned Risk Pill */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E3DD]">
                  <div className="flex items-center flex-wrap gap-2.5">
                    <span className="px-2 py-0.5 rounded-md bg-[#FAF9F6] border border-[#E5E3DD] font-mono font-bold text-xs text-[#77746D]">
                      {risk.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#F2F4ED] text-[#6F7658] border border-[#CAD1BE] text-xs font-bold uppercase tracking-wider">
                      {risk.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#202020]">
                      {risk.title}
                    </h3>
                  </div>

                  {/* Level Pill */}
                  <div className="self-start sm:self-auto">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        isHigh
                          ? 'bg-[#F9EFEF] text-[#B65345] border-[#B65345]/30'
                          : isMedium
                          ? 'bg-[#FBF4E8] text-[#C18A3A] border-[#C18A3A]/30'
                          : 'bg-[#EDF3EF] text-[#557A62] border-[#557A62]/30'
                      }`}
                    >
                      {risk.level} Risk
                    </span>
                  </div>
                </div>

                {/* 4-Column Assessment Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#FAFAF8] rounded-lg p-4 border border-[#E5E3DD] my-4">
                  <div>
                    <span className="block text-[11px] font-bold text-[#77746D] uppercase tracking-wider">
                      Probability
                    </span>
                    <span className="block text-sm font-bold font-mono text-[#202020] mt-0.5">
                      {risk.probability}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold text-[#77746D] uppercase tracking-wider">
                      Schedule & Cost Impact
                    </span>
                    <span className="block text-sm font-bold font-mono text-[#202020] mt-0.5">
                      {risk.impact}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold text-[#77746D] uppercase tracking-wider">
                      Assigned Risk Owner
                    </span>
                    <span className="block text-sm font-semibold text-[#202020] mt-0.5">
                      {risk.owner}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold text-[#77746D] uppercase tracking-wider">
                      Mitigation Status
                    </span>
                    <span className="block text-sm font-bold text-[#6F7658] mt-0.5">
                      {risk.status}
                    </span>
                  </div>
                </div>

                {/* Engineered Protocol Box */}
                <div className="bg-[#FAF8F5] border border-[#E8DFD8] rounded-lg p-3.5 text-xs sm:text-sm text-[#202020] leading-relaxed">
                  <span className="font-bold text-[#C96B3B] uppercase tracking-wide mr-1.5">
                    Engineered Protocol:
                  </span>
                  <span className="font-normal text-[#202020]">
                    {risk.mitigation}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
