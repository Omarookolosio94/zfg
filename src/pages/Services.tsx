import React, { useEffect } from "react";
import silos from "../img/Chemical-Silos.jpg";
import hero1 from "../img/hero1.jpg";
import warehouse from "../img/warehouse.jpg";
import { useLocation } from "react-router-dom";

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
      <section className="bg-home flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-3xl uppercase">Services</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-[90%] items-center justify-center py-40">
          <div className="w-full text-center lg:w-1/2">
            <h1 className="mb-3 uppercase text-blue-800">
              Providing Chemical solutions since 2012
            </h1>
            <h5 className="mb-10 text-2xl font-bold text-black">
              About StreamFlo Nigeria
            </h5>
            <p id="blending">
              At Streamflo Nigeria, we are committed to delivering top-quality
              chemical solutions tailored to your business needs. With a legacy
              of excellence, expertise, and reliability, we partner with
              industries across Nigeria to ensure seamless and efficient service
              delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-blue-50 lg:h-[70vh]">
        <div className="flex h-full flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex h-[40vh] w-full items-center justify-center gap-5 lg:h-full lg:w-1/3">
            <img
              src={silos}
              alt="Chemical Storage"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:p-8">
            <div className="mx-auto w-[90%]">
              <h5 className="mb-3 text-lg font-extrabold uppercase text-blue-800">
                Custom Blending
              </h5>

              <p className="mb-8 mt-8">
                At Streamflo Nigeria, we understand that every industry has
                unique requirements. Our Custom Blending Services are designed
                to meet your specific operational needs. Whether you need
                specialized formulations for oilfield chemicals, industrial
                applications, or agricultural solutions, we have the expertise
                to deliver.
              </p>

              <div className="mb-6">
                <p className="font-bold text-black">
                  Why Choose Our Custom Blending?
                </p>
                <ul className="mt-2 list-inside list-disc">
                  <li>
                    Flexible batch sizes, from small quart-sized blends to bulk
                    loads.
                  </li>
                  <li>
                    Accurate formulations tailored to your unique
                    specifications.
                  </li>
                  <li>
                    High-quality control to ensure consistent results for every
                    batch.
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-bold text-black">Industries We Serve:</p>
                <ul className="mt-2 list-inside list-disc">
                  <li>Oil and Gas</li>
                  <li>Manufacturing</li>
                  <li>Construction</li>
                  <li>Agricultural Solutions</li>
                </ul>
              </div>

              <p className="mb-8" id="private-labelling">
                Let us partner with you to create bespoke solutions that enhance
                your efficiency, reliability, and success in your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center lg:h-[70vh]">
        <div className="flex h-full flex-col items-center justify-between gap-10 lg:flex-row-reverse">
          <div className="flex h-[40vh] w-full items-center justify-center gap-5 lg:h-full lg:w-1/3">
            <img
              src={hero1}
              alt="Private Label Packaging"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:p-8">
            <div className="mx-auto w-[90%]">
              <h5 className="mb-3 text-lg font-extrabold uppercase text-blue-800">
                Private Label Packaging
              </h5>

              <p className="mb-8 mt-8">
                At Streamflo Nigeria, we offer customized private label
                packaging to help your brand stand out in competitive markets.
                Whether you want to package oilfield chemicals, industrial
                products, or other solutions, we provide premium packaging that
                reflects your brand identity.
              </p>

              <div className="mb-6">
                <p className="font-bold text-black">
                  Why Choose Private Label Packaging?
                </p>
                <ul className="mt-2 list-inside list-disc">
                  <li>
                    Custom-branded labels that showcase your logo and design.
                  </li>
                  <li>
                    High-quality packaging materials for durability and safety.
                  </li>
                  <li>Flexible packaging sizes to meet your business needs.</li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-bold text-black">
                  Packaging Options Available:
                </p>
                <ul className="mt-2 list-inside list-disc">
                  <li>Barrels, drums, and totes for industrial needs.</li>
                  <li>Small-volume containers for retail purposes.</li>
                  <li>
                    Eco-friendly packaging options for sustainable businesses.
                  </li>
                </ul>
              </div>

              <p className="mb-8" id="bulk-options">
                Let us handle the packaging while you focus on growing your
                brand. Streamflo Nigeria ensures your products look professional
                and are delivered securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-blue-50 lg:h-[70vh]">
        <div className="flex h-full flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex h-[40vh] w-full items-center justify-center gap-5 lg:h-full lg:w-1/3">
            <img
              src={warehouse}
              alt="Bulk Options"
              className="h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 lg:p-8">
            <div className="mx-auto w-[90%]">
              <h5 className="mb-3 text-lg font-extrabold uppercase text-blue-800">
                Bulk Options
              </h5>

              <p className="mb-8 mt-8">
                Streamflo Nigeria provides scalable bulk supply solutions
                tailored to your industry. Whether you need small batches for
                immediate use or large volumes for ongoing operations, we’ve got
                you covered.
              </p>

              <div className="mb-6">
                <p className="font-bold text-black">
                  Why Choose Our Bulk Options?
                </p>
                <ul className="mt-2 list-inside list-disc">
                  <li>
                    Capability to handle small and large bulk orders
                    efficiently.
                  </li>
                  <li>Reliable delivery schedules to meet tight deadlines.</li>
                  <li>Cost-effective pricing for bulk purchases.</li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-bold text-black">Suitable for:</p>

                <ul className="mt-2 list-inside list-disc">
                  <li>Oilfield operations and large-scale industrial needs.</li>
                  <li>Manufacturing plants requiring continuous supply.</li>
                  <li>
                    Distributors and wholesalers looking for reliable partners.
                  </li>
                </ul>
              </div>

              <p className="mb-8">
                Partner with Streamflo Nigeria for all your bulk chemical needs.
                We deliver quality and quantity with efficiency and precision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
