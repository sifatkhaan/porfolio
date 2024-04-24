import React from 'react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col container bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
     <header className='bg-white'>
        <nav className='flex justify-between items-center mx-auto'>
            <div>
                <img/>
            </div>
            <div>
                <ul className='flex items-center gap-9'>
                    <li>
                       <a clasname="hover:text-gray-500"  href="#">Home</a> 
                    </li>
                    <li>
                       <a clasname="hover:text-gray-500"  href="#">Portfolio</a> 
                    </li>
                    <li>
                       <a clasname="hover:text-gray-500"  href="#">About</a> 
                    </li>
                    <li>
                       <a  clasname="hover:text-gray-500" href="#">Contact</a> 
                    </li>
                </ul>
            </div>
            <div className='pr-3 py-2'>
                <button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Sign In</button>
            </div>
        </nav>
     </header>
    </div>
  )
}
