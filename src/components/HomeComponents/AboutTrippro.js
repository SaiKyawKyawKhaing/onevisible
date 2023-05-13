/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useEffect } from "react";
import Btn from "../common/Btn";
import { motion, useAnimation, useInView } from "framer-motion";

const AboutTrippro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="w-full at-container flex lg:justify-center justify-evenly items-center flex-col-reverse lg:flex-row"
      >
        <div className="lg:w-5/12 w-10/12 flex justify-center items-center ">
          <div className="text-center md:text-left">
            <h1 className="text-4xl py-2 at-title">
              ABOUT <b>TRIPPRO</b>
            </h1>
            <p className="font-normal py-5 text-gray-800 text-sm lg:text-base">
              Lorem Ipsum is It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
            </p>
            <Btn onClick={() => console.log("Btn Work")}>TORE TO WEBSITE</Btn>
          </div>
        </div>
        <div className="lg:w-5/12 w-10/12 flex justify-center items-center">
          <div className="tablet-wrapper">
            <img src="/images/tabletcir.png" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutTrippro;
