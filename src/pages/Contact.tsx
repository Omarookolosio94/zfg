import React from "react";
import silos2 from "../img/hero1.jpg";

const Contact = () => {
  return (
    <>
      <section className="bg-home flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-3xl uppercase">Contact</h1>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-white lg:h-[70vh]">
        <div className="mx-auto flex h-full w-[90%] flex-col-reverse items-center justify-between gap-5 py-20 lg:flex-row-reverse lg:py-0">
          <div className="flex h-[40vh] w-full items-center justify-center gap-5 lg:h-[45vh] lg:w-1/2">
            <img
              src={silos2}
              alt="Chemical Storage"
              className="h-full w-full object-cover shadow-lg lg:w-[80%]"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-blue-800">
              Questions, Looking to order?
            </h5>

            <p className="font-orbitron text-xl font-extrabold uppercase md:text-3xl">
              Send Us a Message
            </p>

            <p className="mb-8 mt-8">
              StreamFlo is conveniently located in Lagos, Nigeria, the bustling
              commercial capital of the country. Our modern facility is designed
              to meet the needs of our customers with efficiency and precision.
              We offer reliable delivery services across Lagos, nationwide, and
              internationally, giving you peace of mind knowing your products
              will reach you on time.
            </p>

            <div className="">
              <div className="space-y-3">
                <a
                  href="tel:+2341234567890"
                  className="flex items-center space-x-2 hover:text-blue-800"
                >
                  <span className="iconify text-blue-800 font-semibold mdi--phone"></span>
                  <span>+234-123-456-7890</span>
                </a>
                <a
                  href="mailto:info@streamflo.ng"
                  className="flex items-center space-x-2 hover:text-blue-800"
                >
                  <span className="iconify text-blue-800 font-semibold mdi--email"></span>
                  <span>info@streamflo.ng</span>
                </a>
                <a
                  href="https://www.google.com/maps?q=StreamFlo+Nigeria,+Lagos,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-blue-800"
                >
                  <span className="iconify text-blue-800 font-semibold mdi--location"></span>
                  <span>StreamFlo Nigeria, Lagos, Nigeria</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
