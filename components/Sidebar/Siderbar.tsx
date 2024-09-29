import React, { useEffect } from "react";
import { cn } from "@/utils/functions";
import Icon from "../icon-selector/icon-selector";
import Link from "next/link";
import useSidebarStore from "@/utils/store/useSidebarStore";
import { useRouter } from "next/router";
import useScreenSize from "@/utils/hooks/useScreenSize";

export const SIDEBAR_LINK = [
  {
    text: "Home",
    linkto: "/",
    icon: "home", // Home icon string
  },
  {
    text: "Chat",
    linkto: "/chat",
    icon: "chat", // Chat icon string
  },
  {
    text: "Profile",
    linkto: "/profile",
    icon: "profile", // Profile icon string
  },
  {
    text: "About Us",
    linkto: "/about",
    icon: "about", // About Us icon string
  },
  {
    text: "Tier List",
    linkto: "/tier-list",
    icon: "tierList", // Tier List icon string
  },
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
  }, [screenWidth]);

  return (
    <aside
      id="sidebar"
      className={cn(
        " overflow-x-clip bg-[#0E1147] md:bg-white/5 max-md:-translate-x-[100%] overflow-y-scroll transition-all duration-300 ease-in-out max-md:z-[9999] z-[10]  w-[200px] px-4 pb-10 pt-8 justify-between flex flex-col max-lg:shadow-sm max-lg:shadow-black h-dvh fixed left-0 top-0 max-lg-translate-x-full",
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
          {sidebarIsOpen && (
            <p className="text-base font-medium">KOL Manager</p>
          )}
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
                    `relative group cursor-pointer flex transition-all duration-300 ease-in-out  gap-3 py-2 w-full  items-center pl-5 rounded-full text-text`,
                    {
                      "bg-primary text-white":
                        link?.linkto?.toLowerCase() ===
                        router.pathname.toLowerCase(),
                      "hover:bg[#232778] text-white":
                        link?.linkto?.toLowerCase() !==
                        router.pathname.toLowerCase(),
                      "hover:bg-white/20 hover:blursm":
                        link?.linkto?.toLowerCase() !==
                        router.pathname.toLowerCase(),
                      "aspect-square w-8 justify-center pl-0": !sidebarIsOpen,
                    }
                  )}
                >
                  <Icon
                    iconType={link.icon}
                    className={cn("w-[1rem] text-text", {
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
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
      {/*  */}
      <div
        className={cn("py-2 w-full font-lato pl-5 flex flex-col gap-6 mt-8", {
          "aspect-square size-12 justify-center px-0 py-4 mx-auto":
            !sidebarIsOpen,
        })}
      >
        <Link
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
        </Link>
        <Link
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
        </Link>
        <div
          className={cn("flex items-center gap-4 text-sm justify-between", {
            "justify-center": !sidebarIsOpen,
          })}
        >
          <div className="flex items-center gap-4">
            <div>
              <Icon iconType={"settings"} className="w-4" />
            </div>
            {sidebarIsOpen && <p>Settings</p>}
          </div>
        </div>
        <div
          className={cn("flex items-center gap-4 text-sm justify-between", {
            "justify-center": !sidebarIsOpen,
          })}
        >
          <div className="flex items-center gap-4">
            <div>
              <Icon iconType={"logout"} className="w-4" />
            </div>
            {sidebarIsOpen && <p>Logout</p>}
          </div>
        </div>
        {/*  */}
        <div
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
        </div>
      </div>
    </aside>
  );
}
