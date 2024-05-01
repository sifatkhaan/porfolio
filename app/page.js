import { getURL } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from 'next/link';
import Header from "./component/Header";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col container">
   <Header/>
     <div
     className=" bg-[url('/image/sunset.jpg')] w-full h-[300px] bg-cover bg-center"
     >
    <p className="font-berkshire text-5xl md:text-6xl text-white text-center p-3">Wellcome to My Portfolio</p>
    <div className="grid grid-cols-2 gap-2 w-full h-[80px] m-3 justify-items-center font-berkshire">
    <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] p-1 text-center content-center w-3/4 md:w-1/4 rounded-lg shadow-lg">Are you a connoisseur? Do you like a connoissuer? Wow!! This is for you.. <p>Lets move on..</p>
    </div>
    <div className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] p-1 text-center content-center w-3/4 md:w-1/4 rounded-lg shadow-lg">Hi!! This is Trisha Khalil. You can enjoy it or you can hire my excellency. Here you go...</div>
    </div>

     </div>
     <section>
     <h1 className="text-center text-6xl font-right p-2">About</h1>
        <div>

        </div>
        
     </section>
    </div>
    
    </main>
  );
}
