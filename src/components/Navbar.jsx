import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

let Links = [
  { name: "About", route: "/about" },
  { name: "Service", route: "" },
  { name: "FAQ", route: "" },
  { name: "Contact", route: "/contact" },
];

function Navbar() {
  const [isopen, setIsopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get current scroll position
    setIsScrolled(scrollY > 100); // Set sticky state based on scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  const handleLinkClick = () => {
    setIsopen(false);
  };

  return (
    <nav
      className={`bg-[#fdf2e9]  transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white sticky top-0 z-50 pb-1" : ""
      }`}
    >
      <div
        className={`flex justify-between  lg:gap-0 lg:justify-start  px-4 lg:pl-4 lg:pr-24  py-6 lg:pb-0 lg:pt-5 items-center  ${
          isScrolled ? "lg:pt-0" : ""
        }`}
      >
        <div className="flex gap-1 lg:gap-2 justify-center items-center lg:justify-start  pl-2  lg:w-1/2 ">
          <span className="lg:text-[18px] font-semibold ">G-DAFH & SAEED</span>
        </div>
        <div
          className={`${
            isopen
              ? "fixed inset-0 bg-white h-[100vh] flex flex-col w-[100vw]  py-24 pt-5 "
              : "hidden"
          }  lg:flex  gap-8 lg:gap-20 lg:py-2 transition-all duration-500 ease-in-out   `}
        >
          <ul className="flex flex-col mt-11 lg:flex-row lg:m-0 mx-auto gap-6 text-[18px] font-medium lg:text-xl  lg:gap-8 xl:gap-10  text-[#333] items-center">
            {Links.map((link) => (
              <Link to={link.route} key={link.name}>
                <li className="" onClick={handleLinkClick}>
                  <a href={`#${link.name}`}>{link.name}</a>
                </li>
              </Link>
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
