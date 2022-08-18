import React from "react";
import { IArticlesAlsoLiked } from "@/components/interface";
import {
  articleAlsoLikedData,
  articleSectionTitleTwo,
} from "@/components/mock/ArticlesMockData";
import Heading from "@/components/global/Heading";
import { useRouter } from "next/router";

type Props = {
  onArticleClick?: () => void;
};

const ArticleAlsoLiked: React.FC<Props> = ({ onArticleClick }) => {
  const router = useRouter();

  const navigateToSection = (path: any) => {
    router.push(`/sections/${path}`);
  };
  const articleAlsoLiked: IArticlesAlsoLiked[] = articleAlsoLikedData;
  const renderArticleAlsoLiked = articleAlsoLiked.map(
    (item: IArticlesAlsoLiked, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div
            onClick={onArticleClick}
            className="md:w-[32%] w-[45%] cursor-pointer"
          >
            <img src={item.cardImg} alt="" />
            <p className="lg:text-[22px] sm:text-[20px] text-[10px] font-bold text-primary mt-3">
              {item.cardTitle}
            </p>
            <p className="lg:text-[22px] sm:text-[15px] text-[12px] sm:font-medium font-semibold pb-7 sm:leading-7 leading-[15px] md:text-black text-[#4A4A4A]">
              {item.cardDesc}
            </p>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <Heading
        heading={articleSectionTitleTwo.sectionTitle}
        onHeadingClick={() =>
          navigateToSection(articleSectionTitleTwo.sectionTitle)
        }
      />
      <div className="flex justify-between flex-wrap w-full mt-11">
        {renderArticleAlsoLiked}
      </div>
    </>
  );
};

export default ArticleAlsoLiked;
