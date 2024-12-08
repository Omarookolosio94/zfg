import React from "react";
import { addMetaData } from "../core/seoHelpers";
import { formatDate } from "../core/helpers";

const PrivacyPolicy = () => {
  return (
    <>
      {addMetaData({
        title: "Privacy Policy | StreamFlo - Your Privacy Matters",
        description:
          "Understand how StreamFlo collects, uses, and protects your information. We prioritize your privacy and ensure transparency in our practices.",
        keywords:
          "StreamFlo privacy policy, data protection, user privacy, chemical supplier privacy",
        locale: "en_NG",
        path: "privacy-policy",
      })}

      <section className="bg-silos flex h-[36vh] w-full">
        <div className="flex h-full w-full items-center justify-center bg-black bg-opacity-70 text-gray-50">
          <div className="mx-auto mt-[14vh] w-[90%] md:mt-[10vh]">
            <h1 className="font-orbitron text-3xl uppercase leading-none">
              Privacy Policy
            </h1>
            <br />
            <span className="text-sm">
              Last Updated {formatDate("2024-12-08")}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[90%]">
        <div className="w-full py-20 lg:w-1/2">
          <div className="mb-10">
            <h5 className="mb-3 font-bold text-black">Introduction</h5>

            <p>
              At StreamFlo, we value your trust and are committed to protecting
              your personal information. This Privacy Policy outlines how we
              collect, use, and safeguard your data in compliance with
              applicable laws and regulations.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="mb-3 font-bold text-black">
              Information We Collect
            </h3>

            <p className="mb-3">
              We may collect the following types of information:
            </p>

            <ul className="list-inside list-disc space-y-2">
              <li>Personal information: Name, email address, phone number.</li>
              <li>
                Business information: Company name, address, and related
                details.
              </li>
              <li>
                Usage data: Information about your interactions with our
                website, such as IP address, browser type, and browsing
                behavior.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="mb-3 font-bold text-black">
              How We Use Your Information
            </h3>
            <p className="mb-3">
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>To provide and improve our products and services.</li>
              <li>To process your orders and respond to inquiries.</li>
              <li>
                To communicate updates, promotions, and other relevant content.
              </li>
              <li>
                To ensure the security and functionality of our website and
                systems.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="mb-3 font-bold text-black">
              Sharing of Information
            </h3>
            <p className="mb-3">
              We do not sell or rent your personal information to third parties.
              However, we may share your data in the following circumstances:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                With trusted service providers who assist in operating our
                business (e.g., payment processors, delivery services).
              </li>
              <li>
                To comply with legal obligations or protect our rights and
                interests.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="mb-3 font-bold text-black">Data Security</h3>
            <p>
              We employ industry-standard security measures to protect your
              information from unauthorized access, alteration, or disclosure.
              However, no online system is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="mb-3 font-bold text-black">Your Privacy Rights</h3>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Access and review the information we hold about you.</li>
              <li>Request corrections to your personal data.</li>
              <li>Opt-out of receiving marketing communications from us.</li>
              <li>Request deletion of your personal data.</li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="mb-3 font-bold text-black">
              Updates to This Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Please check this
              page periodically for updates.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-black font-bold">Contact Us</h3>
            <p className="mb-3">
              If you have any questions or concerns about this Privacy Policy or
              how we handle your information, please contact us:
            </p>
            <div className="space-y-3">
              <a
                href="tel:+2341234567890"
                className="flex items-center space-x-2 hover:text-blue-800"
              >
                <span className="iconify font-semibold text-blue-800 mdi--phone"></span>
                <span>+234-123-456-7890</span>
              </a>
              <a
                href="mailto:info@streamflo.ng"
                className="flex items-center space-x-2 hover:text-blue-800"
              >
                <span className="iconify font-semibold text-blue-800 mdi--email"></span>
                <span>info@streamflo.ng</span>
              </a>
              <a
                href="https://www.google.com/maps?q=StreamFlo+Nigeria,+Lagos,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-800"
              >
                <span className="iconify font-semibold text-blue-800 mdi--location"></span>
                <span>StreamFlo Nigeria, Lagos, Nigeria</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
