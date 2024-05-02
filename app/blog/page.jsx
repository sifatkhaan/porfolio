import React from 'react'
import Link from 'next/link';
import Header from '../component/Header';
export default function Blog() {
  return (
       <div className="flex min-h-screen w-full flex-col bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
  <Header/>
    <div className="w-full h-[300px] bg-cover bg-center" style={{backgroundImage: 'url(/image/sunset.jpg)'}}>
     <p>This is my blog page</p>
   </div>

   </div>
 
  )
}
