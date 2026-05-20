"use client";

import { toast } from "react-toastify";

export default function MyBookingsClient({ bookings }) {
  if (!bookings || bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-2xl font-bold text-purple-600">
          No Bookings Found
        </h2>
        <p className="text-slate-500 mt-2">You haven’t booked any rooms yet.</p>
      </div>
    );
  }
  const handleCancel = async (id) => {
    const confirmDelete = confirm("Are you sure you want to cancel booking?");
    if (!confirmDelete) return;

    const res = await fetch(`http://localhost:8000/my-bookings/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success("Booking cancelled successfully!");
      window.location.reload();
    }
  };

  return (
    <div>
      <h2 className="my-6 font-bold">My Bookings</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-500 text-white">
            <th className="p-3">Room</th>
            <th className="p-3">Date</th>
            <th className="p-3">Start</th>
            <th className="p-3">End</th>
            <th className="p-3">Duration</th>
            <th className="p-3">Total Cost</th>
            <th className="p-3">Cancel</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id} className="border-b">
              <td className="p-3">{booking.roomName}</td>
              <td className="p-3">{booking.bookingDate}</td>
              <td className="p-3">{booking.startTime}</td>
              <td className="p-3">{booking.endTime}</td>
              <td className="p-3">{booking.durationHours} hr</td>
              <td className="p-3">${booking.totalCost}</td>

              <td className="p-3">
                <button
                  onClick={() => handleCancel(booking._id)}
                  className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
