import React, { useState } from 'react';
import { PROJECT_TASKS } from '../data/projectData';
import { CheckSquare, Filter, Plus, Clock, User, AlertCircle, CheckCircle2 } from 'lucide-react';

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

  const filteredTasks = tasks.filter(t => {
    if (filterTrade === 'All') return true;
    return t.trade.toLowerCase().includes(filterTrade.toLowerCase());
  });

  return (
    <div className="view-container">
      <div className="section-header-wrap" style={{ marginBottom: '24px' }}>
        <div>
          <div className="hero-subtitle">Execution Management</div>
          <h1 className="section-title" style={{ fontSize: '1.75rem' }}>Work Breakdown Structure & Site Tasks</h1>
          <p className="section-caption">
            Contractor assignments, critical path activity timelines, and blocker tracking.
          </p>
        </div>
      </div>

      {/* Trade Filter */}
      <div className="intel-filters-row" style={{ marginBottom: '20px' }}>
        <span className="filter-label">Trade:</span>
        {['All', 'Procurement', 'Materials', 'Civil', 'MEP', 'Fire Safety'].map(trade => (
          <button
            key={trade}
            className={`intel-filter-chip ${filterTrade === trade ? 'active' : ''}`}
            onClick={() => setFilterTrade(trade)}
          >
            {trade}
          </button>
        ))}
      </div>

      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>Done</th>
              <th>Task Code</th>
              <th>Activity Description</th>
              <th>Tower / Zone</th>
              <th>Trade</th>
              <th>Assignee</th>
              <th>Deadline</th>
              <th>Priority</th>
              <th>Critical Blocker</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task) => {
              const isCompleted = task.status === 'Completed';
              return (
                <tr key={task.id} style={{ opacity: isCompleted ? 0.6 : 1 }}>
                  <td>
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => toggleTaskStatus(task.id)}
                      style={{ cursor: 'pointer', accentColor: 'var(--color-primary)' }}
                    />
                  </td>
                  <td className="mono-nums" style={{ fontWeight: 700 }}>{task.id}</td>
                  <td style={{ fontWeight: 600, textDecoration: isCompleted ? 'line-through' : 'none' }}>
                    {task.title}
                  </td>
                  <td>{task.tower}</td>
                  <td>
                    <span style={{ fontSize: '0.74rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                      {task.trade}
                    </span>
                  </td>
                  <td style={{ fontSize: '0.78rem' }}>{task.assignee}</td>
                  <td className="mono-nums" style={{ fontSize: '0.78rem' }}>{task.deadline}</td>
                  <td>
                    <span className={`critical-badge ${task.priority === 'High' ? 'badge-critical' : task.priority === 'Medium' ? 'badge-warning' : 'badge-monitoring'}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td>
                    {task.blocker === 'None' ? (
                      <span style={{ color: 'var(--color-status-success)', fontSize: '0.75rem', fontWeight: 600 }}>
                        Clear
                      </span>
                    ) : (
                      <span style={{ color: 'var(--color-status-critical)', fontSize: '0.75rem', fontWeight: 600 }}>
                        {task.blocker}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
