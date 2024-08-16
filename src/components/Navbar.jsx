import { useState } from "react";
import { FaBars, FaSeedling } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
function Navbar() {
  const [isopen, setIsopen] = useState(false);
  let Links = [
    { name: "About" },
    { name: "Service" },
    { name: "FAQ" },
    { name: "Contact" },
  ];
  return (
    <nav className="bg-[#fdf2e9]">
      <div className="flex justify-between  lg:gap-0 lg:justify-start  px-4 lg:pl-4 lg:pr-24  py-10 lg:pb-0 lg:pt-5 items-center   ">
        <div className="flex gap-1 lg:gap-2 justify-center items-center lg:justify-start  pl-2  lg:w-1/2 ">
          <span>
            <FaSeedling color="#0C4607" size={25} />
          </span>
          <span className="lg:text-[18px] font-semibold ">G-DAFH & SAEED</span>
        </div>
        <div
          className={`${
            isopen
              ? "fixed inset-0 bg-white h-[100vh] flex flex-col w-[90vw]  py-24 pt-5 "
              : "hidden"
          }  lg:flex  gap-8 lg:gap-20 lg:py-2 transition-all duration-500 ease-in-out   `}
        >
          <ul className="flex flex-col mt-11 lg:flex-row lg:m-0 mx-auto gap-6 text-[18px] font-medium lg:text-xl  lg:gap-8 xl:gap-10  text-[#333] items-center">
            {Links.map((link) => (
              <li key={link.name} className="">
                <a href={`#${link.name}`}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className=" flex flex-col  lg:flex-row mx-auto lg:mx-0 gap-8  w-fit lg:w-full py-1 flex-shrink-0 pr-1 ">
            <button className="bg-[#cf711f] text-white rounded-[20px] px-4 py-2">
              Request a call
            </button>
          </div>
        </div>
        <div onClick={() => setIsopen(!isopen)} className="">
          {isopen ? (
            <FaXmark
              size={32}
              color=""
              className="lg:hidden absolute top-0 right-[8%]"
            />
          ) : (
            <FaBars size={30} className="lg:hidden" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
