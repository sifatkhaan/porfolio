import React from 'react'
import Link from 'next/link';
import Header from '../component/Header';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
   <Header/>
     <p>this is my home pages</p>
    </div>
  )
}
