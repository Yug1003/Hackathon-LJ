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
    <div className="w-full bg-gray-50 min-h-[calc(100vh-72px)] py-8 md:py-12">
      {/* Centered Main Container taking up ~90% on desktop */}
      <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">

        {/* Page Header & Visual Hierarchy */}
        <div className="pb-6 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-3">
            <ShieldAlert size={18} strokeWidth={2.2} />
            <span>Risk Mitigation Registry</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Project Risk Assessment & Contingency
          </h1>
          <p className="text-base md:text-lg text-gray-600 mt-2.5 max-w-3xl font-normal leading-relaxed">
            Geotechnical, supply chain, structural compliance, and site safety vulnerability protocols for Sunrise Residency.
          </p>
        </div>

        {/* 4 Summary Stat Cards - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Critical Exposure */}
          <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-red-600 p-6 md:p-7 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
                Critical Exposure
              </span>
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                <AlertTriangle size={22} strokeWidth={2.4} />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-red-700 tracking-tight font-mono">
              1 Active
            </div>
            <p className="text-base text-gray-500 mt-2 font-normal leading-normal">
              Steel logistics bottleneck (Hazira transit)
            </p>
          </div>

          {/* Card 2: Controlled Vulnerabilities */}
          <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-green-600 p-6 md:p-7 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
                Controlled Risks
              </span>
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                <ShieldCheck size={22} strokeWidth={2.4} />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-green-700 tracking-tight font-mono">
              3 Mitigated
            </div>
            <p className="text-base text-gray-500 mt-2 font-normal leading-normal">
              Dual pumps, retarders & tag lockouts active
            </p>
          </div>

          {/* Card 3: Contingency Reserve */}
          <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-amber-600 p-6 md:p-7 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
                Contingency Reserve
              </span>
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Coins size={22} strokeWidth={2.4} />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-mono">
              88% Intact
            </div>
            <p className="text-base text-gray-500 mt-2 font-normal leading-normal">
              ₹2.4 Cr reserve (₹1.8L current exposure)
            </p>
          </div>

          {/* Card 4: HSE Safe Hours */}
          <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-blue-600 p-6 md:p-7 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
                HSE Safe Hours
              </span>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <ShieldAlert size={22} strokeWidth={2.4} />
              </div>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight font-mono">
              342,000
            </div>
            <p className="text-base text-green-700 mt-2 font-medium leading-normal flex items-center gap-1.5">
              <CheckCircle2 size={18} />
              <span>Zero Lost Time Injuries (LTI)</span>
            </p>
          </div>
        </div>

        {/* Section Headline */}
        <div>
          <div className="border-b border-gray-200 pb-3 mb-6 flex items-center justify-between">
            <div>
              <span className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-500 block mb-0.5">Risk Analysis & Control</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Active Hazard & Mitigation Register
              </h2>
            </div>
            <span className="text-base font-semibold text-gray-500 font-mono">
              {PROJECT_RISKS.length} Registered Hazards
            </span>
          </div>

          {/* Risk Entry Cards - Stacked with clean vertical spacing */}
          <div className="space-y-6">
            {PROJECT_RISKS.map((risk) => {
              const isHigh = risk.level === 'High';
              const isMedium = risk.level === 'Medium';

              return (
                <div
                  key={risk.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {/* Header Row: Code, Category, Title + Right-aligned Risk Pill */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center flex-wrap gap-3.5">
                      <span className="px-3 py-1 rounded-md font-mono font-bold text-sm text-gray-600 bg-gray-50 border border-gray-200">
                        {risk.id}
                      </span>
                      <span className="px-3.5 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                        {risk.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {risk.title}
                      </h3>
                    </div>

                    {/* Level Pill */}
                    <div className="self-start sm:self-auto">
                      <span
                        className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
                          isHigh
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : isMedium
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-green-50 text-green-700 border border-green-200'
                        }`}
                      >
                        {risk.level} Risk
                      </span>
                    </div>
                  </div>

                  {/* 4-Column Assessment Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50 rounded-xl p-5 md:p-6 border border-gray-200 my-6">
                    <div>
                      <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                        Probability
                      </span>
                      <span className="block text-base md:text-lg font-bold font-mono text-gray-900">
                        {risk.probability}
                      </span>
                    </div>

                    <div>
                      <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                        Schedule & Cost Impact
                      </span>
                      <span className="block text-base md:text-lg font-bold font-mono text-gray-900">
                        {risk.impact}
                      </span>
                    </div>

                    <div>
                      <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                        Assigned Risk Owner
                      </span>
                      <span className="block text-base md:text-lg font-semibold text-gray-900">
                        {risk.owner}
                      </span>
                    </div>

                    <div>
                      <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
                        Mitigation Status
                      </span>
                      <span className="block text-base md:text-lg font-bold text-green-700">
                        {risk.status}
                      </span>
                    </div>
                  </div>

                  {/* Engineered Protocol Box */}
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 md:p-6 text-base md:text-lg text-gray-800 leading-relaxed">
                    <span className="font-bold text-amber-800 uppercase tracking-wide mr-2.5">
                      Engineered Protocol:
                    </span>
                    <span>
                      {risk.mitigation}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
