
import { Nunito } from "next/font/google";
  const nunito = Nunito({
  weight: [ "500" , '700'],
  subsets: ["latin"],
});

import Image from 'next/image'

export default function Home() {
  return (
   <>
 <div className="w-full h-sreen md:h-[825px]">
  <div className=" h-[100%] w-[100%] md:h-[800px] flex flex-col md:flex-row justify-evenly items-center">

    <div className="h-[520px] w-[100%] md:w-auto items-center  px-2 md:px-0 flex flex-col justify-evenly md:items-start">
<h1 className={`${nunito.className}  text-center md:text-start font-[700] text-[30px] md:text-[30px] leading[62.24px]`}>IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE</h1>
<p className="font-[500] text-[20px] text-center md:text-start md:text-[22px] leading-[48px] text-[#A29875]">An example of intricate workmanship and detail, elegant <br /> necklaces and long and short chains form a part of our <br /> desirable collection.</p>
<button className="rounded-[8.6px]  p-[8px] w-[200px] h-[49px] bg-[#A29875] text-white text-[20px] leading-[32.25px]">Explore Now</button>
</div>

<div className="relative flex justify-center w-[90%] md:inline-block md:w-auto">
  <div className="w-[90%] md:w-auto px-2 md:px-0">
  <Image
  src={'/Images/hero.svg'}
  alt="main Image"
  width={421.38}
  height={573.59}
  className="w-[100%] md:w-auto"
  ></Image>
  </div>
   <div className="  w-[75%]  absolute top-[25px] md:w-[380.1px] md:bottom-[22px] md:left-[18px]">
      <Image
        src={'/Images/wrapper.png'}
        alt="main Image"
        width={380.1}
        height={525.43}
         className="w-full"
      ></Image>
    </div>
</div>
</div>
 </div>
   </>
  );
}


// w-[380.1px] h-[525.43] flex justify-center items-center