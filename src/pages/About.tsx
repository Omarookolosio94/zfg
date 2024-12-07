import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="bg-silos flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-3xl uppercase">About</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-[90%] items-center justify-start py-40">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-3 uppercase text-blue-800">
              Providing Chemical solutions since 2012
            </h1>
            <h5 className="mb-10 text-2xl font-bold text-black">
              About StreamFlo Nigeria
            </h5>
            <p className="mb-5">
              Founded in 2012, StreamFlo Nigeria has become a leading
              distributor of industrial chemicals in Nigeria, offering a wide
              range of products to meet the diverse needs of industries across
              the country. Headquartered in Lagos, StreamFlo Nigeria is
              dedicated to providing top-quality chemical solutions while
              maintaining the highest standards of safety, reliability, and
              customer satisfaction.
            </p>

            <div>
              <p>
                StreamFlo supplies both liquid and dry industrial chemicals,
                including:
              </p>

              <ul className="mt-3 list-inside list-disc space-y-2 text-gray-700">
                <li>Solvents</li>
                <li>Acids</li>
                <li>Alcohols</li>
                <li>Esters</li>
                <li>Aliphatic and aromatic hydrocarbons</li>
                <li>Glycols and glycol ethers</li>
                <li>Ketones</li>
                <li>Phosphates</li>
                <li>Laboratory and reagent-grade chemicals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex w-[90%] items-center justify-center py-36">
          <div className="w-full text-center lg:w-1/2">
            <h5 className="mb-10 text-3xl font-bold text-gray-50">
              Our Mission
            </h5>
            <p className="text-gray-100">
              At StreamFlo Nigeria, our mission is to be a trusted partner for
              industrial chemical needs, delivering high-quality products that
              empower businesses to achieve efficiency and sustainability in
              their operations. We are committed to contributing to the growth
              of the Nigerian economy by fostering long-term relationships with
              our clients and maintaining an uncompromising focus on quality.
            </p>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-white">
        <div className="mx-auto flex h-full w-[90%] flex-col justify-between gap-5 py-20 lg:flex-row lg:gap-10">
          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-blue-800">
              What we Offer
            </h5>

            <p className="mb-10">
              Our product catalog includes an extensive variety of industrial
              chemicals designed to serve the specific requirements of diverse
              industries such as manufacturing, agriculture, pharmaceuticals,
              oil and gas, and more. With a keen understanding of the demands of
              the Nigerian market, we ensure that our offerings meet
              international standards, catering to applications that require
              precision, safety, and reliability.
            </p>

            <h5 className="mb-3 text-lg uppercase text-blue-800">
              Sustainability and Community Impact
            </h5>

            <p className="mb-3">
              Flo Nigeria is deeply committed to environmental stewardship and
              sustainability. We work closely with local communities to promote
              responsible chemical usage and disposal practices, ensuring that
              our operations align with global environmental standards.
            </p>

            <p className="mb-3">
              For over a decade, StreamFlo Nigeria has played a pivotal role in
              supporting Nigeria's industrial growth by delivering chemical
              solutions tailored to the country's unique needs. Join us as we
              continue to drive progress, innovation, and excellence in
              industrial chemical distribution.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-blue-800">
              Why Choose StreamFlo Nigeria?
            </h5>

            <div>
              <div className="mb-5">
                <h5 className="font-semibold text-black">Comprehensive Product Range</h5>
                <p>
                  From solvents and acids to laboratory-grade chemicals, we
                  provide the essential building blocks for a wide range of
                  industrial processes.
                </p>
              </div>

              <div className="mb-5">
                <h5 className="font-semibold text-black">Commitment to Quality</h5>
                <p>
                  Every product in our catalog is sourced from trusted
                  manufacturers and rigorously tested to ensure it meets the
                  highest standards.
                </p>
              </div>

              <div className="mb-5">
                <h5 className="font-semibold text-black">Expert Team</h5>
                <p>
                  Our team of professionals brings years of industry experience,
                  offering expert guidance to help our clients select the right
                  products for their unique needs.
                </p>
              </div>

              <div className="mb-5">
                <h5 className="font-semibold text-black">Safety First</h5>
                <p>
                  We uphold strict safety measures to ensure proper storage,
                  handling, and distribution of all chemicals, prioritizing the
                  well-being of our employees, customers, and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex w-[90%] items-center justify-center py-36">
          <div className="w-full text-center lg:w-1/2">
            <h5 className="mb-10 text-3xl font-bold text-gray-50">
              Our Vision
            </h5>
            <p className="text-gray-100">
              Our vision is to become the foremost provider of industrial
              chemical solutions in Nigeria, recognized for our innovation,
              reliability, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-home flex h-[60vh] w-full justify-end">
        <div className="flex w-full flex-col justify-center bg-black bg-opacity-70 p-0 text-white md:w-1/2 md:p-10">
          <div className="mx-auto w-[90%] text-center md:text-start">
            <h1 className="py-5 font-orbitron text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
              Questions?
            </h1>

            <p className="mb-8 mt-5">
              Have questions regarding our products or services? Please contact
              us and we will be happy to assist you.
            </p>

            <Link
              to="/contacts"
              className="inline-block w-full items-center justify-center gap-2 bg-blue-800 px-[26px] py-[10px] font-mont text-[14px] uppercase !opacity-100 transition duration-300 ease-in-out hover:bg-blue-900 disabled:cursor-not-allowed sm:w-2/3 md:flex lg:w-1/3"
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
