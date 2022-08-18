import React from "react";
import { ILatestCardSmall, ILatestSmallCards } from "@/components/interface";
import {
  googleAddOne,
  latestCardMain,
  latestCards,
  latestCardSecondary,
  latestCardSmallData,
  latestSectionTitle,
} from "@/components/mock/HomeMockData";
import Heading from "@/components/global/Heading";
import { useRouter } from "next/router";

type Props = {
  onArticleClick?: () => void;
};

const LatestNews: React.FC<Props> = ({ onArticleClick }) => {
  const router = useRouter();
  const navigateToSection = (path: any) => {
    router.push(`/sections/${path}`);
  };

  const latestCardSmall: ILatestCardSmall[] = latestCardSmallData;

  const renderLatestCardSmall = latestCardSmall.map(
    (item: ILatestCardSmall, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div
            onClick={onArticleClick}
            className="lg:w-[20%] md:w-[23%] w-[48%] cursor-pointer"
          >
            <img src={item.cardImage} alt="" className="pb-3" />
            <p className="xl:text-[16px] lg:text-[14px] sm:text-[12px] text-[10px] font-semibold lg:pb-3">
              {item.cardPreDesc}{" "}
              <span className="text-primary">{item.cardDesc}</span>
            </p>
            <h1 className="xl:text-[22px] lg:text-[18px] font-medium xl:leading-7 lg:leading-6 leading-[16px] text-[13px] lg:text-black text-[#4A4A4A]">
              {item.cardTitle}
            </h1>
          </div>
        </React.Fragment>
      );
    }
  );

  const latestSmallCards: ILatestCardSmall[] = latestCardSmallData;

  const renderLatestSmallCards = latestSmallCards.map(
    (link: ILatestSmallCards, index: number) => {
      return (
        <React.Fragment key={`${link.id}${index}`}>
          <div
            onClick={onArticleClick}
            className="lg:w-[20%] md:w-[23%] w-[48%] cursor-pointer"
          >
            <img src={link.cardImage} alt="" className="lg:pb-6 pb-2" />
            <p className="xl:text-[16px] lg:text-[14px] sm:text-[12px] text-[10px] font-semibold lg:pb-3">
              {link.cardPreDesc}{" "}
              <span className="text-primary">{link.cardDesc}</span>
            </p>
            <h1 className="xl:text-[22px] lg:text-[18px] font-medium xl:leading-7 lg:leading-6 leading-[16px] text-[13px] lg:text-black text-[#4A4A4A]">
              {link.cardTitle}
            </h1>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <>
      <div className="mt-24">
        <Heading
          heading={latestCardMain.sectionTitle}
          onHeadingClick={() => navigateToSection(latestCardMain.sectionTitle)}
        />
        <div className="mt-10 flex md:flex-row flex-col justify-between w-full md:gap-0 gap-5">
          <div
            onClick={onArticleClick}
            className="md:w-3/5 w-full h-full relative flex items-end cursor-pointer"
          >
            <div className="bg-black opacity-40 absolute w-full h-full"></div>
            <h1 className="text-white absolute xl:text-[30px] sm:text-[20px] text-[15px] font-bold md:m-5 m-2">
              {latestCardMain.cardTitle}
            </h1>
            <img src={latestCardMain.cardImage} alt="" className="w-full" />
          </div>
          <div className="flex md:w-[36%] w-full flex-col md:gap-y-0 gap-y-5 justify-between">
            <div
              onClick={onArticleClick}
              className="w-full relative flex items-end h-[45%] cursor-pointer"
            >
              <div className="bg-black opacity-40 absolute w-full h-full"></div>
              <h1 className="text-white absolute xl:text-[25px] text-[17px] font-bold m-2">
                {latestCardSecondary.cardTitle}
              </h1>
              <img
                src={latestCardSecondary.cardImage}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div
              onClick={onArticleClick}
              className="w-full relative flex items-end h-[45%] cursor-pointer"
            >
              <div className="bg-black opacity-40 absolute w-full h-full"></div>
              <h1 className="text-white absolute xl:text-[25px] text-[17px] font-bold m-2">
                {latestCardSecondary.cardTitle}
              </h1>
              <img
                src={latestCards.cardImage}
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-11 flex md:flex-nowrap flex-wrap justify-between md:pb-20 pb-10 md:gap-0 gap-2">
            {renderLatestCardSmall}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img src={googleAddOne.googleAdd} alt="" />
        </div>
        <Heading
          heading={latestSectionTitle.sectionTitle}
          onHeadingClick={() =>
            navigateToSection(latestSectionTitle.sectionTitle)
          }
        />
        <div className="flex md:flex-nowrap flex-wrap justify-between lg:pb-20 pb-12 md:gap-0 gap-2 mt-11">
          {renderLatestSmallCards}
        </div>
        <div className="flex justify-center">
          <button className="bg-primary lg:h-[60px] h-12 lg:w-[330px] w-[185px] rounded-[17px] uppercase text-white lg:text-[20px] text-[18px] font-bold leading-6 hover:bg-white hover:border-2 hover:border-primary hover:text-primary duration-300">
            more stories
          </button>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
