import React from "react";
import * as Icons from "@/components/global/Icons";
import Link from "next/link";

const Footer: React.FC = () => {
  const footerIcons = [
    {
      id: 1,
      footerIcon: <Icons.FacebookIcon />,
      iconType: "main",
      path: "#",
    },
    {
      id: 2,
      footerIcon: <Icons.TwitterIcon />,
      iconType: "secondary",
      path: "#",
    },
    {
      id: 3,
      footerIcon: <Icons.InstagramIcon />,
      iconType: "third",
      path: "#",
    },
    {
      id: 4,
      footerIcon: <Icons.YoutubeIcon />,
      iconType: "forth",
      path: "#",
    },
  ];

  const renderFooterIcons = footerIcons.map((item: any, index: number) => {
    return (
      <React.Fragment key={`${item.id}${index}`}>
        {item.iconType === "main" && (
          <Link href={item.path}>
            <div className="bg-[#1877F3] lg:w-[48px] lg:h-[48px] w-[33px] h-[33px] rounded-full flex justify-center items-center lg:p-0 p-[6px] cursor-pointer">
              {item.footerIcon}
            </div>
          </Link>
        )}
        {item.iconType === "secondary" && (
          <Link href={item.path}>
            <div className="bg-[#6AC6FF] lg:w-[48px] lg:h-[48px] w-[33px] h-[33px] rounded-full flex justify-center items-center lg:p-0 p-[6px] cursor-pointer">
              {item.footerIcon}
            </div>
          </Link>
        )}
        {item.iconType === "third" && (
          <Link href={item.path}>
            <div className="bg-gradient-to-t to-[#6F3D8B] via-[#D24259] from-[#F7A34F] lg:w-[48px] lg:h-[48px] w-[33px] h-[33px] rounded-full cursor-pointer flex justify-center items-center lg:p-0 p-[6px]">
              {item.footerIcon}
            </div>
          </Link>
        )}
        {item.iconType === "forth" && (
          <Link href={item.path}>
            <div className="bg-[#FF0000] lg:w-[48px] lg:h-[48px] w-[33px] h-[33px] rounded-full flex justify-center items-center lg:p-0 p-[6px] cursor-pointer">
              {item.footerIcon}
            </div>
          </Link>
        )}
      </React.Fragment>
    );
  });
  return (
    <div className="h-[225px] w-full bg-primary mt-36 sm:p-5 p-2 flex flex-col justify-around">
      <footer className=" flex items-center justify-between h-full">
        <Link href="/">
          <img
            src="/img/logoIcon.png"
            alt=""
            className="md:w-[240px] sm:w-[200px] w-[130px] md:h-[110px] sm:h-[90px] h-[50px] cursor-pointer"
          />
        </Link>
        <div className="w-[30%] text-center md:block hidden">
          <p className="lg:text-[17px] text-[11px] text-white">
            Copyright © 2021 Grupo Radio Centro. Todos los derechos reservados .
          </p>
          <p className="lg:text-[17px] text-[11px] text-white">
            Términos de Servicio y Políticas de Privacidad de Youtube
          </p>
        </div>
        <div className="text-center space-y-2">
          <p className="text-base font-semibold text-white">Síguenos</p>
          <div className="flex sm:gap-4 gap-2">{renderFooterIcons}</div>
        </div>
      </footer>
      <div className="w-full text-center md:hidden block">
        <p className="lg:text-[17px] text-[11px] text-white">
          Copyright © 2021 Grupo Radio Centro. Todos los derechos reservados .
        </p>
        <p className="lg:text-[17px] text-[11px] text-white">
          Términos de Servicio y Políticas de Privacidad de Youtube
        </p>
      </div>
    </div>
  );
};

export default Footer;
