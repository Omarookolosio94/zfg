import React from "react";
import client from "../img/shakingclient.jpg";
import { addMetaData } from "../core/seoHelpers";
import { contacts } from "../core/systemConst";

const Contact = () => {
  return (
    <>
      {addMetaData({
        title: "Contact Us | Zorg Financial Group - Get in Touch",
        description:
          "Have questions about our financial services? Contact Zorg Financial Group today for assistance, and our team will be happy to help.",
        keywords:
          "Zorg Financial Group contact, financial services, Canada, customer support, get in touch",
        path: "contact",
        locale: "en_CA",
      })}

      <section className="bg-contact flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="md:2xl font-orbitron text-xl uppercase">Contact</h1>
          </div>
        </div>
      </section>

      <section className="flex h-auto items-center justify-center bg-white lg:h-[70vh]">
        <div className="mx-auto flex h-full w-[90%] flex-col-reverse items-center justify-between gap-5 py-20 lg:flex-row-reverse lg:py-0">
          <div className="flex h-[40vh] w-full items-center justify-center gap-5 lg:h-[45vh] lg:w-1/2">
            <img
              src={client}
              alt="A professional meeting between a financial consultant and a client"
              className="h-full w-full object-cover shadow-lg lg:w-[80%]"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h5 className="mb-3 text-lg uppercase text-primary">
              Questions? Looking to learn more about our services?
            </h5>

            <p className="font-orbitron text-xl font-extrabold uppercase md:text-2xl">
              Send Us a Message
            </p>

            <p className="mb-8 mt-8">
              Zorg Financial Group is headquartered in Canada, where we provide
              a range of financial solutions tailored to meet your needs. Our
              expert team is committed to delivering exceptional service and
              ensuring your financial goals are met with precision. Reach out to
              us today, and experience the difference of working with a trusted
              financial partner.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${contacts.phone}`}
                className="flex items-center space-x-2 hover:text-primary"
              >
                <span className="iconify font-semibold text-primary mdi--phone"></span>
                <span>{contacts?.phone}</span>
              </a>
              <a
                href={`mailto:${contacts.email}`}
                className="flex items-center space-x-2 hover:text-primary"
              >
                <span className="iconify font-semibold text-primary mdi--email"></span>
                <span>{contacts.email}</span>
              </a>
              <a
                href={`https://www.google.com/maps?q=${contacts.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-primary"
              >
                <span className="iconify font-semibold text-primary mdi--location"></span>
                <span>{contacts.address}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
