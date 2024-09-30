import React, { ReactNode } from "react";
import { cn } from "@/utils/functions";
import Overlay from "../Overlay/Overlay";
import useStopScroll from "@/utils/hooks/useStopScroll";
import useSidebarStore from "@/utils/store/useSidebarStore";
import { Quicksand } from "next/font/google";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Siderbar";
import localFont from "next/font/local";
import { useRouter } from "next/router";

// Segoe UI Symbol
const segoeUISymbol = localFont({
  src: "../../assets/fonts/segoe-ui-symbol.ttf",
  variable: "--segoe-ui-symbol",
  // weight: "100 900",
});

const segoeUi = localFont({
  src: [
    {
      path: "../../assets/fonts/segoe-ui/Segoe UI.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/segoe-ui/Segoe UI Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/segoe-ui/Segoe UI Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/segoe-ui/Segoe UI Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--segoe-ui",
});

const quicksand = Quicksand({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--quicksand",
});

export default function Layout({ children }: { children: ReactNode }) {
  const { isMobileSidebarOpen, setIsMobileSidebarOpen, sidebarIsOpen } =
    useSidebarStore();
  useStopScroll(isMobileSidebarOpen);
  const router = useRouter();

  return (
    <div
      id="layout"
      className={cn(
        `relative w-full justify-center min-h-screen flex font-segeo-ui flex-col ${segoeUi.className} ${quicksand.className} ${segoeUISymbol.className}`
      )}
    >
      <Nav />
      {/* <Overlay
        isOpen={isMobileSidebarOpen}
        onClick={() => {
          setIsMobileSidebarOpen(false);
          // setIsAddChatOpen(false);
        }}
      /> */}
      <Sidebar />
      <div
        className={cn(
          "ml-auto relative max-md:w-full z-[-1] ease-in-out transition-all  overflow-x-clip duration-300 main-content flex-grow md:max-w-[calc(100%-200px)] pb-8 md:w-[calc(100%-200px)] md:flex-grow ",
          {
            " md:max-w-[calc(100%-90px)] md:w-[calc(100%-90px)] ":
              !sidebarIsOpen,
            "h-screen max-lg:h-[calc(100vh-84px)] overflow-clip":
              router.pathname !== "/page-4",
          }
        )}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
