import React from "react";
import * as Icons from "@/components/global/Icons";
import Link from "next/link";
import cn from "classnames";

type Props = {
  showPlayer?: boolean;
};

const Navbar: React.FC<Props> = ({ showPlayer }) => {
  const socialIcons = [
    {
      id: 1,
      icon: <Icons.FacebookIcon />,
      path: "#",
    },
    {
      id: 2,
      icon: <Icons.TwitterIcon />,
      path: "#",
    },
    {
      id: 1,
      icon: <Icons.InstagramIcon />,
      path: "#",
    },
    {
      id: 1,
      icon: <Icons.YoutubeIcon />,
      path: "#",
    },
  ];

  const renderSocialIcons = socialIcons.map((items: any, index: number) => {
    return (
      <React.Fragment key={`${items.id}${index}`}>
        <Link href={items.path}>
          <div className="cursor-pointer">{items.icon}</div>
        </Link>
      </React.Fragment>
    );
  });
  return (
    <>
      <div
        className={cn(
          "w-full h-[117px] bg-primary flex justify-center items-center sticky z-[999999] md:mt-0",
          {
            "md:top-[143px] top-[170px] duration-500 ease-in-out": showPlayer,
            "top-0 duration-500 ease-in-out": !showPlayer,
          }
        )}
      >
        <div className="w-[95%] h-full flex items-center justify-between">
          <div className="flex items-center md:gap-11 gap-5">
            <div className="cursor-pointer">
              <Icons.MenuIcon />
            </div>
            <Link href="/">
              <img
                src="/img/logoIcon.png"
                alt=""
                className="cursor-pointer sm:w-full w-3/5"
              />
            </Link>
          </div>
          <div className="lg:w-[420px] w-[227px] lg:h-[45px] h-[32px] rounded-2xl bg-white md:flex hidden items-center text-[15px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-11/12 h-full rounded-2xl bg-white border-0 focus:ring-0 text-[#808080]"
            />
            <div className="lg:w-8 w-[25px] lg:h-8 h-[25px] rounded-full bg-primary flex justify-center items-center mr-3">
              <Icons.SearchIcon />
            </div>
          </div>
          <div className="sm:gap-5 gap-3 flex">{renderSocialIcons}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
