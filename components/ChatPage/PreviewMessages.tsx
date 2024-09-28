import React from "react";
import Icon from "../icon-selector/icon-selector";
import useChatBoxIsOpenStore from "@/utils/store/useChatBoxIsOpenStore";

const previewMessages = [
  {
    id: 1,
    image: "/path/to/image1.jpg", // Replace with a valid image path
    lastMessage: "Hey, how's it going?",
    name: "John Doe",
    time: "09:45 AM",
    isTyping: false,
    messageSeen: true,
    isActive: true,
    isMute: false,
    newMessages: 2,
  },
  {
    id: 2,
    image: "/path/to/image2.jpg",
    lastMessage: "I'll call you later.",
    name: "Jane Smith",
    time: "10:15 AM",
    isTyping: false,
    messageSeen: false,
    isActive: false,
    isMute: true,
    newMessages: 5,
  },
  {
    id: 3,
    image: "/path/to/image3.jpg",
    lastMessage: "Are we still on for today?",
    name: "Mike Johnson",
    time: "12:30 PM",
    isTyping: true,
    messageSeen: false,
    isActive: true,
    isMute: false,
    newMessages: 0,
  },
  {
    id: 4,
    image: "/path/to/image4.jpg",
    lastMessage: "See you soon!",
    name: "Emily Davis",
    time: "01:00 PM",
    isTyping: false,
    messageSeen: true,
    isActive: false,
    isMute: false,
    newMessages: 1,
  },
  {
    id: 5,
    image: "/path/to/image5.jpg",
    lastMessage: "",
    name: "Sarah Lee",
    time: "02:10 PM",
    isTyping: true,
    messageSeen: false,
    isActive: false,
    isMute: true,
    newMessages: 0,
  },
];

export default function PreviewMessages() {
  const { setChatboxIsOpen } = useChatBoxIsOpenStore();
  return (
    <div className="w-full lg:min-w-[340px]">
      <div className="relative mb-4">
        <Icon
          iconType="search"
          className="text-pry left-4 top-1/2 -translate-y-1/2 absolute w-4 text-[#747881]"
        />
        <input
          type="text"
          placeholder="Type to search..."
          className="bg-transparent rounded-xl outline-none border-[#292D32] border pl-12 ring-primary pr-2 focus:border-primary focus-within:border-primary text-text-secondary h-[47px] placeholder:text-[#747881] w-4/5"
        />
      </div>
      <div className="flex flex-col flex-grow-0 gap-1">
        {previewMessages.map(
          (
            {
              lastMessage,
              name,
              time,
              isTyping,
              messageSeen,
              isActive,
              isMute,
              newMessages,
            },
            index
          ) => {
            return (
              <div
                className="flex relative group rounded-sm transition-colors duration-200 ease-in py-3 px-2 cursor-pointer gap-4 justify-between items-center"
                key={index}
                onClick={() => {
                  setChatboxIsOpen(true);
                }}
              >
                <div className="absolute pointer-events-none opacity-0 ease-out duration-300 transition-all group-hover:opacity-90 top-0 left-0 w-full h-full z-10 bg-card-gradient" />
                <div className="flex gap-4 items-center">
                  <div className="relative">
                    {isActive && (
                      <div className="p-1 bg-background rounded-full absolute -right-1 -top-0.5">
                        <div className="size-2.5 z-10 rounded-full bg-positive" />
                      </div>
                    )}
                    <img
                      src={"https://placehold.co/48x48"}
                      alt={`${name} profile picture`}
                      className="rounded-full select-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold text-lg">{name}</p>
                    {lastMessage && !isTyping && (
                      <p className="text-text-secondary max-xs:w[150px] w[250px] shorten-text">
                        {lastMessage}
                      </p>
                    )}
                    {isTyping && (
                      <p className="text-text-secondary">Typing...</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {newMessages > 0 && !isMute && (
                    <p className="bg-negative text-xs text-black font-semibold px-2 p-1 rounded-full">
                      {newMessages}
                    </p>
                  )}
                  {isMute && (
                    <Icon iconType="mute" className="w-5 text-[#747881]" />
                  )}
                  <div className="flex gap-2">
                    {messageSeen && <Icon iconType="check" className="w-4" />}
                    <p className="text-text-secondary whitespace-nowrap">
                      {time}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
