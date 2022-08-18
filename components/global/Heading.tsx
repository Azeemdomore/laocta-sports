import React from "react";

type Props = {
  heading?: string;
  onHeadingClick?: () => void;
};

const Heading: React.FC<Props> = ({ onHeadingClick, heading }) => {
  return (
    <div className="flex lg:mt-32 mt-16">
      <div className="w-[6px] bg-primary rounded-[9px]"></div>
      <div className="p-2">
        <h1
          className="uppercase font-bold xl:text-[40px] lg:text-[30px] sm:text-[25px] text-[15px] lg:leading-[48px] leading-[30px] cursor-pointer"
          onClick={onHeadingClick}
        >
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
