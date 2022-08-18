import React, { useState, useEffect } from "react";
import cn from "classnames";

const Product = () => {
  const [showAudioPlayer, setShowAudioPlayer] = useState<boolean>(false);
  let lastScrollTop = 100;
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setShowAudioPlayer(false);
      } else {
        setShowAudioPlayer(true);
      }
      lastScrollTop = st <= 100 ? 100 : st;
    });
  }, []);

  return (
    <>
      <div
        className={cn("bg-blue-500 fixed w-full duration-500", {
          block: showAudioPlayer,
          hidden: !showAudioPlayer,
        })}
      >
        <h1 className="text-white text-2xl">Hello to Scrolling Function</h1>
      </div>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
      <h1 className="text-4xl">Some content</h1>
    </>
  );
};

export default Product;
