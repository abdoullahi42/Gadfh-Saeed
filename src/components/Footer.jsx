import { FaEnvelope, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaHouse, FaPhone } from "react-icons/fa6";

const styles = {
  headers: "text-xl md:text-2xl  mb-4 font-medium",
  links: "md:text-[18px]",
};

function Footer() {
  return (
    <footer className="bg-white py-12">
      <div>
        <div className=" grid grid-cols-1 gap-9 md:grid-cols-2  lg:grid-cols-4 w-11/12 mx-auto lg:gap-9 px-5 pb-9">
          <div className="w-full  ">
            <h3 className="text-xl md:text-2xl  mb-4">G-DAFH & SAEED</h3>
            <p className="md:text-[16px] mb-6 pr-4">
              we are committed to bridging markets and fostering global trade.
            </p>
            <div className="flex gap-4">
              <FaFacebook size={25} />
              <FaLinkedinIn size={25} />
              <FaXTwitter size={25} />
            </div>
          </div>
          <div className="lg:px-8">
            <h3 className={styles.headers}>Company</h3>
            <div className={styles.links}>
              <p className="mb-5">About us</p>
              <p className="mb-5">contact</p>
              <p className="mb-5">project gallery</p>
            </div>
          </div>
          <div>
            <h3 className={styles.headers}>Working hours</h3>
            <div className={styles.links}>
              <p className="mb-5">Mon-Fri: 09am-5pm </p>
              <p className="mb-5">Sat: 10pm-4pm</p>
              <p className="mb-5">Sun: closed</p>
            </div>
          </div>
          <div>
            <h3 className={styles.headers}>Find us</h3>
            <div className="lg:text-[18px]">
              <div className="flex gap-5  mb-4 ">
                <p>
                  <FaHouse size={25} />{" "}
                </p>
                <span>No.974, Gesse street, Mabushi, Abuja</span>
              </div>
              <div className="flex gap-5 mb-4 ">
                <p>
                  <FaEnvelope size={25} />
                </p>
                <span>dafh&Saeed@gmail.com</span>
              </div>
              <p className="flex gap-5 mb-4 ">
                <FaPhone size={25} /> +234 813330665
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
