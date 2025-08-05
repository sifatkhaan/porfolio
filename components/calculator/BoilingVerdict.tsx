import React from "react";

export default function BoilingVerdict({ celsius = 0 }) {
  if (celsius >= 100) {
    return <p className="text-green-500 text-xl">The Water would boil</p>;
  }
  return <div className="">The Water would not boil</div>;
}
