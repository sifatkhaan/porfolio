"use client";
import React, { useState } from "react";
import TemperatureInput from "../../components/calculator/TemperatureInput";
import { convertor, toCelsius, toFahrenheit } from "../../lib/Convertor";
import BoilingVerdict from "../../components/calculator/BoilingVerdict";

export default function Calculator() {
  const [temparature, setTemparature] = useState("");
  const [scale, setScale] = useState("");
  const handleChange = (e, scale) => {
    setTemparature(e.target.value);
    setScale(scale);
  };

  const celsius = scale === 'f' ? convertor(temparature, toCelsius) : temparature;
  const fahrenheit = scale === 'c' ? convertor(temparature, toFahrenheit) : temparature;
  return (
    <div className="bg-white min-h-screen  text-black p-10 block">
      <TemperatureInput scale="c" onTemparatueChange={handleChange} temparature={celsius}/>
      <TemperatureInput scale="f" onTemparatueChange={handleChange} temparature={fahrenheit}/>
     <div className="py-5">
     <BoilingVerdict celsius={parseFloat(temparature)}/>
     </div>
    </div>
  );
}
