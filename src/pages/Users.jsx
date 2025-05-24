import React, { useEffect, useState } from 'react';

// Toggle this to false when your backend is ready
const USE_MOCK_DATA = true;

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users (mock or real)
  useEffect(() => {
    const fetchUsers = async () => {
      if (USE_MOCK_DATA) {
        setTimeout(() => {
          setUsers([
            {
              id: 1,
              name: "Dr. Alice Smith",
              role: "Doctor",
              lastLogin: "2025-05-22 10:23 AM",
              activity: "Reviewed 12 patient records",
              status: "Active",
            },
            {
              id: 2,
              name: "John Doe",
              role: "Receptionist",
              lastLogin: "2025-05-21 3:15 PM",
              activity: "Scheduled 5 appointments",
              status: "Active",
            },
            {
              id: 3,
              name: "Maya Patel",
              role: "Clinic Admin",
              lastLogin: "2025-05-20 9:05 AM",
              activity: "Updated clinic info",
              status: "Blocked",
            },
          ]);
          setLoading(false);
        }, 1000);
      } else {
        try {
          const res = await fetch('/api/users');
          const data = await res.json();
          setUsers(data);
        } catch (error) {
          console.error("Failed to fetch users:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUsers();
  }, []);

  const updateUserStatus = async (id, newStatus) => {
    if (!USE_MOCK_DATA) {
      try {
        await fetch(`/api/users/${id}/status`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus }),
        });
      } catch (error) {
        console.error("Error updating status:", error);
      }
    }

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: newStatus } : user
      )
    );
  };

  const removeUser = async (id) => {
    if (!USE_MOCK_DATA) {
      try {
        await fetch(`/api/users/${id}`, {
          method: 'DELETE',
        });
      } catch (error) {
        console.error("Error removing user:", error);
      }
    }

    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      {loading ? (
        <p className="text-gray-500">Loading users...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Last Login</th>
                <th className="px-4 py-2 text-left">Activity</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No users available.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.role}</td>
                    <td className="px-4 py-2">{user.lastLogin}</td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {user.activity}
                    </td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : user.status === "Blocked"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => updateUserStatus(user.id, "Blocked")}
                        className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs hover:bg-yellow-200"
                      >
                        Block
                      </button>
                      <button
                        onClick={() => updateUserStatus(user.id, "Deactivated")}
                        className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs hover:bg-orange-200"
                      >
                        Deactivate
                      </button>
                      <button
                        onClick={() => removeUser(user.id)}
                        className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs hover:bg-red-200"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}


// ✅ Next Steps:
// Working with Mock Data? Keep USE_MOCK_DATA = true.

// Ready to connect backend? Switch to USE_MOCK_DATA = false.

// Backend Needed? Make sure you have routes like:

// GET /api/users

// PUT /api/users/:id/status

// DELETE /api/users/:id

// Let me know if you want me to generate that backend API as well.