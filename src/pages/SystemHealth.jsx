import React from 'react';

export default function SystemHealthPage() {
  const serverStatus = {
    mainServer: 'Online',
    backupServer: 'Offline',
  };

  const responseTimes = [
    { service: 'Auth API', time: '180ms' },
    { service: 'Token Issuer', time: '220ms' },
    { service: 'User DB', time: '150ms' },
  ];

  const errorLogs = [
    { time: '2025-05-22 14:01', message: 'TokenService timeout at /issue-token' },
    { time: '2025-05-21 19:44', message: 'Database connection pool exceeded limit' },
    { time: '2025-05-20 09:15', message: 'Unhandled exception in /login' },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">System Health Monitoring</h1>

      {/* Server Status */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Server Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(serverStatus).map(([name, status]) => (
            <div key={name} className="p-4 bg-white rounded-xl shadow flex items-center justify-between">
              <span className="font-semibold">{name}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  status === 'Online'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Response Times */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Service Response Times</h2>
        <ul className="space-y-2">
          {responseTimes.map((entry, idx) => (
            <li
              key={idx}
              className="bg-blue-100 p-4 rounded-xl shadow flex justify-between"
            >
              <span>{entry.service}</span>
              <span className="font-semibold">{entry.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Error Logs */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Error Logs</h2>
        <ul className="space-y-2">
          {errorLogs.map((log, idx) => (
            <li
              key={idx}
              className="bg-red-100 p-4 rounded-xl shadow text-sm text-red-800"
            >
              <div className="font-mono text-gray-800">{log.time}</div>
              <div>{log.message}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
