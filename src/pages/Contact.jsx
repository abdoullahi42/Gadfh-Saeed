const styles = {
  inpuutexbox:
    "rounded-[5px] p-2 border border-solid border-gray-600 md:w-2/3 resize-none mb-3 outline-none placeholder-black h-14 ",
};

function Contact() {
  return (
    <section className="bg-[#fffcf6]">
      <div className="w-full py-16 pb-8">
        <div>
          <h3 className="text-4xl mb-3 lg:mb-8 text-center">Contact US</h3>
          <p className="text-center  md:w-2/3 mx-auto text-[18px] leading-[1.6] mb-24 md:mb-32">
            Use this form to reach out to our Customer Success Team regarding
            any questions, concerns, or feedback. You can also view our FAQ for
            quick answers to commonly asked questions.
          </p>
          <div className="w-11/12 mx-auto grid  md:grid-cols-2 lg:grid-cols-3  xl:px-11  ">
            <div className="col-span-2  ">
              <form className="grid grid-cols-1 mb-10">
                <input
                  type="text"
                  className="rounded-[5px] h-14 p-2 border border-solid border-gray-600 md:w-2/3 placeholder-black mb-3 outline-none"
                  placeholder="Name"
                />

                <input
                  type="email"
                  className={styles.inpuutexbox}
                  placeholder="Email"
                />
                <textarea
                  className={`${styles.inpuutexbox} h-36 mb-7 `}
                  placeholder="Message"
                />
                <div className="text-center w-full">
                  <button className="rounded-[28px] text-[18px] py-2 px-4 bg-[#62350F] text-white  w-1/2 md:w-1/5">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className=" bg-[#fdf2e9] h-fit  max-w-fit py-4 my-10 lg:ml-[72px] xl:ml-auto">
              <div className="  px-3  py-3 leading-[1.6]">
                <p>Renewed-You</p>
                <p>No.974,Gesse street </p>
                <p className="mb-4">Mabushi, Abuja</p>
                <p className="underline text-[#35926a]">dafh&Saeed@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
