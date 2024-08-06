import img from "../assets/img1.jpg";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/img3.jpg";

const services = [
  {
    images: img,
    header: "Product Sourcing",
    text: "We leverage our extensive network of trusted suppliers in China to source high-quality products that meet your specific needs. Our team ensures that the products you receive are of the highest standard",
  },
  {
    images: img1,
    header: "Logistics Management",
    text: "Our logistics management services cover the entire transportation process. We coordinate the movement of goods from our suppliers to your desired location, ensuring safe and efficient delivery. ",
  },
  {
    images: img2,
    header: "Customs Clearance",
    text: "Navigating customs regulations can be complex, but we ensure that all documentation is in order and that your shipments comply with international trade regulations, minimizing delays and ensuring a smooth process",
  },
];

function Service() {
  return (
    <section>
      <div>
        <div className="mb-16 w-11/12 mx-auto lg:px-24 lg:mb-14">
          <h3 className="text-[25px] lg:text-4xl font-semibold text-center mb-7">
            Our Services
          </h3>
          <p className="text-center  leading-[1.6] text-[18px] ">
            We offer a comprehensive range of services in the import and export
            of general goods. Our expertise includes sourcing, logistics, and
            customs clearance
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  px-10 gap-10 pb-28">
          {services.map((serv) => (
            <div
              key={serv.header}
              className="grid  gap-3 lg:w-[88%] bg-white mb-10 pb-6 "
            >
              <div>
                <img src={serv.images} className="lg:w-full" />
              </div>
              <div className="px-4">
                <h3 className="text-[20px] lg:text-2xl mb-4">{serv.header}</h3>
                <p className="leading-[1.6]">{serv.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
