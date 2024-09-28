import { cn } from "@/utils/functions";
import { AnimatePresence, motion } from "framer-motion";
import React, { MouseEvent } from "react";

type OverlayProps = {
  isOpen: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

const Overlay = ({ isOpen, className, onClick }: OverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClick}
          className={cn(
            "overlay fixed z-30 bg-black/40 overlay w-screen h-dvh top-0 left-0",
            className
          )}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
