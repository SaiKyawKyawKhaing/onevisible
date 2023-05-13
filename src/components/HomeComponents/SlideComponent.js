/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

const SlideComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMbImageIndex, setCurrentMbImageIndex] = useState(0);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

  const mbimages = [
    "./images/mobile.png",
    "./images/mobile1.png",
    "./images/mobile2.png",
  ];

  const mbhandleNextClick = () => {
    setCurrentMbImageIndex((prevIndex) => (prevIndex + 1) % mbimages.length);
    console.log("front btn");
  };

  const mbhandleBackClick = () => {
    setCurrentMbImageIndex(
      (prevIndex) => (prevIndex - 1 + mbimages.length) % mbimages.length
    );
    console.log("back btn");
  };

  const images = [
    "./images/desktop.png",
    "./images/desktop1.png",
    "./images/desktop2.png",
  ];

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    console.log("front btn");
  };

  const handleBackClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="lg:h-vh50 slideComponent w-vw112 flex justify-center items-center">
        <div className=" h-auto w-4/5 flex justify-around items-center flex-col lg:flex-row">
          <div className="w-1/5 h-full">
            {isChecked ? (
              <div className="sc-desktop-wrapper">
                <img src={images[currentImageIndex]} />
              </div>
            ) : (
              <div className="sc-mobile-wrapper">
                <img src={mbimages[currentMbImageIndex]} />
              </div>
            )}
          </div>
          <div className="bg-gradient-to-r from-ccyan to-cskyblue w-4/5 h-full flex justify-center sm:rounded lg:justify-end items-center">
            <div className="flex justify-center w-4/5 flex-col">
              <div className="text-4xl text-white py-2 pt-4">
                Their Old Website & Problems
              </div>

              <div className="text-white py-2 text-sm">
                orem Ipsum is It is a long established fact that a reader will
                be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a
                more-or-less
              </div>
              <div className="text-white py-2 text-sm">
                orem Ipsum is It is a long established fact that a reader will
                be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a
                more-or-less
              </div>
              <div className="text-white py-2 text-sm">
                orem Ipsum is It is a long established fact that a reader will
                be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that it has a
                more-or-less
              </div>
              {isChecked ? (
                <div className="flex z-heigh">
                  <div
                    className="text-white text-4xl"
                    onClick={handleBackClick}
                  >
                    <RxChevronLeft />
                  </div>
                  <div
                    className="text-white text-4xl"
                    onClick={handleNextClick}
                  >
                    <RxChevronRight />
                  </div>
                </div>
              ) : (
                <div className="flex z-heigh">
                  <div
                    className="text-white text-4xl"
                    onClick={mbhandleBackClick}
                  >
                    <RxChevronLeft />
                  </div>
                  <div
                    className="text-white text-4xl"
                    onClick={mbhandleNextClick}
                  >
                    <RxChevronRight />
                  </div>
                </div>
              )}

              <span className="switcher switcher-1">
                <input
                  className="bg-gradient-to-r from-ccyan to-cskyblue"
                  type="checkbox"
                  id="switcher-1"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <label for="switcher-1"></label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideComponent;
