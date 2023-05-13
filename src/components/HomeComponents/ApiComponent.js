/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from "react";
import Btn from "../common/Btn";
import { motion, useAnimation, useInView } from "framer-motion";

const ApiComponent = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleViewMore = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 5);
  };

  const handleViewLess = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts - 5);
  };

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
        className="lg:h-vh60 w-full flex justify-center flex-col lg:flex-row"
      >
        <div className="h-rem26 lg:w-2/5">
          <div className="api-img-wrapper">
            <img src="/images/case-study-trip-pro-our-challenges.png" />
          </div>
        </div>
        <div className="flex justify-between h-rem26 lg:w-2/5">
          <div className="flex flex-col justify-between w-full px-5 mx-1 py-5">
            <div>
              <h1 className="text-4xl py-2 at-title">
                OUR <b>CHALLENGES</b>
              </h1>
            </div>
            {posts.slice(0, visiblePosts).map((post, index) => (
              <div
                key={post.id}
                style={{ display: index < visiblePosts - 5 ? "none" : "block" }}
              >
                <div className="bg-white-500 cs_shadow h-16 flex items-center px-3">
                  <div className="px-5 text-cskyblue text-2xl">{post.id}</div>
                  {post.title}
                </div>
              </div>
            ))}
            <div>
              {visiblePosts < posts.length && (
                <Btn onClick={handleViewMore}>View More</Btn>
              )}
              {visiblePosts > 5 ? (
                <button className="px-5 text-gray-400" onClick={handleViewLess}>
                  Back
                </button>
              ) : (
                <span className="px-3 text-gray-400">
                  Click view more to See more content
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ApiComponent;
