import React from "react";

const Home = () => {
  return (
    <section className="">
      <div className="bg-secondary">
        <div className="font-mont mx-auto flex w-[90%] items-center justify-between py-2 text-[16px] text-shade">
          <div className="flex items-center gap-3">
            <a href="http://" className="hover:text-white">
              <span className="iconify mdi--facebook"></span>
            </a>
            <a href="http://" className="hover:text-white">
              <span className="iconify mdi--twitter"></span>
            </a>
            <p className="text-[12px] font-light">
              STREAMFLO CHEMICAL DISTRIBUTOR
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+" className="flex items-center gap-2">
              <span className="iconify mdi--phone"></span>
              <p className="text-[14px]">+234(0)700-000-0000</p>
            </a>

            <a href="mailto:" className="flex items-center gap-2">
              <span className="iconify mdi--email"></span>
              <p className="text-[14px]">info@streamflo.com</p>
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-white"></nav>
    </section>
  );
};

export default Home;
