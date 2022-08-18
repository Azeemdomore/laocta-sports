import React from "react";
import { sectionBannerData } from "@/components/mock/SectionsMockData";
import SectionsCard from "@/components/Sections/SectionCards";
import Heading from "@/components/global/Heading";
import { useRouter } from "next/router";

const Sections: React.FC = () => {
  const router = useRouter();
  const navigateToArticle = (path: string) => {
    router.push(`/articles/${path}`);
  };
  const navigateToSection = (path: any) => {
    router.push(`/articles/${path}`);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <img src="/img/placeholderOne.png" alt="" />
      </div>
      <div className="">
        <Heading
          heading={sectionBannerData.sectionTitle}
          onHeadingClick={() =>
            navigateToSection(sectionBannerData.sectionTitle)
          }
        />
        <div
          onClick={() => navigateToArticle("article")}
          className="md:mt-14 mt-4 relative flex items-end w-full h-full cursor-pointer"
        >
          <div className="bg-black opacity-60 absolute lg:h-[30%] h-1/2 w-full"></div>
          <div className="absolute sm:m-4 m-2">
            <p className="sm:text-[30px] text-[15px] font-bold text-primary">
              {sectionBannerData.cardPreTitle}
            </p>
            <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] text-[15px] font-bold text-white lg:leading-[47px] sm:leading-10 leading-5">
              {sectionBannerData.cardTitle}
            </h1>
          </div>
          <div className="w-full h-full">
            <img
              src={sectionBannerData.cardImage}
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <SectionsCard onArticleClick={() => navigateToArticle("article")} />
      <div className="sm:mt-28 mt-16 flex justify-center xl:pb-36 lg:pb-20 sm:pb-28">
        <button className="sm:w-[332px] w-[140px] sm:h-[60px] h-[40px] bg-primary rounded-2xl text-white sm:text-[20px] text-[12px] font-bold hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary duration-300">
          MÁS ARTÍCULOS
        </button>
      </div>
    </>
  );
};

export default Sections;
