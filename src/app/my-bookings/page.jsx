import MyBookingsClient from "@/components/MyBookingsClient";
export const metadata = {
  title: "My Bookings | Study Nook",
  description:
    "Check your booked study rooms, manage reservations, and cancel bookings easily in Study Nook.",
  keywords: ["study room booking", "my bookings", "room management"],
};

const MyBookings = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings`, {
    cache: "no-store",
  });

  const bookings = await res.json();

  return <MyBookingsClient bookings={bookings}></MyBookingsClient>;
};

export default MyBookings;
