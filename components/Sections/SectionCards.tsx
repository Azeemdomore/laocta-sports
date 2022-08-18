import React from "react";
import { ISectionsCard } from "@/components/interface";
import { sectionCardData } from "@/components/mock/SectionsMockData";

type Props = {
  onArticleClick?: () => void;
};

const SectionsCard: React.FC<Props> = ({ onArticleClick }) => {
  const sectionCard: ISectionsCard[] = sectionCardData;

  const renderSectionCard = sectionCard.map(
    (item: ISectionsCard, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div
            onClick={onArticleClick}
            className="flex md:flex-row flex-col md:border-2 rounded-[12px] md:w-full w-[48%] cursor-pointer"
          >
            <img
              src={item.cardImage}
              alt=""
              className="xl:w-1/2 md:w-[40%] w-full object-cover"
            />
            <div className="md:p-8">
              <p className="xl:text-[22px] md:text-[25px] sm:text-[20px] text-[10px] font-bold text-primary md:mt-0 mt-1">
                {item.cardPreTitle}
              </p>
              <h1 className="xl:text-[30px] sm:text-[23px] text-[12px] font-bold xl:leading-9 md:leading-7 sm:leading-6 leading-4 md:mt-3 mt-1">
                {" "}
                {item.cardTitle}{" "}
              </h1>
              <p className="xl:text-[20px] sm:text-[18px] text-[10px] font-normal text-[#5C5C5C] mt-2">
                {item.cardDesc}
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <>
      <div className="flex md:flex-col flex-row md:flex-nowrap flex-wrap md:gap-y-10 gap-y-5 mt-10 justify-between">
        {renderSectionCard}
      </div>
    </>
  );
};

export default SectionsCard;
