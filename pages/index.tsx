import Button from "@/components/Button/button";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/utils/functions";

export default function Home() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const cardData = [
    {
      title: "Social Tensor",
      imageSrc: "/images/tensor-ball.webp",
      buttonText: "Subnet 18",
      backgroundClass: "tensor-one",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/tensor-ball-2.webp",
      buttonText: "Subnet 18",
      backgroundClass: "tensor-two",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/tensor-ball-3.webp",
      buttonText: "Subnet 18",
      backgroundClass: "tensor-three",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/tensor-ball-4.webp",
      buttonText: "Subnet 18",
      backgroundClass: "tensor-four",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/tensor-ball-5.webp",
      buttonText: "Subnet 18",
      backgroundClass: "tensor-five",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/tensor-ball-6.webp",
      buttonText: "Subnet 18",
      backgroundClass: "tensor-six",
    },
  ];

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);
  // Interact with your favorite subnets
  return (
    <main className="mt-6">
      <div className="flex w-fit pt-1 pb-16 mx-auto flex-col font-segoe-ui-symbol justify-center items-center">
        <p className="text-2xl font-segoe-ui-symbol font-medium">
          Interact with your favorite subnets
        </p>
        <p className="text-sm font-medium">
          Make the Bittensor Ecosystem your Playground
        </p>
      </div>
      <div className="grid bg-[#171A20] px-4 py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  2xl:grid-cols-3 gap-3">
        {cardData.map(
          ({ title, buttonText, imageSrc, backgroundClass }, index) => {
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
                className="border-b group relative border-b-[#818AB1] pb-4"
              >
                <div className="w-full rounded-xl relative overflow-hidden bg-background">
                  <div
                    className={cn(
                      `absolute group-hover:scale-125 rotate-45 group-hover:rotate-0 group-hover:translate-x-0 transition-all duration-300 ease-linear size-[1500px] translate-x-full left-0 group-hover:-left-[70%] will-change-transform top-0 bg-text- z-[1] rounded-l-full ${backgroundClass}`
                    )}
                  />

                  <div className="max-xs:h-[150px] xs:aspect-[16/6] relative group cursor-pointer overflow-hidden  z-10 rounded-lg shadow-lg p-4 flex items-center gap-4 w-full">
                    {/*  */}

                    {/*  */}
                    <div className="flex flex-col justify-between h-full">
                      <h3 className="text-white text-2xl font-bold">{title}</h3>
                      <Button
                        variant="outline"
                        className="group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:!bg-primary font-quicksand mt-2 w-fit text-sm"
                      >
                        {buttonText}
                      </Button>
                    </div>
                    <Image
                      src={imageSrc}
                      alt="tensor ball"
                      width={200}
                      height={200}
                      priority
                      className="absolute tensor-ball group-hover:contrast-200 h-[140%] z-20 w-auto group-hover:scale-125 group-hover:rotate-45 transition-all duration-300 ease-linear will-change-transform -top-6 right-0 aspect-square"
                    />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// #454a59
// #4e4449
// #374543
// #4c4a58
// #55524e
// #56544d
