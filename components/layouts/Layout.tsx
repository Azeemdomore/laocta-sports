import React, { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import AudioPlayer from "@/components/global/AudioPlayer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout1 = ({ children, title }: Props) => {
  let lastScrollTop = 100;
  const [showAudioPlayer, setShowAudioPlayer] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      let scrollOnTop = document.documentElement.scrollTop;
      if (scrollOnTop > lastScrollTop) {
        setShowAudioPlayer(false);
      } else {
        setShowAudioPlayer(true);
      }
      lastScrollTop = scrollOnTop <= 100 ? 100 : scrollOnTop;
    });
    return () => {
      window.removeEventListener("scroll", function () {
        let scrollOnTop = document.documentElement.scrollTop;
        if (scrollOnTop > lastScrollTop) {
          setShowAudioPlayer(false);
        } else {
          setShowAudioPlayer(true);
        }
        lastScrollTop = scrollOnTop <= 100 ? 100 : scrollOnTop;
      });
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <AudioPlayer showPlayer={showAudioPlayer} />
      <Navbar showPlayer={showAudioPlayer} />
      <main className="min-h-screen container mx-auto mt-48">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout1;
