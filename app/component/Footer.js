"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import {Button, Input} from 'antd';
import Image from "next/image";

export default function Footer({setSearchTerm}) {
  return (

       <footer className='mt-auto'>
        <div className="grid grid-cols-3 text-white bg-slate-800 w-full h-[100px] p-3">
            <div className="grid grid-cols-2 ">
                <div className="grid justify-center text-white">
                    <p> <Link clasname="hover:text-gray-500" href="/portfolio">
                        Portfolio
                    </Link></p>
                    <p> <Link clasname="hover:text-gray-500" href="/about">
                        About
                    </Link></p>
                    <p> <Link clasname="hover:text-gray-500" href="/blog">
                        Blog
                    </Link></p>
                   
                </div>
                
                <div className="flex w-full text-white ">
                    <div className="bg-white w-[3px] h-[80px]"></div>
                <div className="grid w-full justify-center">
                <p><Link clasname="hover:text-gray-500" href="/contact">
                        Contact
                    </Link>
                    </p>
                </div>
                </div>
            </div>
            <div className="flex justify-center">
               <Input className="w-2/3 h-[40px]" onChange={(e)=> setSearchTerm(e.target.value)} type="text" placeholder="Enter email..."/>
               <Button className="text-white bg-blue-500 border-none mx-1 h-[40px]">Go</Button>
            </div>
            <div>
                <span>
                    <Link href="https://www.facebook.com/sifat.hossain.927">
                        <Image src="/logo/fblogo.png" alt='example' width={40} height={40}/>
                    </Link>
                </span>
            </div>
        </div>
     </footer>

  )
}
