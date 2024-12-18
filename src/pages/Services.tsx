import React, { useEffect } from "react";
import financialServices from "../img/planning.jpg";
import wealthManagement from "../img/homeinsurance.jpg";
import businessSolutions from "../img/stats3.jpg";
import { Link, useLocation } from "react-router-dom";
import { addMetaData } from "../core/seoHelpers";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      {addMetaData({
        title: "Services | Zorg Financial Group - Expert Financial Solutions",
        description:
          "Explore Zorg Financial Group's tailored financial solutions, including wealth management, corporate finance, and business advisory services to help you achieve your financial goals.",
        keywords:
          "Zorg Financial Group services, wealth management, corporate finance, financial advisory",
        path: "services",
        locale: "en_CA",
      })}

      <section className="bg-home flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-xl uppercase md:text-2xl">Our Services</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-[90%] items-center justify-center py-40">
          <div className="w-full text-center lg:w-1/2">
            <h1 className="mb-3 uppercase text-primary">
              Trusted Financial Partners Since 2010
            </h1>
            <h5 className="mb-10 text-2xl font-bold text-black">
              About Zorg Financial Group
            </h5>
            <p id="financial-advisory">
              Zorg Financial Group is committed to empowering individuals and
              businesses with expert financial solutions. With over a decade of
              experience, we offer personalized services that drive growth,
              security, and success across diverse financial landscapes.
            </p>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-blue-50 lg:h-[70vh]">
        <div className="flex h-full flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex h-[40vh] w-full items-center justify-center gap-5 lg:h-full lg:w-1/3">
            <img
              src={financialServices}
              alt="Financial Advisory"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:p-8">
            <div className="mx-auto w-[90%]">
              <h5 className="mb-3 text-lg font-extrabold uppercase text-primary">
                Financial Advisory
              </h5>

              <p className="mb-8 mt-8">
                Our Financial Advisory Services are designed to help you
                navigate complex financial decisions with confidence. Whether
                you're planning for retirement, managing investments, or
                exploring business opportunities, we provide the expertise to
                guide you.
              </p>

              <div className="mb-6">
                <p className="font-bold text-black">
                  Why Choose Our Advisory Services?
                </p>
                <ul className="mt-2 list-inside list-disc">
                  <li>
                    Comprehensive financial planning tailored to your goals.
                  </li>
                  <li>Expert investment management strategies.</li>
                  <li>Risk assessment to protect your assets.</li>
                </ul>
              </div>

              <p className="mb-8" id="wealth-management">
                Partner with Zorg Financial Group to achieve financial clarity
                and long-term security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center lg:h-[70vh]">
        <div className="flex h-full flex-col items-center justify-between gap-10 lg:flex-row-reverse">
          <div className="flex h-[40vh] w-full items-center justify-center gap-5 lg:h-full lg:w-1/3">
            <img
              src={wealthManagement}
              alt="Wealth Management"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:p-8">
            <div className="mx-auto w-[90%]">
              <h5 className="mb-3 text-lg font-extrabold uppercase text-primary">
                Wealth Management
              </h5>

              <p className="mb-8 mt-8">
                Zorg Financial Group offers comprehensive wealth management
                services to secure and grow your assets. From portfolio
                diversification to estate planning, our solutions are tailored
                to high-net-worth individuals and businesses.
              </p>

              <div className="mb-6">
                <p className="font-bold text-black">
                  Why Choose Zorg Wealth Management?
                </p>
                <ul className="mt-2 list-inside list-disc">
                  <li>Personalized investment strategies.</li>
                  <li>
                    Access to exclusive financial products and opportunities.
                  </li>
                  <li>Holistic wealth protection and tax optimization.</li>
                </ul>
              </div>

              <p className="mb-8" id="business-solutions">
                Secure your financial future with tailored wealth management
                solutions from Zorg Financial Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-blue-50 lg:h-[70vh]">
        <div className="flex h-full flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex h-[40vh] w-full items-center justify-center gap-5 lg:h-full lg:w-1/3">
            <img
              src={businessSolutions}
              alt="Business Solutions"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:p-8">
            <div className="mx-auto w-[90%]">
              <h5 className="mb-3 text-lg font-extrabold uppercase text-primary">
                Business Solutions
              </h5>

              <p className="mb-8 mt-8">
                We empower businesses with innovative financial solutions,
                including corporate finance, business loans, and operational
                advisory services. Let us help your business thrive in a
                competitive market.
              </p>

              <div className="mb-6">
                <p className="font-bold text-black">Why Choose Zorg?</p>
                <ul className="mt-2 list-inside list-disc">
                  <li>Flexible financing options to fit your needs.</li>
                  <li>Strategic guidance for sustainable growth.</li>
                  <li>Reliable partnerships for long-term success.</li>
                </ul>
              </div>

              <p className="mb-8">
                Partner with us for customized business solutions that drive
                efficiency and profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-home flex h-[60vh] w-full justify-end">
        <div className="flex w-full flex-col justify-center bg-black bg-opacity-70 p-0 text-white md:w-1/2 md:p-10">
          <div className="mx-auto w-[90%] text-center md:text-start">
            <h1 className="py-5 font-orbitron text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
              Have Questions?
            </h1>

            <p className="mb-8 mt-5">
              Reach out to Zorg Financial Group for expert advice on our
              services. We're here to help you achieve your financial goals.
            </p>

            <Link
              to="/contacts"
              className="inline-block w-full items-center justify-center gap-2 bg-primary px-[26px] py-[10px] font-mont text-[14px] uppercase !opacity-100 transition duration-300 ease-in-out hover:bg-dark rounded-md disabled:cursor-not-allowed sm:w-2/3 md:flex lg:w-1/3"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
