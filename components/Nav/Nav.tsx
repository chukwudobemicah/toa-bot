import React, { useEffect, useState } from "react";
import Icon from "../icon-selector/icon-selector";
import { cn } from "@/utils/functions";
import useSidebarStore from "@/utils/store/useSidebarStore";
import Hamburger from "hamburger-react";
import Button from "../Button/button";
import Image from "next/image";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
    sidebarIsOpen,
    setSidebarIsOpen,
  } = useSidebarStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { setIsAddChatOpen, isAddChatOpen } = useSidebarStore();

  return (
    <nav
      className={cn(
        "w-full z-[999] lg:h-[0] md:w-[calc(100%-200px)] max-md:flex max-md:flex-col max-md:gap-4 ease-in-out transition-all duration-300 max-lg:pb-2 max-lg:pt-2 md:ml-auto bg-background text-white sticky h-fit -top-[1px] left-0 max-md:right-0",
        {
          " custom-shadow bg-background": isScrolled,
          " md:w-[calc(100%-90px)] ": !sidebarIsOpen,
        }
      )}
    >
      <div
        onClick={() => {
          setSidebarIsOpen(!sidebarIsOpen);

          console.log(sidebarIsOpen, "click");
        }}
        className="absolute max-md:hidden group transition-all duration-300 ease-in-out cursor-pointer -left-4 top-20 py-2 px-1.5 hover:brightness-150 bg-primary rounded-lg border-2 border-black"
      >
        <Icon
          iconType={"sidebarArrow"}
          className="w-2  group-hover:text-black transition-all duration-300 ease-in-out text-black rotate-180"
        />
      </div>

      <div className="flex items-center justify-between px-5 w-full h-full">
        <div
          onClick={() => {
            setIsMobileSidebarOpen(!isMobileSidebarOpen);
            setIsAddChatOpen(false);
          }}
          className="lg:hidden"
        >
          <Hamburger size={24} toggled={isMobileSidebarOpen} />
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <Image
            src={"/images/logo.webp"}
            width={64}
            height={64}
            className="size-[36px]"
          />
        </div>
        <div
          onClick={() => {
            setIsAddChatOpen(!isAddChatOpen);
            setIsMobileSidebarOpen(false);
            console.log("yes", isAddChatOpen);
          }}
          className="lg:hidden flex items-center gap-2"
        >
          <Icon iconType={"add"} className="w-6" />

          {/* <p className="font-bold">Kol Manager</p> */}
        </div>

        {/*  */}

        {/* <div className="w-fit ml-auto flex items-center gap-[1.06rem] px-4 justify-end md:pt-0">
          <div className="flex items-center gap-[1.06rem]">
            <div className="relative inline-block cursor-pointer">
              <div className="p-2.5 flex items-center justify-center rounded-full bg-[#35314D]">
                <Icon iconType="bell" className="w-4" />
              </div>
              <span className="absolute -top-1 -right-1 w-[1.11738rem] h-[1.125rem] flex-shrink-0 rounded-full bg-alert flex items-center justify-center text-[0.675rem]">
                8
              </span>
            </div>
            <div className="max-lg:hidden p-2.5 flex items-center justify-center rounded-full bg-[#35314D] cursor-pointer">
              <Icon iconType="user" className="w-4" />
            </div>
          </div>

          <Button className="py-2 px-4 md:px-[1.625rem] text-xs md:text-base">
            Connect Wallet
          </Button>
        </div> */}

        {/*  */}
      </div>
    </nav>
  );
}
