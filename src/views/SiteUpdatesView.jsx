import React, { useState } from 'react';
import { SITE_UPDATES } from '../data/projectData';
import {
  Calendar,
  CloudSun,
  Users,
  ShieldCheck,
  Camera,
  Plus,
  X,
  ClipboardList,
  CheckCircle2
} from 'lucide-react';

export default function SiteUpdatesView({ isModalOpen, setIsModalOpen }) {
  const [updates, setUpdates] = useState(SITE_UPDATES);
  const [selectedUpdate, setSelectedUpdate] = useState(SITE_UPDATES[0]);
  const [newLogTitle, setNewLogTitle] = useState('');
  const [newLogSummary, setNewLogSummary] = useState('');
  const [newLogEngineer, setNewLogEngineer] = useState('Er. Rajesh Varma');

  const handleCreateLog = (e) => {
    e.preventDefault();
    if (!newLogTitle.trim()) return;

    const newEntry = {
      id: updates.length + 22,
      date: '20 Sept 2026',
      time: '12:00 PM',
      title: newLogTitle,
      engineer: newLogEngineer,
      weather: '34°C · Sunny',
      workforceTotal: 248,
      workforceDistribution: {
        barBenders: 72,
        carpenters: 64,
        masons: 48,
        mepTechnicians: 34,
        safetyMarshals: 12,
        craneOperators: 18
      },
      workSummary: newLogSummary || 'Daily inspection recorded. Structural alignment meets IS 456 standards.',
      safetyIncidents: 'Zero incidents recorded.',
      equipmentStatus: [
        { name: 'Tower Crane 01', status: 'Operational', uptime: '99%' },
        { name: 'Batching Plant', status: 'Active', uptime: '95%' }
      ],
      photos: [
        { title: 'Site Inspection Entry', location: 'Tower A · Level 12', notes: 'Field observation logged.' }
      ]
    };

    setUpdates([newEntry, ...updates]);
    setSelectedUpdate(newEntry);
    setIsModalOpen(false);
    setNewLogTitle('');
    setNewLogSummary('');
  };

  return (
    <div className="w-full bg-gray-50 min-h-[calc(100vh-72px)] py-8">
      <div className="max-w-7xl mx-auto px-6 space-y-6">

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 mb-2">
              <ClipboardList size={13} strokeWidth={2.2} />
              <span>Field Telemetry</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              Daily Site Updates & Inspection Logs
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Authenticated field logs recorded by licensed structural engineers and site supervisors.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 shadow-sm transition-colors cursor-pointer self-start sm:self-auto"
          >
            <Plus size={16} strokeWidth={2.4} />
            <span>Record Daily Site Log</span>
          </button>
        </div>

        {/* Two-Column Grid: List on Left, Detail on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Log Feed */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-400 block mb-1">
              Inspection Dossiers ({updates.length})
            </span>

            {updates.map((log) => {
              const isSelected = selectedUpdate?.id === log.id;
              return (
                <div
                  key={log.id}
                  onClick={() => setSelectedUpdate(log)}
                  className={`bg-white rounded-xl border p-4 shadow-sm transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'border-gray-900 ring-1 ring-gray-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                      UPDATE #{log.id}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {log.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug mb-1">
                    {log.title}
                  </h3>
                  <div className="text-xs text-gray-500">
                    {log.engineer} · <span className="font-mono font-medium text-gray-700">{log.workforceTotal} Personnel</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed View */}
          {selectedUpdate && (
            <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
              {/* Header */}
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    <Calendar size={12} />
                    <span>Site Update #{selectedUpdate.id} · {selectedUpdate.date} · {selectedUpdate.time}</span>
                  </span>
                  <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    <span>Sign-off: {selectedUpdate.engineer}</span>
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mt-2">
                  {selectedUpdate.title}
                </h2>

                {/* Inline Chips */}
                <div className="flex flex-wrap items-center gap-2.5 mt-3 pt-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700">
                    <CloudSun size={13} className="text-gray-500" />
                    <span><strong>Weather:</strong> {selectedUpdate.weather}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-700">
                    <Users size={13} className="text-gray-500" />
                    <span><strong>Muster:</strong> {selectedUpdate.workforceTotal} Active</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-green-50 border border-green-200 text-xs text-green-800">
                    <ShieldCheck size={13} className="text-green-600" />
                    <span><strong>Safety:</strong> {selectedUpdate.safetyIncidents}</span>
                  </div>
                </div>
              </div>

              {/* Work Summary */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2">
                  Work Summary & Field Observations
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-sm text-gray-800 leading-relaxed">
                  {selectedUpdate.workSummary}
                </div>
              </div>

              {/* Workforce Trade Distribution */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2">
                  Workforce Trade Distribution
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Object.entries(selectedUpdate.workforceDistribution).map(([trade, count]) => {
                    const total = selectedUpdate.workforceTotal || 248;
                    const share = Math.min(100, Math.round((count / total) * 100));

                    return (
                      <div key={trade} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                          {trade.replace(/([A-Z])/g, ' $1')}
                        </div>
                        <div className="text-lg font-bold text-gray-900 font-mono mt-0.5">
                          {count} <span className="text-xs font-normal text-gray-500">Hands</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
                          <div className="bg-gray-900 h-full rounded-full" style={{ width: `${share}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Heavy Plant & Equipment */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2">
                  Heavy Plant & Equipment Telemetry
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedUpdate.equipmentStatus.map((eq, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="font-semibold text-gray-900">{eq.name}</span>
                      </div>
                      <span className="font-mono font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded">
                        {eq.uptime} Uptime
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photographic Verification */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-2">
                  Photographic Engineering Verification
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedUpdate.photos.map((p, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg border border-gray-200 p-3.5 hover:bg-gray-100/70 transition-colors">
                      <div className="flex items-center gap-1.5 text-xs text-amber-700 font-bold mb-1">
                        <Camera size={13} />
                        <span>{p.location}</span>
                      </div>
                      <h4 className="text-xs font-bold text-gray-900 mb-1">
                        {p.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 leading-snug">
                        {p.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal for New Site Log */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl border border-gray-200 shadow-xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in duration-150">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                <span className="text-sm font-bold text-gray-900">
                  New Field Daily Site Log
                </span>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-200/60 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleCreateLog} className="p-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">
                    Log Title / Milestone
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tower A 13th Floor Slab Concreting & Cube Cast"
                    value={newLogTitle}
                    onChange={(e) => setNewLogTitle(e.target.value)}
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">
                    Supervising Engineer
                  </label>
                  <input
                    type="text"
                    value={newLogEngineer}
                    onChange={(e) => setNewLogEngineer(e.target.value)}
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">
                    Observations & Progress Notes
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Record slump values, reinforcement checks, weather variations or trade delays..."
                    value={newLogSummary}
                    onChange={(e) => setNewLogSummary(e.target.value)}
                    className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none resize-vertical"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold bg-gray-900 text-white hover:bg-gray-800 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Commit Log to Project Ledger
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
