import Button from "@/components/Button/button";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import { ReactElement } from "react";

export default function Home() {
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

  return (
    <main className="mt-6">
      <div className="grid bg-[#171A20] px-4 py-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {cardData.map(({ imageSrc, title, buttonText }, index) => {
          return (
            <div
              key={index}
              className="relative cursor-pointer group overflow-hidden bg-background h-[150px] rounded-lg shadow-lg p-4 flex items-center gap-4 w-full"
            >
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-white text-xl font-bold">{title}</h3>
                <Button variant="outline" className="mt-2 w-fit text-sm ">
                  {buttonText}
                </Button>
              </div>
              <Image
                src={"/images/tensor-ball.webp"}
                width={200}
                height={200}
                priority
                className="absolute group-hover:scale-125 group-hover:rotate-45 transition-all duration-300 ease-linear -top-6 h- right-0 aspect-square"
              />
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
