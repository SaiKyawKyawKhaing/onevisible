/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Banner = () => {
  const title = "TRIPPRO - AN ECOMMERCE SOLUTION";
  const desc = `Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s, when anunknown`;
  return (
    <>
      <div class="bn-big-image z-lowz">
        <div class="bn-overlay">
          <div className="bn-desc-wrap pt-5">
            <h1 className="py-4">{title}</h1>
            <p className="py-2">{desc}</p>
            <div className="fh-32 flex justify-center lg:flex-row flex-col items-center brif-desc-wrap">
              <div className="w-64 h-16">
                <div className="flex items-center justify-around h-full">
                  <div className="px-3 text-xl">Build for :</div>
                  <div>
                    <div className="logo-wrapper">
                      <img src="/images/responsive.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-64 h-16 lg:border-x-2 border-white-500">
                <div className="flex items-center justify-center h-full">
                  <div className="px-1 text-xl">
                    {" "}
                    <div className="text-start">
                      <div className="font-extralight">Technologies :</div>
                      <div className="font-bold">Wordpress</div>
                    </div>
                  </div>
                  <div>
                    <div className="logo-wrapper px-3">
                      <img src="/images/wordpress-development-logo-banner.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-64 h-16">
                <div className="flex items-center justify-center h-full">
                  <div className="px-3 text-xl">
                    <div className="text-start">
                      <div className="font-extralight">industry :</div>
                      <div className="font-bold">Ecommerce</div>
                    </div>
                  </div>
                  <div>
                    <div className="logo-wrapper">
                      <img src="/images/shopping-cart.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="laptop-wrapper">
            <img src="/images/Laptop.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
