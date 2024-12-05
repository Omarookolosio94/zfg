import React from "react";
import { Link } from "react-router-dom";
import barrels from "../img/warehouse.jpg";
import silos from "../img/Chemical-Silos.jpg";
import siols2 from "../img/hero1.jpg";

const Home = () => {
  const services = [
    {
      name: "Custom Blending",
      description:
        "We provide flexible blending capabilities from quart-sized to bulk loads are available.",
    },
    {
      name: "Private Label Packaging",
      description:
        "Packaging options available. We can package your product with our labels and your logo or your own labels.",
    },
    {
      name: "Bulk Options",
      description:
        "We are capable of  providing small bulk as well as large bulk orders as necessary.",
    },
  ];

  return (
    <>
      <section className="bg-home flex h-screen w-full">
        <div className="flex w-full flex-col justify-center bg-blue-600 bg-opacity-80 p-0 text-white md:w-1/2 md:p-10">
          <div className="mx-auto w-[90%]">
            <h1 className="border-l py-5 pl-5 font-orbitron text-3xl font-extrabold uppercase tracking-wide sm:pl-8 sm:text-4xl">
              Industrial <br /> Chemical <br /> Distributor
            </h1>

            <p className="mb-8 mt-5">
              The one-stop-shop for Industrial chemicals. Providing a wide range
              of chemicals from liquid to dry, solvents, acids, alcohols, esters
              or hydrocarbons, we've got you covered.
            </p>

            <Link
              to="/products"
              className="flex w-full items-center justify-center gap-2 border border-secondary bg-secondary px-[26px] py-[10px] font-mont text-[14px] uppercase !opacity-100 transition duration-300 ease-in-out hover:bg-blue-800 disabled:cursor-not-allowed sm:w-1/3"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-10">
        <div className="mx-auto grid w-[90%] grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
          {services?.map((service) => (
            <div key={service.name}>
              <h5 className="mb-2 text-lg text-white">{service?.name}</h5>
              <div className="mb-6 h-1 w-12 bg-blue-800 md:mx-0"></div>

              <p className="font-light text-gray-100">{service?.description}</p>

              <Link
                to="/services"
                className="mt-5 flex items-center font-ruda uppercase hover:text-blue-800"
              >
                Learn More
                <span className="iconify h-3 mdi--greater-than"></span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-white lg:h-[70vh]">
        <div className="mx-auto flex h-full w-[90%] flex-col items-center justify-between gap-5 py-20 lg:flex-row lg:py-0">
          <div className="flex h-[30vh] w-full gap-5 lg:h-[45vh] lg:w-1/2">
            <img
              src={barrels}
              alt="Chemical Storage"
              className="w-[48%] object-cover shadow-lg"
            />
            <img
              src={silos}
              alt="Chemical Tanks"
              className="w-[48%] object-cover shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-blue-800">
              About StreamFlo Chemical
            </h5>

            <p className="font-orbitron text-xl font-extrabold uppercase md:text-3xl">
              Top Notch Chemical Provider
            </p>

            <p className="mb-3 mt-8">
              The one-stop-shop for Industrial chemicals. Providing a wide range
              of chemicals from liquid to dry, solvents, acids, alcohols, esters
              or hydrocarbons, we&apos;ve got you covered.
            </p>

            <p className="mb-8">
              At StreamsFlo, we are committed to providing top-quality products
              and exceptional services that meet our customers' unique needs.
              Contact us today to learn more about how we can help service your
              chemical requirements.
            </p>

            <Link
              to="/about"
              className="flex w-full items-center justify-center gap-2 border border-secondary bg-secondary px-[10px] py-[10px] font-mont text-[14px] uppercase text-white !opacity-100 transition duration-300 ease-in-out hover:bg-blue-800 disabled:cursor-not-allowed sm:w-1/3"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-white lg:h-[70vh]">
        <div className="mx-auto flex h-full w-[90%] flex-col items-center justify-between gap-5 py-20 lg:flex-row-reverse lg:py-0">
          <div className="flex h-[40vh] w-full items-center justify-center gap-5 lg:h-[45vh] lg:w-1/2">
            <img
              src={siols2}
              alt="Chemical Storage"
              className="h-full w-full object-cover shadow-lg lg:w-[80%]"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-blue-800">
              Serving customers worldwide
            </h5>

            <p className="font-orbitron text-xl font-extrabold uppercase md:text-3xl">
              Strategically located in Lagos,Nigeria
            </p>

            <p className="mb-8 mt-8">
              StreamFlo is conveniently located in Lagos, Nigeria, the bustling
              commercial capital of the country. Our modern facility is designed
              to meet the needs of our customers with efficiency and precision.
              We offer reliable delivery services across Lagos, nationwide, and
              internationally, giving you peace of mind knowing your products
              will reach you on time.
            </p>

            <Link
              to="/about"
              className="flex w-full items-center justify-center gap-2 border border-secondary bg-secondary px-[10px] py-[10px] font-mont text-[14px] uppercase text-white !opacity-100 transition duration-300 ease-in-out hover:bg-blue-800 disabled:cursor-not-allowed sm:w-1/3"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-hero flex h-[60vh] w-full justify-end">
        <div className="flex w-full flex-col justify-center bg-blue-600 bg-opacity-80 p-0 text-white md:w-1/2 md:p-10">
          <div className="mx-auto w-[90%] text-center md:text-start">
            <h1 className="py-5 font-orbitron text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
              Questions?
            </h1>

            <p className="mb-8 mt-5">
              Have questions regarding our products or services? Please contact
              us and we will be happy to assist you.
            </p>

            <Link
              to="/contact"
              className="inline-block md:flex w-full items-center justify-center gap-2 border border-secondary bg-secondary px-[26px] py-[10px] font-mont text-[14px] uppercase !opacity-100 transition duration-300 ease-in-out hover:bg-blue-800 disabled:cursor-not-allowed sm:w-2/3 lg:w-1/3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
