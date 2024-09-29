function About() {
  return (
    <section className="my-12">
      <div className="text-center mb-5 lg:mb-7">
        <h2 className="text-4xl  mb-3  lg:mb-12 ">About us</h2>
        <div className=" mb-3  flex flex-col p-5 lg:items-center lg:mb-12 ">
          <h3 className="text-2xl font-semibold mb-3 lg:mb-5 px-2 lg:text-4xl">
            {/*/ Guiding Teens, Couples, and Individuals on Their Path to Well-being/*/}
            Your Gateway to Global Trade Excellence
          </h3>
          <p className=" text-center  lg:mx-auto lg:w-[77%] lg:text-[18px] lg:px-5">
            Founded to simplify the import and export of goods, G-DAFH & SAEED
            TRADE COMPANY LTD. is dedicated to connecting markets worldwide. We
            work closely with trusted suppliers, globally to ensure that our
            clients receive the highest quality products. Our streamlined
            processes and commitment to integrity make us a trusted partner in
            global trade.
          </p>
        </div>

        <div className="text-center mx-auto flex flex-col items-center justify-center lg:mb-14">
          <div className="mx-5 lg:mb-12">
            <h3 className="text-xl lg:text-3xl mb-5">Our team</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
