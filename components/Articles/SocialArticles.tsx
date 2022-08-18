import React from "react";
import * as Icons from "@/components/global/Icons";
import Heading from "@/components/global/Heading";
import {
  articleBanner,
  googleAddTwo,
  articleSectionTitleOne,
  articleLatestNewsData,
} from "@/components/mock/ArticlesMockData";
import { IArticlesLatestNews } from "@/components/interface";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  onArticleClick?: () => void;
};

const SocialArticles: React.FC<Props> = ({ onArticleClick }) => {
  const router = useRouter();
  const navigateToSection = (path: any) => {
    router.push(`/sections/${path}`);
  };
  const articleLatestNews: IArticlesLatestNews[] = articleLatestNewsData;
  const renderArticleLatestNews = articleLatestNews.map(
    (item: IArticlesLatestNews, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div
            onClick={onArticleClick}
            className="flex flex-col items-start cursor-pointer"
          >
            <img src={item.cardImg} alt="" className="w-full" />
            <p className="text-[16px] font-semibold mt-2">
              {item.cardPreTitle}{" "}
              <span className="text-primary">{item.cardTitle}</span>
            </p>
            <p className="text-[15px] font-medium">{item.cardDesc}</p>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <>
      <div className="flex mt-10 md:gap-10 gap-5">
        <div className="flex flex-col sm:gap-5 gap-3">
          <Link href="#">
            <div className="sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] sm:p-0 p-[10px] rounded-full bg-[#24CC63] flex justify-center items-center cursor-pointer">
              <Icons.WhatsappIcon />
            </div>
          </Link>
          <Link href="#">
            <div className="sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] sm:p-0 p-[10px] rounded-full bg-[#1877F3] flex justify-center items-center cursor-pointer">
              <Icons.FacebookIcon />
            </div>
          </Link>
          <Link href="#">
            <div className="sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] sm:p-0 p-[10px] rounded-full bg-[#1D9CEB] flex justify-center items-center cursor-pointer">
              <Icons.TwitterIcon />
            </div>
          </Link>
          <Link href="#">
            <div className="sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] sm:p-0 p-[10px] rounded-full bg-[#FFC315] flex justify-center items-center cursor-pointer">
              <Icons.MailIcon />
            </div>
          </Link>
        </div>
        <div className="text-start">
          <p className="lg:text-[22px] sm:text-[20px] text-[12px] font-medium text-[#595959]">
            {articleBanner.bannerSecondDesc}
          </p>
          <p className="lg:text-[22px] sm:text-[20px] text-[12px] font-medium mt-6 text-[#595959]">
            {articleBanner.bannerThirdDesc}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={googleAddTwo.googleAdd}
          alt=""
          className="md:hidden block mt-7"
        />
      </div>
      <div className="md:hidden block">
        <Heading
          heading={articleSectionTitleOne.sectionTitle}
          onHeadingClick={() =>
            navigateToSection(articleSectionTitleOne.sectionTitle)
          }
        />
        <div className="mt-9 space-y-8 h-full">{renderArticleLatestNews}</div>
      </div>
      <div className="lg:mt-28 mt-20">
        <div className="flex justify-center">
          <img src={articleBanner.bannerGoogleAdd} alt="" />
        </div>
        <p className="lg:text-[22px] sm:text=[20px] text-[12px] font-medium text-[#4A4A4A] lg:mt-24 mt-10">
          {articleBanner.bannerForthDesc}
        </p>
        <p className="lg:text-[22px] sm:text=[20px] text-[12px] font-medium text-[#4A4A4A] lg:mt-7 mt-4">
          {articleBanner.bannerFifthDesc}
        </p>
        <p className="lg:text-[22px] sm:text=[20px] text-[12px] font-medium text-[#4A4A4A] lg:mt-7 mt-4">
          {articleBanner.bannerSixthDesc}
        </p>
        <p className="lg:text-[22px] sm:text=[20px] text-[12px] font-medium text-[#4A4A4A] lg:mt-7 mt-4">
          {articleBanner.bannerSeventhDesc}
        </p>
      </div>
    </>
  );
};

export default SocialArticles;
