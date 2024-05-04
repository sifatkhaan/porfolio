import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import Header from '../component/Header';
import Footer from '../component/Footer';
export default function Blog() {
  return (
       <div className="flex min-h-screen w-full flex-col bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
        <div>
        <Header/>
    <div className="w-full h-[300px] bg-cover bg-center" style={{backgroundImage: 'url(/image/sunset.jpg)'}}>
    <p className="font-berkshire text-5xl md:text-6xl text-center p-3"> This is Blog Page</p>
   </div>
   <section>
     <h1 className="text-center text-6xl font-right p-2">Blog</h1>
        <div className="flex">
        <div className="flex items-center justify-center w-1/2">
            <p className="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="flex items-center justify-center p-3 w-1/2">
            <Image src="/image/myphoto.jpg" alt="Example" width={400} height={200} />
        </div>
        </div>

     </section>
        </div>
    <Footer/>

   </div>
 
  )
}
