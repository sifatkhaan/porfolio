import React from 'react'
import Link from 'next/link';
export default function AboutPage() {
  return (
    
   
     <div className="flex min-h-screen flex-col container bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
     <header className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <nav className='flex justify-between items-center mx-auto'>
            <div>
                <img/>
            </div>
            <div>
                <ul className='flex items-center gap-9 font-right'>
                    <li>
                        <Link clasname="hover:text-gray-500" href="/">
                        Home
                        </Link>
                        
                    </li>
                    <li>
                    <Link clasname="hover:text-gray-500" href="/portfolio">
                        Portfolio
                        </Link>
                      
                    </li>
                    <li>
                    <Link clasname="hover:text-gray-500" href="/about">
                        About
                        </Link>
                       
                    </li>
                    <li>
                    <Link clasname="hover:text-gray-500" href="/blog">
                    Blog
                        </Link>
                       
                    </li>
                    <li>
                    <Link clasname="hover:text-gray-500" href="/contact">
                        Contact
                        </Link>
                        
                    </li>
                </ul>
            </div>
            <div className='pr-3 py-2'>
                <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Sign In</button>
            </div>
        </nav>
     </header> 
     <div>
      <p>This is my about page</p>
    </div>

    </div>
  )
}
