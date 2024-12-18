import React from "react";
import { Link } from "react-router-dom";
import { addMetaData } from "../core/seoHelpers";

const About = () => {
  return (
    <>
      {addMetaData({
        title: "About Us | Zorg Financial Group - Empowering Financial Growth",
        description:
          "Learn about Zorg Financial Group's journey as a leading provider of financial solutions. Discover our commitment to innovation, reliability, and customer success in transforming lives and businesses.",
        keywords:
          "Zorg Financial Group, financial experts, trusted financial solutions, empowering growth, about us",
        locale: "en_CA",
        path: "about",
      })}

      <section className="bg-about flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-xl uppercase md:text-2xl">About</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-[90%] items-center justify-start py-40">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-3 uppercase text-primary">
              Empowering Financial Growth Since 2010
            </h1>
            <h5 className="mb-10 text-2xl font-bold text-black">
              About Zorg Financial Group
            </h5>
            <p className="mb-5">
              Established in 2010, Zorg Financial Group has become a trusted
              leader in delivering innovative financial solutions tailored to
              meet the needs of individuals, businesses, and organizations.
              Headquartered in Lagos, Nigeria, our mission is to empower growth
              through exceptional financial services.
            </p>

            <div>
              <p>
                Zorg Financial Group offers a comprehensive range of financial
                services, including:
              </p>

              <ul className="mt-3 list-inside list-disc space-y-2 text-gray-700">
                <li>Wealth Management</li>
                <li>Personal and Business Loans</li>
                <li>Investment Advisory</li>
                <li>Corporate Financing</li>
                <li>Insurance Solutions</li>
                <li>Financial Planning</li>
                <li>Retirement Planning</li>
                <li>Real Estate Financing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex w-[90%] items-center justify-center py-36">
          <div className="w-full text-center lg:w-1/2">
            <h5 className="mb-10 text-xl md:text-2xl font-bold text-gray-50">
              Our Mission
            </h5>
            <p className="text-gray-100">
              At Zorg Financial Group, our mission is to transform lives by
              providing cutting-edge financial solutions that empower our
              clients to achieve their goals. We are driven by a commitment to
              excellence, innovation, and building long-term partnerships with
              our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-white">
        <div className="mx-auto flex h-full w-[90%] flex-col justify-between gap-5 py-20 lg:flex-row lg:gap-10">
          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-primary">
              What We Offer
            </h5>

            <p className="mb-10">
              Zorg Financial Group provides a diverse range of financial
              solutions to cater to the unique requirements of individuals and
              businesses. Our services are designed to ensure financial
              security, enhance economic opportunities, and promote sustainable
              growth.
            </p>

            <h5 className="mb-3 text-lg uppercase text-primary">
              Commitment to Excellence
            </h5>

            <p className="mb-3">
              We uphold the highest standards in every aspect of our operations,
              from advisory services to financing solutions, ensuring our
              clients receive unparalleled service and value.
            </p>

            <p className="mb-3">
              For over a decade, Zorg Financial Group has been at the forefront
              of Nigeria’s financial sector, driving innovation and growth. Join
              us as we continue to redefine the landscape of financial solutions
              with integrity, expertise, and a customer-first approach.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-primary">
              Why Choose Zorg Financial Group?
            </h5>

            <div>
              <div className="mb-5">
                <h5 className="font-semibold text-black">Tailored Solutions</h5>
                <p>
                  We understand that every client’s needs are unique, and we
                  work closely with you to provide personalized financial
                  strategies.
                </p>
              </div>

              <div className="mb-5">
                <h5 className="font-semibold text-black">Trusted Expertise</h5>
                <p>
                  With a team of seasoned professionals, we deliver insightful
                  guidance and proven strategies to help you achieve your goals.
                </p>
              </div>

              <div className="mb-5">
                <h5 className="font-semibold text-black">
                  Unwavering Integrity
                </h5>
                <p>
                  Our operations are founded on transparency, trust, and
                  reliability, making us a preferred partner for financial
                  solutions.
                </p>
              </div>

              <div className="mb-5">
                <h5 className="font-semibold text-black">
                  Customer-Centric Approach
                </h5>
                <p>
                  Your success is our success. We prioritize your needs,
                  ensuring every solution aligns with your aspirations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex w-[90%] items-center justify-center py-36">
          <div className="w-full text-center lg:w-1/2">
            <h5 className="mb-10 text-xl md:text-2xl font-bold text-gray-50">
              Our Vision
            </h5>
            <p className="text-gray-100">
              To be the premier provider of financial solutions in Nigeria,
              recognized for our innovation, expertise, and dedication to
              customer success.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-about flex h-[60vh] w-full justify-end">
        <div className="flex w-full flex-col justify-center bg-black bg-opacity-70 p-0 text-white md:w-1/2 md:p-10">
          <div className="mx-auto w-[90%] text-center md:text-start">
            <h1 className="py-5 font-orbitron text-xl font-extrabold uppercase tracking-wide sm:text-2xl">
              Questions?
            </h1>

            <p className="mb-8 mt-5">
              Have questions regarding our financial services or products?
              Please contact us, and we'll be happy to assist you.
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

export default About;
