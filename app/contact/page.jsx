import React from 'react'
import Link from 'next/link';
import Header from '../component/Header';
import Footer from '../component/Footer';
export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <div>
        <Header/>
          <div className="w-full h-[300px] bg-cover bg-center" style={{backgroundImage: 'url(/image/sunset.jpg)'}}>
             <p className="font-berkshire text-5xl md:text-6xl text-center p-3"> This is Contact Page</p>
          </div>
      </div>
        <Footer/>
   </div>
  )
}
