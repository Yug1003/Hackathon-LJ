import React from 'react';
import {
  PROJECT_INFO,
  CRITICAL_ISSUES,
  TOWER_STATUS
} from '../data/projectData';
import {
  ArrowRight,
  TrendingDown,
  Clock,
  HardHat,
  Truck,
  CheckCircle2,
  AlertCircle,
  Activity,
  Layers,
  Building2
} from 'lucide-react';

export default function DashboardView({ onOpenIntelQuestion }) {
  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-72px)] py-8 md:py-12">
      <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">

        {/* Hero Section */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-200">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span>PROJECT OVERVIEW</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Good morning. Here's what needs your attention.
              </h1>
              <p className="text-base md:text-lg text-gray-600 mt-2.5 leading-relaxed">
                Active superstructure execution at {PROJECT_INFO.name} ({PROJECT_INFO.details}). 3 key impediments require field mitigation.
              </p>
            </div>

            {/* Quick Meta Stats Pill Box */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="px-6 py-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-500 block mb-1">Health Index</span>
                <span className="text-3xl md:text-4xl font-bold text-green-700 font-mono">{PROJECT_INFO.healthScore}% Verified</span>
              </div>
              <div className="px-6 py-4 rounded-xl bg-gray-50 border border-gray-200">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-500 block mb-1">Countdown</span>
                <span className="text-3xl md:text-4xl font-bold text-gray-900 font-mono">{PROJECT_INFO.daysToHandover} Days</span>
              </div>
            </div>
          </div>

          {/* Ribbon Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 pt-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Phase</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">{PROJECT_INFO.phase}</p>
            </div>
            <div>
              <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Target Completion</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">{PROJECT_INFO.targetCompletion}</p>
            </div>
            <div>
              <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Workforce On Site</span>
              <p className="text-lg font-semibold text-gray-900 mt-1 font-mono">{PROJECT_INFO.workforceOnSite} Personnel</p>
            </div>
            <div>
              <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Weather Telemetry</span>
              <p className="text-lg font-semibold text-gray-900 mt-1">{PROJECT_INFO.weather.temp} · {PROJECT_INFO.weather.condition}</p>
            </div>
          </div>
        </section>

        {/* Section 1: 3 Critical Attention Items */}
        <section>
          <div className="border-b border-gray-200 pb-3 mb-6 flex items-center justify-between">
            <div>
              <span className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-500 block mb-0.5">High Priority Alerts</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Critical Attention Items
              </h2>
            </div>
            <span className="text-sm font-semibold text-red-700 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
              3 Active Issues
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CRITICAL_ISSUES.map((issue) => {
              const isHigh = issue.priorityLevel === 'critical';
              const isMedium = issue.priorityLevel === 'warning';

              return (
                <div
                  key={issue.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-7 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-sm font-bold text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded">
                        #{issue.id}
                      </span>
                      <span
                        className={`px-3.5 py-1 rounded-full text-sm font-semibold ${
                          isHigh
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : isMedium
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {issue.priority}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 leading-snug">
                      {issue.title}
                    </h3>
                    <div className="text-base text-gray-500 font-medium mt-1.5 mb-4">
                      {issue.location}
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-2.5 mb-4">
                      <div className="flex justify-between items-center text-base">
                        <span className="text-gray-500">Impact:</span>
                        <span className="font-semibold text-gray-900">{issue.impact}</span>
                      </div>
                      <div className="flex justify-between items-center text-base">
                        <span className="text-gray-500">Cost Exposure:</span>
                        <span className="font-mono font-bold text-gray-900 text-lg">{issue.costRisk}</span>
                      </div>
                    </div>

                    <div className="text-base text-gray-700 leading-relaxed mb-6">
                      <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 block mb-1">Recommended Action:</span>
                      {issue.recommendation}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={() => onOpenIntelQuestion(issue.questionQuery)}
                      className="w-full flex items-center justify-center gap-2 text-base font-semibold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100/80 border border-amber-200 rounded-xl py-3 transition-colors cursor-pointer"
                    >
                      <span>View Project Intelligence Memo</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Key Operational Metrics */}
        <section>
          <div className="border-b border-gray-200 pb-3 mb-6 flex items-center justify-between">
            <div>
              <span className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-500 block mb-0.5">Real-time Telemetry</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Site Telemetry & Performance Variance
              </h2>
            </div>
            <span className="text-base text-gray-500 font-normal">
              {PROJECT_INFO.lastUpdate}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-7 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Active Workforce</span>
                <HardHat size={24} className="text-gray-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 font-mono">{PROJECT_INFO.workforceOnSite}</div>
              <div className="text-base text-green-700 font-medium mt-2 flex items-center gap-1.5">
                <CheckCircle2 size={18} />
                <span>98% Planned Mobilization</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-7 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Schedule Variance</span>
                <Clock size={24} className="text-red-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-red-700 font-mono">+4 Days</div>
              <div className="text-base text-red-600 font-medium mt-2">
                Tower A Rebar bottleneck
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-7 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Committed Budget</span>
                <TrendingDown size={24} className="text-green-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 font-mono">₹41.2 Cr</div>
              <div className="text-base text-green-700 font-medium mt-2">
                -1.4% Under Monthly Cap
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-7 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium uppercase tracking-wide text-gray-500">Pour Meteorology</span>
                <Truck size={24} className="text-blue-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 font-mono">{PROJECT_INFO.weather.temp}</div>
              <div className="text-base text-green-700 font-medium mt-2">
                {PROJECT_INFO.weather.condition} · Ideal for RMC
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Superstructure Elevation Matrix */}
        <section>
          <div className="border-b border-gray-200 pb-3 mb-6 flex items-center justify-between">
            <div>
              <span className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-500 block mb-0.5">Vertical Progress</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Superstructure Elevation Matrix
              </h2>
            </div>
            <span className="text-base text-gray-500 font-medium">
              3 Towers · 18 Floors Target
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOWER_STATUS.map((item) => {
              const isDelayed = item.statusType === 'critical';

              return (
                <div
                  key={item.tower}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 md:p-7 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.tower}</h3>
                      <div className="text-base text-gray-500 font-medium mt-1">{item.currentFloor}</div>
                    </div>
                    <span
                      className={`px-3.5 py-1 rounded-full text-sm font-semibold ${
                        isDelayed
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'bg-green-50 text-green-700 border border-green-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Progress Bar - Height 2.5 */}
                  <div className="w-full bg-gray-100 rounded-full h-2.5 my-4 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isDelayed ? 'bg-amber-600' : 'bg-gray-900'
                      }`}
                      style={{ width: `${item.completionRate}%` }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center text-base text-gray-500 mb-4">
                    <span>Progress:</span>
                    <span className="font-bold font-mono text-gray-900 text-lg">
                      {item.completionRate}% ({item.currentFloor.split(' ')[0]} / {item.targetFloor}F)
                    </span>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 grid grid-cols-2 gap-4 text-base">
                    <div>
                      <span className="text-sm font-medium uppercase tracking-wide text-gray-500 block mb-0.5">Labor Force</span>
                      <span className="font-semibold text-gray-900 font-mono text-lg">{item.workforce} Techs</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium uppercase tracking-wide text-gray-500 block mb-0.5">Critical Path</span>
                      <span className="font-semibold text-gray-900 truncate block">{item.criticalPath}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Certified Engineering Inspection Logs */}
        <section>
          <div className="border-b border-gray-200 pb-3 mb-6 flex items-center justify-between">
            <div>
              <span className="text-sm md:text-base font-semibold uppercase tracking-wide text-gray-500 block mb-0.5">QA/QC Audit Trail</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Certified Engineering Inspection Logs
              </h2>
            </div>
            <span className="text-sm font-semibold text-green-700 bg-green-50 border border-green-200 px-3.5 py-1 rounded-full">
              IS 456 Compliant
            </span>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-sm font-bold uppercase tracking-wider text-gray-500">
                    <th className="py-4 px-6">Log Code</th>
                    <th className="py-4 px-6">Time & Date</th>
                    <th className="py-4 px-6">Structural Milestone Inspected</th>
                    <th className="py-4 px-6">Testing Protocol</th>
                    <th className="py-4 px-6">Supervising Engineer</th>
                    <th className="py-4 px-6 text-center">Compliance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-base">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-base text-gray-900">LOG-2026-024</td>
                    <td className="py-4 px-6 text-base font-mono text-gray-500">Today, 09:30 IST</td>
                    <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Tower B · Level 14 Columns Pour (48 m³)</td>
                    <td className="py-4 px-6 text-base text-gray-600">IS 456 Slump: 125mm (Pass)</td>
                    <td className="py-4 px-6 text-base font-medium text-gray-900">Er. Rajesh Varma</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-200">
                        Compliant
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-base text-gray-900">LOG-2026-023</td>
                    <td className="py-4 px-6 text-base font-mono text-gray-500">19 Sept, 18:00 IST</td>
                    <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Tower C · Level 9 Soffit Formwork Striking</td>
                    <td className="py-4 px-6 text-base text-gray-600">Deflection & Laser Scan</td>
                    <td className="py-4 px-6 text-base font-medium text-gray-900">Er. Anita Desai</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-200">
                        Compliant
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-mono font-bold text-base text-gray-900">LOG-2026-022</td>
                    <td className="py-4 px-6 text-base font-mono text-gray-500">18 Sept, 16:15 IST</td>
                    <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Basement B2 · Exterior Tanking Membrane</td>
                    <td className="py-4 px-6 text-base text-gray-600">Air Lance Pressure Test (2.5 bar)</td>
                    <td className="py-4 px-6 text-base font-medium text-gray-900">Er. Rajesh Varma</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-200">
                        Zero Leakage
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
