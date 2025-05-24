import React, { useState, useEffect, useMemo } from 'react';

const ClinicPage = () => {
  const [clinics, setClinics] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // TODO: Replace with real API call
  useEffect(() => {
    const mockClinics = [
      { id: 1, name: 'City Health', address: '123 Main St', owner: 'Dr. Smith', status: 'active', location: 'New York' },
      { id: 2, name: 'Sunrise Clinic', address: '45 Pine Ave', owner: 'Dr. Jane', status: 'inactive', location: 'Los Angeles' },
      { id: 3, name: 'Wellness Hub', address: '88 Elm Rd', owner: 'Dr. Lee', status: 'active', location: 'Chicago' },
    ];
    setClinics(mockClinics);
  }, []);

  const filteredClinics = useMemo(() => {
    return clinics.filter((clinic) => {
      const matchesSearch =
        clinic.name.toLowerCase().includes(search.toLowerCase()) ||
        clinic.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' || clinic.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter, clinics]);

  const total = clinics.length;
  const active = clinics.filter((c) => c.status === 'active').length;
  const inactive = total - active;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Clinic Management</h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Clinics</h2>
          <p className="text-2xl">{total}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Active Clinics</h2>
          <p className="text-2xl">{active}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Inactive Clinics</h2>
          <p className="text-2xl">{inactive}</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or location..."
          className="p-2 border rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 ">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Address</th>
              <th className="p-3">Owner</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredClinics.length > 0 ? (
              filteredClinics.map((clinic) => (
                <tr key={clinic.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{clinic.name}</td>
                  <td className="p-3">{clinic.address}</td>
                  <td className="p-3">{clinic.owner}</td>
                  <td className="p-3">{clinic.location}</td>
                  <td className="p-3 capitalize">{clinic.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center" colSpan={5}>
                  No clinics found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClinicPage;


// useEffect(() => {
//   fetch('/api/clinics') // or axios.get('/api/clinics')
//     .then(res => res.json())
//     .then(data => setClinics(data))
//     .catch(err => console.error("Error fetching clinics:", err));
// }, []);
// ✅ Next Step: Real Database Integration
// Replace the mock useEffect with your backend API call:
// Let me know if:

// You want help designing the backend route (GET /api/clinics)

// You’re using Express, Django, or another backend

// You need a modal to edit or delete clinics

// I can continue from there.
// I can continue from there here s.