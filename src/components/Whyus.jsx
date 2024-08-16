import { FaGlobe, FaSuitcase, FaCircleCheck } from "react-icons/fa6";

const data = [
  {
    icon: <FaGlobe size={55} color="#cf711f" />,
    header: "Global Network",
    text: "With strong connections across key markets, particularly Asia, we ensure access to top-quality products and competitive pricing",
  },
  {
    icon: <FaSuitcase size={55} color="#cf711f" />,
    header: "Expert Team",
    text: "Our team of professionals brings decades of experience in logistics, sourcing, and customs clearance, ensuring a seamless process for our clients",
  },
  {
    icon: <FaCircleCheck size={55} color="#cf711f" />,
    header: "Reliability",
    text: "We pride ourselves on our reliability. From inquiry to delivery, we keep you informed every step of the way, ensuring your goods arrive on time.",
  },
];

function Whyus() {
  return (
    <section className="bg-[#fdf2e9] pt-11">
      <div className=" text-center md:w-11/12 mx-auto  px-5 md:px-10 mb-16 ">
        <h3 className="mb-6 text-3xl md:text-4xl lg:text-[40px] font-semibold">
          Why Choose Us
        </h3>
        <p className="text-[18px] md:text-xl">
          At G-DAFH & SAEED TRADE COMPANY LTD. we are committed to delivering
          exceptional value and service to our clients. Here’s why we stand out
          in the import and export industry
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto  gap-20 pb-32  ">
        {data.map((data) => (
          <div key={data.header} className="flex flex-col items-center">
            <p className="mb-5 flex justify-center">{data.icon}</p>
            <h3 className="mb-3 text-2xl md:text-3xl font-medium">
              {data.header}
            </h3>
            <p className="text-center md:text-xl">{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Whyus;
