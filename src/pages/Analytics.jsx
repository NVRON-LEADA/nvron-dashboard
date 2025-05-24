import React from 'react';

export default function AnalyticsPage() {
  const tokenStats = [
    { label: 'Today', count: 120 },
    { label: 'This Week', count: 780 },
    { label: 'This Month', count: 3120 },
  ];

  const waitingTimes = [
    { clinic: 'Sunrise Med', time: '12 mins' },
    { clinic: 'Green Valley', time: '8 mins' },
    { clinic: 'Downtown Hub', time: '15 mins' },
  ];

  const topEntities = [
    { name: 'Dr. Alice Smith', type: 'Doctor', count: 120 },
    { name: 'Green Valley Clinic', type: 'Clinic', count: 98 },
    { name: 'Dr. Rakesh Menon', type: 'Doctor', count: 105 },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Analytics & Reporting</h1>

      {/* Token Stats */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Token Issuance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tokenStats.map((stat, index) => (
            <div key={index} className="bg-blue-100 p-4 rounded-xl shadow text-center">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Average Waiting Times */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Average Waiting Times</h2>
        <ul className="space-y-2">
          {waitingTimes.map((item, index) => (
            <li key={index} className="bg-yellow-100 p-4 rounded-xl shadow flex justify-between">
              <span>{item.clinic}</span>
              <span className="font-semibold">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Most Active */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Most Active Clinics & Doctors</h2>
        <ul className="space-y-2">
          {topEntities.map((item, index) => (
            <li key={index} className="bg-green-100 p-4 rounded-xl shadow flex justify-between items-center">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.type}</p>
              </div>
              <span className="text-lg font-bold">{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
