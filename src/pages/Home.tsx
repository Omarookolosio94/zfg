import React from "react";
import { Link } from "react-router-dom";
import meeting from "../img/meeting.jpg";
import meeting2 from "../img/meeting2.jpg";
import stat from "../img/statline.jpg";
import stat2 from "../img/stats.jpg";
import { addMetaData } from "../core/seoHelpers";

const Home = () => {
  const services = [
    {
      name: "Wealth Management",
      description:
        "Our wealth management services help you achieve your financial goals with tailored investment strategies.",
      path: "wealth-management",
    },
    {
      name: "Retirement Planning",
      description:
        "Plan for a secure and comfortable retirement with our expert financial advice and solutions.",
      path: "retirement-planning",
    },
    {
      name: "Small Business Consulting",
      description:
        "Empowering small businesses with expert financial advice and strategies to achieve sustainable growth.",
      path: "small-business-consulting",
    },
  ];

  return (
    <>
      {addMetaData({
        title: "Zorg Financial Group | Trusted Financial Services in Canada",
        description:
          "Zorg Financial Group provides expert financial services including wealth management, retirement planning, insurance solutions, and small business consulting to clients across Canada.",
        keywords:
          "Zorg Financial Group, financial services Canada, wealth management, retirement planning, insurance, small business consulting, trusted financial advisors",
        locale: "en_CA",
        path: "home",
      })}

      <section className="bg-home flex h-screen w-full">
        <div className="flex w-full flex-col justify-center bg-black bg-opacity-70 p-0 text-gray-50 md:w-1/2 md:p-10">
          <div className="mx-auto w-[90%]">
            <h1 className="border-l py-5 pl-5 font-orbitron text-2xl font-extrabold uppercase tracking-wide sm:pl-8 sm:text-3xl">
              Trusted Financial <br /> Services Provider
            </h1>

            <p className="mb-8 mt-5">
              Zorg Financial Group offers expert financial solutions to help you
              achieve your goals. From wealth management to small business
              consulting, we have you covered.
            </p>

            <Link
              to="/services"
              className="hover:bg-dark flex w-full items-center justify-center gap-2 rounded-md bg-[#0fa0cd] px-[26px] py-[10px] font-mont text-[14px] uppercase !opacity-100 transition duration-300 ease-in-out disabled:cursor-not-allowed sm:w-1/3"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-10">
        <div className="mx-auto grid w-[90%] grid-cols-1 gap-16 md:grid-cols-3 md:gap-10">
          {services?.map((service) => (
            <div key={service.name}>
              <h5 className="mb-2 text-lg text-white">{service?.name}</h5>
              <div className="mb-6 h-1 w-12 bg-primary md:mx-0"></div>

              <p className="font-light text-sm text-gray-100">{service?.description}</p>

              <Link
                to={`/services#${service?.path}`}
                className="mt-5 flex items-center text-primary font-ruda text-sm font-light hover:text-dark"
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
              src={stat}
              alt="Financial statistics and insights"
              className="w-[48%] rounded-md object-cover shadow-lg"
            />
            <img
              src={stat2}
              alt="Detailed financial analytics"
              className="w-[48%] rounded-md object-cover shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-primary">
              About Zorg Financial Group
            </h5>

            <p className="font-orbitron text-xl font-extrabold uppercase md:text-2xl">
              Expert Financial Services
            </p>

            <p className="mb-3 mt-8">
              Zorg Financial Group provides tailored financial solutions to
              individuals and businesses, ensuring your success at every stage
              of life.
            </p>

            <p className="mb-8">
              From comprehensive wealth management to insurance solutions, our
              expert team is committed to delivering exceptional service.
              Contact us today to learn more.
            </p>

            <Link
              to="/about"
              className="hover:bg-dark flex w-full items-center justify-center gap-2 rounded-md bg-primary px-[10px] py-[10px] font-mont text-[14px] uppercase text-white !opacity-100 transition duration-300 ease-in-out disabled:cursor-not-allowed sm:w-1/3"
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
              src={meeting}
              alt="Meeting with clients at Zorg Financial Group"
              className="h-full w-full rounded-md object-cover shadow-lg lg:w-[80%]"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-primary">
              Serving Clients Across Canada
            </h5>

            <p className="font-orbitron text-xl font-extrabold uppercase md:text-2xl">
              Strategic Expertise for Your Future
            </p>

            <p className="mb-8 mt-8">
              Zorg Financial Group operates nationwide from Canada, providing
              strategic financial guidance and reliable solutions. Our team is
              dedicated to delivering results for our clients.
            </p>

            <Link
              to="/about"
              className="hover:bg-dark flex w-full items-center justify-center gap-2 rounded-md bg-primary px-[10px] py-[10px] font-mont text-[14px] uppercase text-white !opacity-100 transition duration-300 ease-in-out disabled:cursor-not-allowed sm:w-1/3"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-contact-home flex h-[60vh] w-full justify-end">
        <div className="flex w-full flex-col justify-center bg-black bg-opacity-70 p-0 text-white md:w-1/2 md:p-10">
          <div className="mx-auto w-[90%] text-center md:text-start">
            <h1 className="py-5 font-orbitron text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
              Questions?
            </h1>

            <p className="mb-8 mt-5">
              Have questions regarding our services or need advice? Please
              contact us, and we will be happy to assist you.
            </p>

            <Link
              to="/contacts"
              className="hover:bg-dark inline-block w-full items-center justify-center gap-2 rounded-md bg-primary px-[26px] py-[10px] font-mont text-[14px] uppercase !opacity-100 transition duration-300 ease-in-out disabled:cursor-not-allowed sm:w-2/3 md:flex lg:w-1/3"
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
