import { Input } from "antd";
import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="p-5 border-slate-900 box-border shadow-lg bg-sky-200">
        <h2 className="text-slate-700 text-xl text-center">Login</h2>
        <div className="p-16 space-y-5">
          <Input placeholder="Enter User Name" />
          <Input placeholder="Enter Password" type="password" />
          <div className="flex justify-center">
            <button className="bg-purple-600 h-8 w-20 rounded-md hover:bg-green-500">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
