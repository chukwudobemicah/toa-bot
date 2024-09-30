import React, { useEffect } from "react";
import { cn } from "@/utils/functions";
import Icon from "../icon-selector/icon-selector";
import Link from "next/link";
import useSidebarStore from "@/utils/store/useSidebarStore";
import { useRouter } from "next/router";
import useScreenSize from "@/utils/hooks/useScreenSize";
import { motion } from "framer-motion";

export const SIDEBAR_LINK = [
  {
    text: "Home",
    linkto: "/",
    icon: "home", // Home icon string
  },
  {
    text: "Page Two",
    linkto: "/page-2",
    icon: "tabOne", // Chat icon string
  },
  {
    text: "Page Three",
    linkto: "/page-3",
    icon: "tabTwo", // Profile icon string
  },
  {
    text: "Page four",
    linkto: "/page-4",
    icon: "tabThree", // About Us icon string
  },
  {
    text: "Page five",
    linkto: "/page-5",
    icon: "tabFour", // Tier List icon string
  },
  // {
  //   text: "Page five",
  //   linkto: "/page-5",
  //   icon: "tabFive", // Tier List icon string
  // },
  // {
  //   text: "History",
  //   linkto: "/history",
  //   icon: "history", // History icon string
  // },
  // {
  //   text: "Sales",
  //   linkto: "/sales",
  //   icon: "sales", // Sales icon string
  // },
];

export default function Sidebar() {
  const {
    isMobileSidebarOpen,
    setIsMobileSidebarOpen,
    sidebarIsOpen,
    setSidebarIsOpen,
  } = useSidebarStore();
  const router = useRouter();
  const { screenWidth } = useScreenSize();

  useEffect(() => {
    console.log(screenWidth, screenWidth < 760, "screenWidth");

    if (screenWidth < 760) {
      setSidebarIsOpen(true);
    }
    if (screenWidth > 760) {
      setSidebarIsOpen(false);
    }
  }, []);

  return (
    <aside
      id="sidebar"
      className={cn(
        " overflow-x-clip bg-background max-md:-translate-x-[100%] overflow-y-scroll transition-all duration-300 ease-in-out max-md:z-[9999] z-[10]  w-[200px] px-4 pb-10 pt-8 justify-between flex flex-col max-lg:shadow-sm max-lg:shadow-black h-dvh fixed left-0 top-0 max-lg-translate-x-full",
        {
          "max-md:translate-x-0 z-30 w-[250px]": isMobileSidebarOpen,
          "md:w-[90px] !px-4 !overflow-hidden": !sidebarIsOpen,
        }
      )}
    >
      <div className="flex flex-col gap-6 relative">
        <div className="flex items-center gap-2 mb-2">
          <div
            className={cn("w-6 ", {
              "w-fit mx-auto": !sidebarIsOpen,
            })}
          >
            <Icon iconType={"logo"} className="w-16" />
          </div>
        </div>
        <ul
          className={cn("flex flex-col gap-4", {
            "items-center": !sidebarIsOpen,
          })}
        >
          {SIDEBAR_LINK.map((link, index) => {
            return (
              <Link
                href={link.linkto}
                className={cn("cursor-pointer")}
                onClick={() => {
                  setTimeout(() => setIsMobileSidebarOpen(false), 200);
                }}
                key={index}
              >
                <div
                  className={cn(
                    `relative group cursor-pointer flex transition-all duration-300 ease-in-out  gap-3 py-2 w-full  items-center rounded-full text-text`,
                    {
                      "bg- text-white":
                        link?.linkto?.toLowerCase() ===
                        router.pathname.toLowerCase(),
                      "hover:bg[#232778] text-white":
                        link?.linkto?.toLowerCase() !==
                        router.pathname.toLowerCase(),
                      "hover:bg-white/20 hover:blursm":
                        link?.linkto?.toLowerCase() !==
                        router.pathname.toLowerCase(),
                      "aspect-square size-9 justify-center": !sidebarIsOpen,
                      "pl-4": sidebarIsOpen,
                    }
                  )}
                >
                  <Icon
                    iconType={link.icon}
                    className={cn("w-[1.5rem] text-text", {
                      "text-white":
                        link?.linkto?.toLowerCase() ===
                        router.pathname.toLowerCase(),
                    })}
                  />
                  {sidebarIsOpen && (
                    <p className={cn("font-medium text-sm font-lato")}>
                      {link.text}
                    </p>
                  )}
                  {link?.linkto?.toLowerCase() ===
                    router.pathname.toLowerCase() && (
                    <motion.div
                      layoutId="sidebar-tab-animation"
                      className="w-full z-[-1] rounded-full h-full bg-primary absolute left-0 top-0"
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
      {/*  */}
      <div
        className={cn("py-2 w-full font-lato flex flex-col gap-6 mt-8", {
          "aspect-square size-12 justify-center px-0 py-4 mx-auto":
            !sidebarIsOpen,
          "pl-5": sidebarIsOpen,
        })}
      >
        {/* <Link
          href={"/chat"}
          className={cn("flex items-center gap-4 text-sm justify-between", {
            "justify-center": !sidebarIsOpen,
          })}
        >
          <div className={cn("flex items-center gap-4")}>
            <div className="mx-auto w-4">
              <Icon iconType={"messages"} className="" />
            </div>
            {sidebarIsOpen && <p>Messages</p>}
          </div>
          {sidebarIsOpen && (
            <p className="size-[20px] bg-notification rounded-full text-center text-xs font-bold">
              2
            </p>
          )}
        </Link> */}
        {/* <Link
          href={"/chat"}
          className={cn("flex items-center gap-4 text-sm justify-between", {
            "justify-center": !sidebarIsOpen,
          })}
        >
          <div className="flex items-center gap-4">
            <div>
              <Icon iconType={"notifications"} className="w-4" />
            </div>
            {sidebarIsOpen && <p>Notifications</p>}
          </div>
          {sidebarIsOpen && (
            <p className="size-[20px] bg-notification rounded-full text-center text-xs font-bold">
              2
            </p>
          )}
        </Link> */}
        <div
          className={cn("flex items-center gap-4 text-sm justify-between", {
            "justify-center": !sidebarIsOpen,
          })}
        >
          <div className="flex group cursor-pointer items-center gap-4">
            <div>
              <Icon
                iconType={"logout"}
                className="w-4 group-hover:text-red-600 transition-all duration-300 ease-in-out"
              />
            </div>
            {sidebarIsOpen && (
              <p className="group-hover:text-red-600 transition-all duration-300 ease-in-out">
                Logout
              </p>
            )}
          </div>
        </div>
        <div
          className={cn("flex items-center gap-4 text-sm justify-between", {
            "justify-center": !sidebarIsOpen,
          })}
        >
          <div className="group cursor-pointer flex items-center gap-4">
            <div>
              <Icon
                iconType={"settings"}
                className="w-4 group-hover:text-primary transition-all duration-300 ease-in-out"
              />
            </div>
            {sidebarIsOpen && (
              <p className="group-hover:text-primary transition-all duration-300 ease-in-out">
                Settings
              </p>
            )}
          </div>
        </div>

        {/*  */}
        {/* <div
          className={cn(
            "mt-4 flex text-sm font-bold font-roboto items-center gap-2",
            {
              "justify-center": !sidebarIsOpen,
            }
          )}
        >
          <img
            src={"https://placehold.co/24x24"}
            alt={`$profile picture`}
            className="rounded-full select-none"
          />
          {sidebarIsOpen && <p>0xb1…cF650xb</p>}
        </div> */}
      </div>
    </aside>
  );
}
