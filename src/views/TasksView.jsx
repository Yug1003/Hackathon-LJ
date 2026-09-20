import React, { useState } from 'react';
import { PROJECT_TASKS } from '../data/projectData';
import {
  CheckSquare,
  Filter,
  Plus,
  Clock,
  User,
  AlertCircle,
  CheckCircle2,
  ListTodo,
  Layers,
  ShieldAlert,
  ArrowUpDown
} from 'lucide-react';

export default function TasksView() {
  const [tasks, setTasks] = useState(PROJECT_TASKS);
  const [filterTrade, setFilterTrade] = useState('All');

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        return {
          ...t,
          status: t.status === 'Completed' ? 'In Progress' : 'Completed'
        };
      }
      return t;
    }));
  };

  const trades = ['All', 'Procurement', 'Materials', 'Civil', 'MEP', 'Fire Safety'];

  const filteredTasks = tasks.filter(t => {
    if (filterTrade === 'All') return true;
    return t.trade.toLowerCase().includes(filterTrade.toLowerCase());
  });

  const completedCount = tasks.filter(t => t.status === 'Completed').length;
  const inProgressCount = tasks.filter(t => t.status !== 'Completed').length;
  const highPriorityCount = tasks.filter(t => t.priority === 'High' && t.status !== 'Completed').length;

  return (
    <div className="w-full bg-[#F7F6F2] min-h-[calc(100vh-72px)] py-8 md:py-12">
      {/* Centered Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header & Visual Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#E5E3DD]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#FAF4ED] border border-[#E8BFAB] text-[#C96B3B] text-xs font-bold uppercase tracking-wider mb-2.5">
              <ListTodo size={13} strokeWidth={2.4} />
              <span>Execution Management</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202020] tracking-tight">
              Work Breakdown Structure & Site Tasks
            </h1>
            <p className="text-sm sm:text-base text-[#77746D] mt-1.5 max-w-2xl font-normal leading-relaxed">
              Contractor assignments, critical path activity timelines, trade allocations, and blocker tracking.
            </p>
          </div>

          {/* Quick Stats Summary */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div className="px-3.5 py-2 rounded-xl bg-white border border-[#E5E3DD] shadow-sm flex items-center gap-2.5">
              <span className="text-xs text-[#77746D] font-semibold uppercase tracking-wider">Active:</span>
              <span className="font-mono font-bold text-sm text-[#202020]">{inProgressCount}</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white border border-[#E5E3DD] shadow-sm flex items-center gap-2.5">
              <span className="text-xs text-[#77746D] font-semibold uppercase tracking-wider">Done:</span>
              <span className="font-mono font-bold text-sm text-[#557A62]">{completedCount}</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white border border-[#E5E3DD] shadow-sm flex items-center gap-2.5">
              <span className="text-xs text-[#B65345] font-semibold uppercase tracking-wider">High Risk:</span>
              <span className="font-mono font-bold text-sm text-[#B65345]">{highPriorityCount}</span>
            </div>
          </div>
        </div>

        {/* Filter Pills with Proper Gaps and Active States */}
        <div className="flex items-center flex-wrap gap-2.5 mb-6">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#77746D] uppercase tracking-wider mr-1">
            <Filter size={13} />
            <span>Trade:</span>
          </div>

          {trades.map((trade) => {
            const isActive = filterTrade === trade;
            return (
              <button
                key={trade}
                type="button"
                onClick={() => setFilterTrade(trade)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#252525] text-white shadow-sm border border-[#252525]'
                    : 'bg-white text-[#77746D] hover:text-[#202020] hover:bg-[#F2EFEB] border border-[#E5E3DD]'
                }`}
              >
                {trade}
              </button>
            );
          })}
        </div>

        {/* Table Container - Horizontally Scrollable on Mobile, Rounded-xl, Shadows */}
        <div className="bg-white rounded-xl border border-[#E5E3DD] shadow-sm overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[850px]">
              <thead>
                <tr className="bg-[#FAF9F6] border-b border-[#E5E3DD]">
                  <th className="py-3.5 px-4 sm:px-5 text-xs font-bold text-[#77746D] uppercase tracking-wider text-center w-14">
                    Status
                  </th>
                  <th className="py-3.5 px-4 text-xs font-bold text-[#77746D] uppercase tracking-wider w-24">
                    Task Code
                  </th>
                  <th className="py-3.5 px-4 sm:px-5 text-xs font-bold text-[#77746D] uppercase tracking-wider">
                    Activity Description
                  </th>
                  <th className="py-3.5 px-4 text-xs font-bold text-[#77746D] uppercase tracking-wider">
                    Tower / Zone
                  </th>
                  <th className="py-3.5 px-4 text-xs font-bold text-[#77746D] uppercase tracking-wider">
                    Trade
                  </th>
                  <th className="py-3.5 px-4 text-xs font-bold text-[#77746D] uppercase tracking-wider">
                    Assignee
                  </th>
                  <th className="py-3.5 px-4 text-xs font-bold text-[#77746D] uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="py-3.5 px-4 text-xs font-bold text-[#77746D] uppercase tracking-wider text-center">
                    Priority
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-xs font-bold text-[#77746D] uppercase tracking-wider">
                    Critical Blocker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E3DD]">
                {filteredTasks.map((task) => {
                  const isCompleted = task.status === 'Completed';
                  const isHigh = task.priority === 'High';
                  const isMedium = task.priority === 'Medium';

                  return (
                    <tr
                      key={task.id}
                      className={`hover:bg-[#F8F7F3] transition-colors duration-150 ${
                        isCompleted ? 'bg-[#FAF9F6]/60 opacity-65' : ''
                      }`}
                    >
                      {/* Checkbox Column */}
                      <td className="py-3.5 px-4 sm:px-5 text-center">
                        <input
                          type="checkbox"
                          checked={isCompleted}
                          onChange={() => toggleTaskStatus(task.id)}
                          className="w-4 h-4 rounded border-[#DCD8CF] text-[#252525] focus:ring-[#252525] accent-[#252525] cursor-pointer transition-transform duration-100 hover:scale-110"
                        />
                      </td>

                      {/* Task Code */}
                      <td className="py-3.5 px-4 font-mono font-bold text-xs text-[#77746D]">
                        {task.id}
                      </td>

                      {/* Description */}
                      <td className="py-3.5 px-4 sm:px-5 text-sm font-semibold text-[#202020]">
                        <span className={isCompleted ? 'line-through text-[#77746D]' : ''}>
                          {task.title}
                        </span>
                      </td>

                      {/* Tower */}
                      <td className="py-3.5 px-4 text-xs font-medium text-[#202020]">
                        <span className="inline-block px-2 py-0.5 rounded bg-[#F4F2EB] border border-[#E5E3DD]">
                          {task.tower}
                        </span>
                      </td>

                      {/* Trade */}
                      <td className="py-3.5 px-4 text-xs font-semibold text-[#77746D]">
                        {task.trade}
                      </td>

                      {/* Assignee */}
                      <td className="py-3.5 px-4 text-xs text-[#202020] font-medium">
                        {task.assignee}
                      </td>

                      {/* Deadline */}
                      <td className="py-3.5 px-4 text-xs font-mono text-[#77746D]">
                        {task.deadline}
                      </td>

                      {/* Priority Badge */}
                      <td className="py-3.5 px-4 text-center">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border ${
                            isHigh
                              ? 'bg-[#F9EFEF] text-[#B65345] border-[#B65345]/30'
                              : isMedium
                              ? 'bg-[#FBF4E8] text-[#C18A3A] border-[#C18A3A]/30'
                              : 'bg-[#EDF3EF] text-[#557A62] border-[#557A62]/30'
                          }`}
                        >
                          {task.priority}
                        </span>
                      </td>

                      {/* Critical Blocker with Status Font */}
                      <td className="py-3.5 px-4 sm:px-6 text-xs">
                        {task.blocker === 'None' ? (
                          <span className="inline-flex items-center gap-1.5 text-[#557A62] font-semibold">
                            <CheckCircle2 size={13} />
                            <span>Clear</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#F9EFEF] border border-[#B65345]/20 text-[#B65345] font-bold">
                            <AlertCircle size={12} />
                            <span>{task.blocker}</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer / Summary Bar */}
          <div className="p-4 sm:px-6 bg-[#FAF9F6] border-t border-[#E5E3DD] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#77746D]">
            <span>
              Showing {filteredTasks.length} of {tasks.length} tasks across Sunrise Residency
            </span>
            <span className="flex items-center gap-1.5 text-[#557A62] font-semibold">
              <CheckCircle2 size={13} />
              <span>Primavera WBS Synchronized</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
