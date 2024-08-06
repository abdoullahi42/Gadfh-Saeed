import Heroimg from "../assets/heroimg.jpg";

function Hero() {
  return (
    <section className="grid bg-[#fdf2e9] mb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-11/12 mx-auto lg:py-14  lg:gap-24  ">
        <div className=" px-12 lg:px-0 pt-5 xl:pt-1 mb-10">
          <h1 className="text-[32px]    sm:text-[38px] md:[40px] lg:text-[44px] xl:text-[50px]  lg:leading-[1.1] lg:tracking-[-0.6px] font-bold mb-8 text-[#333]">
            Seamless, fast and reliable global trade at your fingertips
          </h1>
          <p className="mb-8  text-[#555] lg:text-[20px] font-normal  lg:text-start ">
            Whether you're a manufacturer, trader or an organization, we offer a
            seamless global trade solutions. Sourcing Quality Products and
            Service from China
          </p>
          <div className="text-center lg:text-start">
            <button className="bg-[#cf711f] text-white py-4 px-8 rounded-[28px] text-[18px]">
              Get In touch
            </button>
          </div>
        </div>
        <div className="lg:py-8 xl:py-0 w-11/12 mx-auto ">
          <img src={Heroimg} className="rounded-lg " />
        </div>
      </div>
    </section>
  );
}

export default Hero;
