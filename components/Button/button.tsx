import { cn } from "@/utils/functions";
import React, { useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  isLoading = false,
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  className?: string;
  onClick?: () => void;
  animation?: string;
  link?: string;
  linkOpensInNewTab?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  /* -------------------------------------------------------------------------------------------------
   * Returned tsx
   * -----------------------------------------------------------------------------------------------*/

  return (
    <button
      type={type}
      disabled={isLoading}
      className={cn(
        "bg-primary text-text font-semibold text-base hover:scale-105 flex items-center justify-center rounded-full hover:shadow-xl hover:brightness-110 gap-4 py-2 px-8 active:scale-95 transition-all duration-200 ease-in relative w-fit cursor-pointer",
        {
          "hover:shadow-primary/20": variant === "primary",
          "bg-tertiary hover:shadow-tertiary/20": variant === "tertiary",
          "hover:shadow-primary/30 hover:bg-primary border border-white bg-transparent font-quicksand font-semibold py-1.5  px-3.5 rounded-xl text-white":
            variant === "outline",
          "bg-transparent py-4 rounded-full hover:shadow-primary/20 border text-white border-primary":
            variant === "secondary",
          "opacity-50 active:scale-100": isLoading,
        },
        className
      )}
      onClick={onClick}
      {...props}
      ref={buttonRef}
    >
      {" "}
      <div
        className={cn({
          "ml-5 relative": isLoading,
        })}
      >
        {isLoading && (
          <div className="z-[999] absolute top-1/2 -left-8 -translate-y-[40%]">
            <ClipLoader
              color={"#fff"}
              loading={isLoading}
              size={18}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
        {children}
      </div>
    </button>
  );
}
