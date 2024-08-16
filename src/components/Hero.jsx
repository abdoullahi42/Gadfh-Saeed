/* eslint-disable react/no-unescaped-entities */
import Heroimg from "../assets/heroimg.jpg";

function Hero() {
  return (
    <section className="grid bg-[#fdf2e9] mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2  md:w-11/12 mx-auto lg:py-14  lg:gap-20 xl:gap-24  pb-5">
        <div className=" text-center lg:text-start pt-5 xl:pt-1 mb-10 px-1">
          <h1 className="text3xl text-4xl  lg:text-[40px] lg:leading-[1.2]  xl:text-5xl  xl:leading-[1.1] lg:tracking-[-0.5px] font-semibold mb-5 xl:mb-8 text-[#333]">
            Simple, quick and reliable global trade at your fingertips
          </h1>
          <p className="mb-8  text-[#555] text-[18px] lg:text-[20px] ">
            Whether you're a manufacturer, trader or an organization, we offer a
            seamless global trade solutions. Sourcing Quality Products and
            Service across the globe
          </p>
          <div className="">
            <button className="bg-[#cf711f] text-white py-4 px-8 rounded-[18px] text-[18px]">
              Get In touch
            </button>
          </div>
        </div>
        <div className="lg:py-8 xl:py-0 w-11/12 mx-auto lg:w-auto ">
          <img src={Heroimg} className="rounded-lg " />
        </div>
      </div>
    </section>
  );
}

export default Hero;
