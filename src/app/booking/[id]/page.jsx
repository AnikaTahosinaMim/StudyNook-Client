import React from "react";
const fetchDetails=async(id)=>{
    const res = await fetch(`http://localhost:8000/booking/${id}`)
    const data =await res.json()
    return data
}

const BookDetails = async ({params}) => {
    const {id} = await params
    const books = await fetchDetails(id)



  return (
    <div>
      <h2>Details pages</h2>
      <h2>{books.roomName}</h2>
    </div>
  );
};

export default BookDetails;
