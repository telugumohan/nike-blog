import React from "react";
import { star } from "../assets/icons";

const CustomerReview = ({ review }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 max-w-sm">
      <img
        src={review.imgURL}
        alt="customer img"
        width={120}
        height={120}
        className="rounded-full"
      />
      <p className="info-text text-center mt-4">{review.feedback}</p>
      <div className="flex gap-2 mt-4">
        <img src={star} alt="star icon" width={24} height={24} />
        <p className="text-xl text-slate-gray font-montserrat">(4.5)</p>
      </div>
      <p className="text-3xl font-bold font-palanquin mt-2 text-center">{review.customerName}</p>
    </div>
  );
};

export default CustomerReview;
