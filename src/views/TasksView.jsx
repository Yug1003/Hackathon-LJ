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
    <div className="w-full bg-gray-50 min-h-[calc(100vh-72px)] py-8 md:py-12">
      {/* Centered Main Content Container taking up ~90% on desktop */}
      <div className="w-full lg:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">

        {/* Page Header & Visual Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-amber-50 text-amber-700 border border-amber-200 mb-3">
              <ListTodo size={18} strokeWidth={2.2} />
              <span>Execution Management</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Work Breakdown Structure & Site Tasks
            </h1>
            <p className="text-base md:text-lg text-gray-600 mt-2.5 max-w-3xl font-normal leading-relaxed">
              Contractor assignments, critical path activity timelines, trade allocations, and blocker tracking.
            </p>
          </div>

          {/* Quick Stats Summary */}
          <div className="flex items-center gap-3.5 self-start md:self-end">
            <div className="px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Active:</span>
              <span className="font-mono font-bold text-xl text-gray-900">{inProgressCount}</span>
            </div>
            <div className="px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Done:</span>
              <span className="font-mono font-bold text-xl text-green-700">{completedCount}</span>
            </div>
            <div className="px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <span className="text-sm text-red-600 font-semibold uppercase tracking-wider">High Risk:</span>
              <span className="font-mono font-bold text-xl text-red-700">{highPriorityCount}</span>
            </div>
          </div>
        </div>

        {/* Filter Pills with Proper Gaps and Active States */}
        <div className="flex items-center flex-wrap gap-3">
          <div className="flex items-center gap-2 text-sm md:text-base font-semibold uppercase tracking-wider text-gray-500 mr-1">
            <Filter size={18} />
            <span>Trade:</span>
          </div>

          {trades.map((trade) => {
            const isActive = filterTrade === trade;
            return (
              <button
                key={trade}
                type="button"
                onClick={() => setFilterTrade(trade)}
                className={`px-5 py-2.5 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {trade}
              </button>
            );
          })}
        </div>

        {/* Table Container - Horizontally Scrollable on Mobile, Rounded-xl, Shadows */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[850px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm font-bold uppercase tracking-wider text-gray-500">
                  <th className="py-4 px-5 text-center w-16">
                    Status
                  </th>
                  <th className="py-4 px-5 text-sm font-bold uppercase text-gray-500 w-28">
                    Task Code
                  </th>
                  <th className="py-4 px-6 text-sm font-bold uppercase text-gray-500">
                    Activity Description
                  </th>
                  <th className="py-4 px-5 text-sm font-bold uppercase text-gray-500">
                    Tower / Zone
                  </th>
                  <th className="py-4 px-5 text-sm font-bold uppercase text-gray-500">
                    Trade
                  </th>
                  <th className="py-4 px-5 text-sm font-bold uppercase text-gray-500">
                    Assignee
                  </th>
                  <th className="py-4 px-5 text-sm font-bold uppercase text-gray-500">
                    Deadline
                  </th>
                  <th className="py-4 px-5 text-sm font-bold uppercase text-gray-500 text-center">
                    Priority
                  </th>
                  <th className="py-4 px-6 text-sm font-bold uppercase text-gray-500">
                    Critical Blocker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-base">
                {filteredTasks.map((task) => {
                  const isCompleted = task.status === 'Completed';
                  const isHigh = task.priority === 'High';
                  const isMedium = task.priority === 'Medium';

                  return (
                    <tr
                      key={task.id}
                      className={`hover:bg-gray-50 transition-colors duration-150 ${
                        isCompleted ? 'bg-gray-50/60 opacity-65' : ''
                      }`}
                    >
                      {/* Checkbox Column */}
                      <td className="py-4 px-5 text-center">
                        <input
                          type="checkbox"
                          checked={isCompleted}
                          onChange={() => toggleTaskStatus(task.id)}
                          className="w-5 h-5 rounded border-gray-300 text-gray-900 focus:ring-gray-900 accent-gray-900 cursor-pointer transition-transform duration-100 hover:scale-110"
                        />
                      </td>

                      {/* Task Code */}
                      <td className="py-4 px-5 font-mono font-bold text-base text-gray-600">
                        {task.id}
                      </td>

                      {/* Description */}
                      <td className="py-4 px-6 font-semibold text-gray-900 text-base md:text-lg">
                        <span className={isCompleted ? 'line-through text-gray-400' : ''}>
                          {task.title}
                        </span>
                      </td>

                      {/* Tower */}
                      <td className="py-4 px-5 text-base font-medium text-gray-800">
                        <span className="inline-block px-3 py-1 rounded-md bg-gray-100 border border-gray-200 text-sm font-semibold">
                          {task.tower}
                        </span>
                      </td>

                      {/* Trade */}
                      <td className="py-4 px-5 text-base font-medium text-gray-600">
                        {task.trade}
                      </td>

                      {/* Assignee */}
                      <td className="py-4 px-5 text-base text-gray-900 font-medium">
                        {task.assignee}
                      </td>

                      {/* Deadline */}
                      <td className="py-4 px-5 text-base font-mono text-gray-500">
                        {task.deadline}
                      </td>

                      {/* Priority Badge */}
                      <td className="py-4 px-5 text-center">
                        <span
                          className={`inline-block px-3.5 py-1 rounded-full text-sm font-semibold ${
                            isHigh
                              ? 'bg-red-50 text-red-700 border border-red-200'
                              : isMedium
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-green-50 text-green-700 border border-green-200'
                          }`}
                        >
                          {task.priority}
                        </span>
                      </td>

                      {/* Critical Blocker with Status Font */}
                      <td className="py-4 px-6 text-base">
                        {task.blocker === 'None' ? (
                          <span className="inline-flex items-center gap-2 text-green-700 font-semibold">
                            <CheckCircle2 size={18} />
                            <span>Clear</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm font-semibold">
                            <AlertCircle size={16} />
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
          <div className="p-5 md:px-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-base text-gray-600">
            <span>
              Showing {filteredTasks.length} of {tasks.length} tasks across Sunrise Residency
            </span>
            <span className="flex items-center gap-2 text-green-700 font-semibold">
              <CheckCircle2 size={18} />
              <span>Primavera WBS Synchronized</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
