import React from "react";
import {
  articleBanner,
  articleLatestNewsData,
  articleSectionTitleOne,
  googleAddTwo,
} from "@/components/mock/ArticlesMockData";
import { IArticlesLatestNews } from "@/components/interface";
import ArticleAlsoLiked from "@/components/Articles/ArticleAlsoLiked";
import { googleAddOne } from "@/components/mock/HomeMockData";
import Heading from "@/components/global/Heading";
import { useRouter } from "next/router";
import SocialArticles from "@/components/Articles/SocialArticles";

const Article: React.FC = () => {
  const router = useRouter();
  const navigateToArticle = (path: string) => {
    router.push(`/articles/${path}`);
  };
  const navigateToSection = (path: any) => {
    router.push(`/sections/${path}`);
  };

  const articleLatestNews: IArticlesLatestNews[] = articleLatestNewsData;
  const renderArticleLatestNews = articleLatestNews.map(
    (item: IArticlesLatestNews, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div
            onClick={() => navigateToArticle("article")}
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
      <div className="flex justify-center">
        <img src={googleAddOne.googleAdd} alt="" />
      </div>
      <div className="w-full mt-16 flex md:flex-row flex-col justify-between">
        <div className="md:w-[65%] w-full">
          <img
            onClick={() => navigateToArticle("article")}
            src={articleBanner.bannerImg}
            alt=""
            className="w-full cursor-pointer"
          />
          <p className="sm:text-[22px] font-bold text-center text-[15px] mt-7 text-primary">
            {articleBanner.bannerPreTitle}
          </p>
          <h1 className="lg:text-[40px] sm:text-[30px] text-[20px] font-bold text-center lg:leading-[50px] sm:leading-9 leading-8">
            {articleBanner.bannerTitle}
          </h1>
          <p className="sm:text-[25px] text-[15px] font-semibold text-center leading-7 text-[#545454] mt-6 italic">
            {articleBanner.bannerFirstDesc}
          </p>
          <SocialArticles onArticleClick={() => navigateToArticle("article")} />
          <div className="w-full h-[1px] bg-black mt-16"></div>
        </div>

        <div className="flex flex-col items-center w-[30%]">
          <img
            src={googleAddTwo.googleAdd}
            alt=""
            className="md:block hidden"
          />
          <div className="w-full flex gap-10 sm:mt-14">
            <div className="w-[1px] h-full bg-black sm:block hidden"></div>
            <div className="md:block hidden">
              <Heading
                heading={articleSectionTitleOne.sectionTitle}
                onHeadingClick={() =>
                  navigateToSection(articleSectionTitleOne.sectionTitle)
                }
              />
              <div className="mt-9 space-y-8 h-full">
                {renderArticleLatestNews}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArticleAlsoLiked onArticleClick={() => navigateToArticle("article")} />
    </>
  );
};

export default Article;
