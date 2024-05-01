import { getURL } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <div className="flex flex-col container"
//        style={{
//         backgroundImage: `url(/image/sunset.jpg)`
//    }}
>
     <header className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <nav className='flex justify-between items-center mx-auto'>
            <div>
                <img/>
            </div>
            <div>
            <ul className='flex items-center gap-9 font-berkshire'>
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
     <div
     className="bg-[url('/image/sunset.jpg')] w-full h-[300px] bg-cover"
     >
      hello home page
    <p>lorem
        jfjlfjlsajdf jdflkjsfl ksdjlksjf 
        jflkjflksjdf
        sjflsjf
    </p>
    <p>lorem
        jfjlfjlsajdf jdflkjsfl ksdjlksjf 
        jflkjflksjdf
        sjflsjf
    </p>
    <p>lorem
        jfjlfjlsajdf jdflkjsfl ksdjlksjf 
        jflkjflksjdf
        sjflsjf
    </p>
    <p>lorem
        jfjlfjlsajdf jdflkjsfl ksdjlksjf 
        jflkjflksjdf
        sjflsjf
    </p>
    <p>lorem
        jfjlfjlsajdf jdflkjsfl ksdjlksjf 
        jflkjflksjdf
        sjflsjf
    </p>
    <p>lorem
        jfjlfjlsajdf jdflkjsfl ksdjlksjf 
        jflkjflksjdf
        sjflsjf
    </p>
    <p>lorem
        jfjlfjlsajdf jdflkjsfl ksdjlksjf 
        jflkjflksjdf
        sjflsjf
    </p>
     </div>
    </div>
    
    </main>
  );
}
