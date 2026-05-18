import Image from "next/image";
import React from "react";

const fetchDetails = async (id) => {
  const res = await fetch(`http://localhost:8000/booking/${id}`);
  const data = await res.json();
  return data;
};

const BookDetails = async ({ params }) => {
  const { id } =await params;
  const book = await fetchDetails(id);
  const {
    roomImage,
    roomName,
    roomId,
    pricePerHour,
    booking,
    durationHour,
    totalCost,
    specialNote,
    amenities,
  } = book || {};

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-start">
        <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-xl">
          <Image
            src={roomImage}
            alt={roomName || "Study room image"}
            height={440}
            width={780}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            className="object-cover w-full h-full"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-slate-900">{roomName || "Study Room"}</h1>
            <p className="mt-4 text-slate-600">
              {specialNote || "A premium study room designed for calm concentration and easy booking."}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Room ID</p>
                <p className="mt-3 text-xl font-semibold text-slate-900">{roomId || "N/A"}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Duration</p>
                <p className="mt-3 text-xl font-semibold text-slate-900">{durationHour ? `${durationHour} hr` : "N/A"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-900">Pricing</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Price / hour</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{pricePerHour ? `$${pricePerHour}` : "N/A"}</p>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-fuchsia-500 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-purple-100/80">Total cost</p>
                <p className="mt-3 text-4xl font-black">{totalCost ? `$${totalCost}` : "N/A"}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-900">Amenities</h2>
            {Array.isArray(amenities) && amenities.length > 0 ? (
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {amenities.map((item, index) => (
                  <li
                    key={index}
                    className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 shadow-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-slate-500">No amenities listed for this room.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
