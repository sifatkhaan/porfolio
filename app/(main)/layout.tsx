"use client";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function MainLayout({ children }) {
  const [searchTearm, setSearchTerm] = useState("React");
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <Header />
      {children}
      <Footer setSearchTerm={setSearchTerm} />
    </div>
  );
}
