import React from 'react';

export default function SubscriptionManagementPage() {
  const clinics = [
    {
      name: 'Green Valley Clinic',
      status: 'Active',
      nextBillingDate: '2025-06-15',
      payments: [
        { date: '2025-05-15', amount: '₹499', method: 'UPI' },
        { date: '2025-04-15', amount: '₹499', method: 'UPI' },
      ],
    },
    {
      name: 'Sunrise Medical',
      status: 'Trial',
      nextBillingDate: '2025-05-30',
      payments: [],
    },
    {
      name: 'Downtown Health Hub',
      status: 'Expired',
      nextBillingDate: '2025-04-01',
      payments: [
        { date: '2025-03-01', amount: '₹499', method: 'Card' },
      ],
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Subscription Management</h1>

      {clinics.map((clinic, index) => (
        <div key={index} className="bg-white shadow rounded-xl p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{clinic.name}</h2>
            <span
              className={`px-3 py-1 text-sm rounded-full font-medium ${
                clinic.status === 'Active'
                  ? 'bg-green-100 text-green-800'
                  : clinic.status === 'Trial'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {clinic.status}
            </span>
          </div>

          <div className="text-sm text-gray-600">
            Next Billing Date: <strong>{clinic.nextBillingDate}</strong>
          </div>

          {/* Payment History */}
          <div>
            <h3 className="text-md font-medium mb-2">Payment History</h3>
            {clinic.payments.length > 0 ? (
              <ul className="space-y-1">
                {clinic.payments.map((payment, idx) => (
                  <li key={idx} className="flex justify-between text-sm">
                    <span>{payment.date}</span>
                    <span>{payment.amount} ({payment.method})</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No payments yet.</p>
            )}
          </div>

          {/* Reminder Button (Mock) */}
          {clinic.status !== 'Active' && (
            <button
              className="mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm hover:bg-blue-200"
              onClick={() => alert(`Reminder sent to ${clinic.name}`)}
            >
              Send Renewal Reminder
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
