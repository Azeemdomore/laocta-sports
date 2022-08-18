import React from "react";
import { ISponsoredContent } from "@/components/interface";
import {
  sponsoredContentData,
  sponsoredContentTitle,
} from "@/components/mock/HomeMockData";
import Slider from "react-slick";
import Heading from "@/components/global/Heading";
import { useRouter } from "next/router";

type Props = {
  onArticleClick?: () => void;
};

const SponsoredContent: React.FC<Props> = ({ onArticleClick }) => {
  const router = useRouter();
  const navigateToSection = (path: any) => {
    router.push(`/sections/${path}`);
  };

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const sponsoredContent: ISponsoredContent[] = sponsoredContentData;

  const renderSponsoredContent = sponsoredContent.map(
    (item: ISponsoredContent, index: number) => {
      return (
        <React.Fragment key={`${item.id}${index}`}>
          <div
            onClick={onArticleClick}
            className="xl:w-full w-11/12 mt-10 cursor-pointer"
          >
            <img src={item.cardImage} alt="" />
            <p className="lg:text-[22px] text-[12px] font-semibold mt-2">
              {item.cardTitle}
            </p>
            <p className="lg:text-[16px] text-[12px] font-semibold text-primary">
              {item.cardDesc}
            </p>
          </div>
        </React.Fragment>
      );
    }
  );
  return (
    <div className="md:block hidden">
      <Heading
        heading={sponsoredContentTitle.sectionTitle}
        onHeadingClick={() =>
          navigateToSection(sponsoredContentTitle.sectionTitle)
        }
      />
      <div>
        <Slider {...setting}>{renderSponsoredContent}</Slider>
      </div>
    </div>
  );
};

export default SponsoredContent;
