import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/functions";
import Icon from "../icon-selector/icon-selector";
import useChatBoxIsOpenStore from "@/utils/store/useChatBoxIsOpenStore";
import Message from "../Message/Message";
import { motion } from "framer-motion";

export type Position = "receiver" | "sender";

export default function Page2ChatBox() {
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[]>([]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const [selected, setSelected] = useState("Text to Image");

  const options = ["Text to Image", "Image to Image", "Inpaint", "Avatar"];
  const chatBoxBottomRef = useRef<HTMLDivElement | null>(null);
  const chatBoxContainerRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const chatBoxBottom = chatBoxBottomRef.current;
    if (chatBoxBottom instanceof HTMLElement) {
      const scrollChatToBottom = () => {
        chatBoxBottom.scrollTo({
          top: chatBoxBottom.scrollHeight,
        });
      };
      scrollChatToBottom();
      setTimeout(() => scrollChatToBottom(), 50);
    }
  }, [messages]); // Scroll to the bottom when messages update

  const { chatboxIsOpen } = useChatBoxIsOpenStore();

  const [, setSelectedFile] = useState<File | null>(null);
  const [chosenImage, setChosenImage] = useState<string>("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setChosenImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setChosenImage("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() || chosenImage) {
      const newMessage: MessageType = {
        id: messages.length + 1,
        message: inputValue,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        position: "sender",
        imageMessageUrl: chosenImage ?? false,
      };
      setMessages([...messages, newMessage]);
      setInputValue(""); // Clear the input after sending the message
      setChosenImage("");
      setSelectedFile(null);
    }
  };
  return (
    <div
      className={cn(
        "flex w-full z-50 max-md:left-0 right-0 left-0 max-lg:h-[calc(100dvh-74px)] h-dvh transition-transform duration-500  ease-in-out bg-background relative flex-col box-border max-h-full flex-grow",
        {
          "max-lg:translate-x-0": chatboxIsOpen,
        }
      )}
    >
      <div className="sticky border border-border mx-auto mt-4 top-0 left-0 flex w-fit items-center space-x-1 p-1 rounded-full">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setSelected(option)}
            className={`relative px-4 py-2 text-xs rounded-full transition-colors ${
              selected === option
                ? "text-white"
                : "bg-transparent text-gray-400 hover:text-white"
            }`}
          >
            {option}
            {selected === option && (
              <motion.div
                layoutId="options-animation"
                className="w-full z-[-1] rounded-full h-full bg-[#171A20] absolute left-0 top-0"
              />
            )}
          </button>
        ))}
      </div>
      <audio ref={audioRef} src="/audio/sent_message.wav" />

      <div
        ref={chatBoxContainerRef}
        className="flex-grow h-[80vh] overflow-y-clip pb-12"
      >
        {messages.length < 1 && (
          <div className=" text-white h-full flex flex-col items-center justify-center p-6">
            {/* Title */}

            <div className="w-4/5 max-w-[600px] rounded-2xl h-[300px] flex items-center justify-center bg-secondary border-2 border-border">
              <div>
                <Icon iconType={"picture"} className="w-6 text-text-tertiary" />
              </div>
            </div>
            <div className="flex mt-4 font-segoe-ui-symbol text-sm gap-4 items-center">
              <button className="bg-[#171A20] rounded-md px-3 py-1.5 transition-all duration-300 ease-in-out hover:brightness-150 cursor-pointer">
                <p className="bg-text-gradient bg-clip-text text-transparent ">
                  Reset
                </p>
              </button>
              {/*  */}
              <button className="bg-[#171A20] rounded-md px-3 py-1.5 transition-all duration-300 ease-in-out hover:brightness-150 cursor-pointer">
                <p className="opacity-70 bg-text-gradient bg-clip-text text-transparent ">
                  Reimagine
                </p>
              </button>
            </div>
          </div>
        )}
        <div
          ref={chatBoxBottomRef}
          className="w-full overflow-y-auto h-full scroll-container relative flex flex-col pb-8 px-4"
        >
          <Message messages={messages} />
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-full">
        {chosenImage && (
          <div className="relative flex w-full items-end justify-end">
            <div className="relative w-[300px] -translate-x-4">
              <button
                className="absolute z-50 -top-4 -left-4"
                onClick={() => {
                  setChosenImage("");
                }}
              >
                {/* close */}
                <Icon iconType="close" className="w-8" />
              </button>
              <img
                src={chosenImage}
                alt="Selected File preview"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="relative bg-background flex px-4 w-full gap-4 items-center"
        >
          <div className="relative flex-grow">
            <div className="flex w-full gap-4 items-center rounded-[18px]  text-sm bg-secondary border border-border pr-4 pl-4 h-[55px]">
              <label
                className="cursor-pointer hover:text-primary text-text-secondary transition-colors duration-300 ease-in"
                htmlFor="image"
              >
                <Icon iconType="imageClip" className="w-4" />
                <input
                  onChange={handleFileChange}
                  name="image"
                  id="image"
                  className="hidden"
                  type="file"
                />
              </label>
              <input
                type="text"
                placeholder="Type Your Message"
                className="whitespace-normal bg-transparent max-w-full w-full text-text-secondary placeholder:text-text-secondary"
                value={inputValue}
                onChange={handleMessageChange}
              />
              <button className="bg-text-gradient bg-clip-text text-transparent">
                Send
              </button>
            </div>
          </div>
          {/* <button
            type="submit"
            className={cn(
              "bg-[#B4B7BB] transition-colors duration-300 aspect-square pl-2.5 p-2",
              {
                "bg-sender": inputValue.length >= 1,
              }
            )}
          >
            <Icon iconType="plane" className="w-5 text-text-tertiary" />
          </button> */}
        </form>
      </div>
    </div>
  );
}
