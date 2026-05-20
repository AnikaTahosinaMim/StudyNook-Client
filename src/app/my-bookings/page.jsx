import MyBookingsClient from "@/components/MyBookingsClient";

const MyBookings = async () => {
  const res = await fetch("http://localhost:8000/my-bookings", {
    cache: "no-store",
  });

  const bookings = await res.json();

  return <MyBookingsClient bookings={bookings}></MyBookingsClient>;
};

export default MyBookings;