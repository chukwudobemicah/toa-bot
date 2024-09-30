import Button from "@/components/Button/button";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const cardData = [
    {
      title: "Social Tensor",
      imageSrc: "/images/your_image.png",
      buttonText: "Subnet 18",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/your_image.png",
      buttonText: "Subnet 18",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/your_image.png",
      buttonText: "Subnet 18",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/your_image.png",
      buttonText: "Subnet 18",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/your_image.png",
      buttonText: "Subnet 18",
    },
    {
      title: "Social Tensor",
      imageSrc: "/images/your_image.png",
      buttonText: "Subnet 18",
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
        {cardData.map(({ title, buttonText }, index) => {
          return (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="border-b hover:brightness-150 transition-all duration-300 ease-in-out group border-b-[#818AB1] pb-4"
            >
              <div className="relative group cursor-pointer overflow-hidden bg-background h-[200px] rounded-lg shadow-lg p-4 flex items-center gap-4 w-full">
                <div className="flex flex-col justify-between h-full">
                  <h3 className="text-white text-2xl font-bold">{title}</h3>
                  <Button
                    variant="outline"
                    className="group-hover:!bg-primary font-quicksand mt-2 w-fit text-sm"
                  >
                    {buttonText}
                  </Button>
                </div>
                <Image
                  src={"/images/tensor-ball.webp"}
                  alt="tensor ball"
                  width={200}
                  height={200}
                  priority
                  className="absolute h-[140%] w-auto  group-hover:scale-125 group-hover:rotate-45 transition-all duration-300 ease-linear -top-6 right-0 aspect-square"
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
