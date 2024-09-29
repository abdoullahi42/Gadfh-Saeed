import calling from "../assets/Calling-amico.png";
import Logistic from "../assets/Logistics-amico.png";
import delivery from "../assets/Delivery address-amico.png";

const stepsData = [
  {
    header: "Get in Touch",
    text: "Reach out to us with your specific requirements. You can contact us via phone, email, or our website's contact form. We'll respond promptly to discuss your needs and provide initial guidance.",
    images: calling,
  },
  {
    header: "We Handle the Details",
    text: "Once we understand your requirements, our team will take care of the entire process. We will source high-quality products from our trusted suppliers in China, manage the logistics, and ensure all customs clearance procedures are smoothly handled",
    images: Logistic,
  },
  {
    header: "Receive Your Goods",
    text: "Sit back and relax while we ensure that your goods are delivered to your specified location. We keep you informed throughout the process, so you always know the status of your shipment.",
    images: delivery,
  },
];

function HowItWorks() {
  return (
    <section className=" py-5 mb-12 md:mb-16 lg:mb-24 ">
      <div className="">
        <div className="w-11/12 mx-auto mb-10">
          <h3 className="text-[28px] md:text-3xl lg:text-4xl font-semibold ">
            From inquiry to Delivery, we handle it all
          </h3>
        </div>
        {stepsData.map((steps, index) => (
          <div
            key={steps.header}
            className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-10 lg:items-center md:gap-28 mb-20 md:mb-12 lg:mb-11  "
          >
            <div className={`${index % 2 === 0 && "md:order-2"}  md:w-10/12  `}>
              <img src={steps.images} alt={steps.images} className="" />
            </div>
            <div className={`${index % 2 === 0 && "md:order-1"}`}>
              <h3 className="text-[25px] lg:text-4xl mb-6 font-medium">
                {steps.header}
              </h3>
              <p className="leading-[1.6] text-[18px]">{steps.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
