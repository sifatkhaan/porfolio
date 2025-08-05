import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function Portfolio() {
  return (
    <body className="flex flex-col min-h-screen">
    <div className="flex min-h-screen flex-col bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
      <div>
      <Header/>
      <div
     className="bg-[url('/image/srijon.jpg')] w-full h-[300px] bg-cover bg-center"
     >
    <p className="font-berkshire text-5xl md:text-6xl text-white text-center p-3"> Portfolio</p>
    <div className="grid grid-cols-2 gap-2 w-full h-[80px] my-3 justify-items-center font-berkshire">
    </div>

     </div>
     <section>
     <h1 className="text-center text-6xl font-right p-2">Portfolio</h1>
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
    </body>

  )
}
