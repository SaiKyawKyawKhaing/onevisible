/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const quicklinks = [
  "Services",
  "About Us",
  "Blog",
  "Quotation",
  "Partnership",
  "Contact Us",
];

const ourServices = [
  "Web Development",
  "Web Design",
  "Responsive Website Design",
  "CMS Website Design",
  "Custom Website Design",
  "360 Vitual Tour",
];

const ourServices2 = [
  "Ecommerce Development",
  "WooCommerce Development",
  "osCommerce Development",
  "Magento Development",
  "BigCommerce Development",
  "SSL Certificate",
  "Promotion Video",
];

const contactinfos = [
  "+65 6248 0838",
  "info@visibleone.com",
  "24 Sin Ming Lane Midview City #07-93",
  "Singapore 573970",
  "Office Hour:Mon-Fri(9am-6pm)",
];

const Footer = () => {
  return (
    <div class="ft-overlay">
      <div class="flex flex-col lg:flex-row justify-evenly lg:pl-0 pl-4">
        <div>
          <h1 className="text-2xl py-4">QUICKLINKS</h1>
          <ul>
            {quicklinks.map((quicklink) => {
              return <li className="lg:py-3">{quicklink}</li>;
            })}
          </ul>
        </div>
        <div>
          <h1 className="text-2xl py-4">OUR SERVICES</h1>
          <ul>
            {ourServices.map((ourService) => {
              return <li className="lg:py-3">{ourService}</li>;
            })}
          </ul>
        </div>
        <div>
          <h1 className="text-2xl py-4 invisible">OUR SERVICES</h1>
          <ul>
            {ourServices2.map((ourService) => {
              return <li className="lg:py-3">{ourService}</li>;
            })}
          </ul>
        </div>
        <div>
          {" "}
          <h1 className="text-2xl py-4 ">VISIBLE ONE SINGAPORE,</h1>
          <ul>
            {contactinfos.map((info) => {
              return <li className="">{info}</li>;
            })}
          </ul>
        </div>
      </div>
      {/* <div className="border-y-2 border-white w-10/12 py-10 mx-auto py-6">
        123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123
      </div> */}
    </div>
  );
};

export default Footer;
