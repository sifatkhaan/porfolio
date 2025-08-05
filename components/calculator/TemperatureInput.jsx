import { Input } from "antd";
import React from "react";

const scaleName = {
    c:'celsius',
    f:'fahrenheit',
}

export default function TemperatureInput({temparature, scale, onTemparatueChange}) {
  return (
    <div>
      <fieldset className="w-[20%]">
        <legend>Enter Temparatue in {scaleName[scale]}</legend>
        <Input type="text" placeholder="Enter temparature" onChange={(e)=>onTemparatueChange(e, scale)} value={temparature}/>
      </fieldset>
    </div>
  );
}
