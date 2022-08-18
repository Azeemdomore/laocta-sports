import React from "react";
import {
  bannerCards,
  bannerCardSmall,
  bannerMain,
  googleAddOne,
} from "@/components/mock/HomeMockData";
import { IBannerCards, IBannerCardSmall } from "@/components/interface";
import LatestNews from "@/components/Home/LatestNews";
import SponsoredContent from "@/components/Home/SponsoredContent";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  const navigateToArticle = (path: string) => {
    router.push(`/articles/${path}`);
  };

  const bannerCard: IBannerCards[] = bannerCards;
  const renderBannerCards = bannerCard.map(
    (items: IBannerCards, index: number) => {
      return (
        <React.Fragment key={`${items.id}${index}`}>
          <div
            onClick={() => navigateToArticle("article")}
            className="md:w-[30%] sm:w-[70%] w-11/12 cursor-pointer"
          >
            <img src={items.cardImage} alt="" className="w-full" />
            <div className="flex">
              <div className="w-[17px] bg-primary rounded-br-[16px] rounded-bl-[16px]"></div>
              <div className="px-2 pt-4">
                <p className="text-[15px] font-normal">
                  {items.cardPreDesc}
                  <span className="text-primary ml-1">{items.cardDesc}</span>
                </p>
                <h1 className="lg:text-[22px] text-[16px] font-semibold lg:leading-[26px] leading-[19px]">
                  {items.cardTitle}
                </h1>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );

  const bannerSmallCards: IBannerCardSmall[] = bannerCardSmall;
  const renderBannerSmallCards = bannerSmallCards.map(
    (link: IBannerCardSmall, index: number) => {
      return (
        <React.Fragment key={`${link.id}${index}`}>
          <div
            onClick={() => navigateToArticle("article")}
            className="lg:w-[20%] md:w-[22%] w-[48%] cursor-pointer"
          >
            <img src={link.cardImage} alt="" />
            <div className="mt-5">
              <p className="xl:text-[16px] lg:text-[14px] sm:text-[12px] text-[10px] font-semibold lg:pb-3">
                {link.cardPreDesc}{" "}
                <span className="text-primary">{link.cardDesc}</span>
              </p>
              <h1 className="xl:text-[22px] lg:text-[18px] font-medium xl:leading-7 lg:leading-6 leading-[16px] text-[13px] lg:text-black text-[#4A4A4A]">
                {link.cardTitle}
              </h1>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <img src={googleAddOne.googleAdd} alt="" />
        <div className="flex md:flex-row flex-col-reverse justify-between md:mt-12 w-full">
          <div
            onClick={() => navigateToArticle("article")}
            className="w-full md:mt-0 mt-10 cursor-pointer"
          >
            <img src={bannerMain.cardImage} alt="" className="w-full" />
            <div className="flex">
              <div className="w-[6px] bg-primary rounded-br-[16px] rounded-bl-[16px]"></div>
              <div className="p-3 lg:space-y-2 space-y-1">
                <p className="text-[15px] font-normal">
                  {bannerMain.cardPreDesc}{" "}
                  <span className="text-primary">{bannerMain.cardDesc}</span>
                </p>
                <h1 className="lg:text-[40px] md:[20px] font-semibold">
                  {bannerMain.cardTitle}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:justify-between items-center mt-16 md:flex-row flex-col md:gap-0 gap-10">
        {renderBannerCards}
      </div>
      <div className="flex md:justify-between sm:justify-center justify-between mt-11 flex-wrap md:gap-0 gap-2">
        {renderBannerSmallCards}
      </div>
      <LatestNews onArticleClick={() => navigateToArticle("article")} />
      <SponsoredContent onArticleClick={() => navigateToArticle("article")} />
    </>
  );
};

export default Home;
