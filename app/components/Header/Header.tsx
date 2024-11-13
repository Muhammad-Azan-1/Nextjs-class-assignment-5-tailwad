import { Nunito } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHeart, faSearch, faShoppingCart,faUser  } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


 export const nunito = Nunito({
  weight: [ "400"],
  subsets: ["latin"],
});
const Header = () => {
  return (
    <div className=" h-full w-full  bg-[#A29875]">

            <div className="h-[80px] flex items-center justify-between md:justify-evenly md:items-center">
            
            <div className="w-[150px] flex items-center  ml-3 md:ml-0 md:w-[20%] h-[87.45px]"> 
            <Image
            src="/Images/logo.png"
            alt="Logo"
            width={170}
            height={80}
            ></Image>
            </div>
       
            <div className="w-[55%] hidden  h-[56.24px] md:flex">
                <input className={` ${nunito.className}  w-full h-full rounded-l-[13.83px]  placeholder: pl-6 placeholder: text-[18px] `} type="text" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" />
                <div className="  h-full w-12 bg-white md:flex text-[18.68px] items-center justify-center border-l-[none] rounded-r-[13.83px]">
                <FontAwesomeIcon className=" text-2xl text-black font-[500]  " icon={faSearch} />
                </div>
            </div>
          

            <div className="w-[110px] md:w-[10%] h-[30.08px] flex justify-evenly md:justify-between">

              <div className="inline-block md:hidden">
              <FontAwesomeIcon className="text-3xl  text-white " icon={faBars} />
              </div>

              <div className="hidden md:inline-block">
                <FontAwesomeIcon className="text-3xl text-white "  icon={faHeart} />
                </div>

                <div className="hidden md:inline-block">
                <FontAwesomeIcon className="text-3xl text-white" icon={faShoppingCart} />
                </div>

                <FontAwesomeIcon className="text-3xl text-white" icon={faUser} />
            </div>

            </div>

    </div>
  )
}

export default Header;