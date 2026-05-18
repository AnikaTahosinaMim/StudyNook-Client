import BookCard from "@/components/BookCard";
import React from "react";

const BookingPages = async () => {
  const res = await fetch("http://localhost:8000/booking");
  const nooks = await res.json();
  console.log(nooks);
  

  return (
    <div>
      <h2>Booking</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {nooks.map((nook) => (
          <BookCard key={nook._id} nook={nook}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BookingPages;
