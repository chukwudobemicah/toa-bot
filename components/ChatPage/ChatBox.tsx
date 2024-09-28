import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/functions";
import Icon from "../icon-selector/icon-selector";
import Chat from "./Message";
import useChatBoxIsOpenStore from "@/utils/store/useChatBoxIsOpenStore";

export type Position = "receiver" | "sender";

export type MessageType = {
  id: number;
  message: string;
  name?: string; // Optional since not all messages have a name
  senderImage?: string;
  time: string;
  position: Position;
};

export default function ChatBox() {
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: 1,
      message: "Hey! How are you?",
      time: "10:00 AM",
      senderImage: "/path",
      name: "Jack",
      position: "receiver",
    },
    {
      id: 2,
      message: "I'm doing well, thank you!",
      time: "10:02 AM",
      senderImage: "/path",
      name: "Jack",
      position: "sender",
    },
    {
      id: 3,
      message: "That's great to hear!",
      time: "10:05 AM",
      senderImage: "/path",
      name: "Jack",
      position: "receiver",
    },
  ]);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage: MessageType = {
        id: messages.length + 1,
        message: inputValue,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        position: "sender",
      };
      setMessages([...messages, newMessage]);
      setInputValue(""); // Clear the input after sending the message
    }
  };

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

  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject: { emoji: string }) => {
    if (!emojiObject) return;
    setInputValue((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const { setChatboxIsOpen, chatboxIsOpen } = useChatBoxIsOpenStore();

  return (
    <div
      className={cn(
        "flex max-md:w-full lg:min-w-[600px] z-50 max-md:left-0 right-0 left-0 h-dvh max-sm:w-screen transition-transform duration-500  ease-in-out bg-background relative flex-col box-border max-h-full flex-grow max-lg:w-screen max-lg:translate-x-[200%] max-lg:absolute",
        {
          "max-lg:translate-x-0": chatboxIsOpen,
        }
      )}
    >
      <audio ref={audioRef} src="/audio/sent_message.wav" />

      <div className="px-4 flex border-b border-b-border pb-2 w-full gap-4 items-center">
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between lg:gap-2 items-center">
            <div className="flex items-center gap-4">
              <img
                src={"https://placehold.co/36x36"}
                className="rounded-full"
              />
              <p className="text-base font-mulish shorten-text max-sm:max-w-[150px] max-lg:max-w[200px] text-text-secondary">
                MadApes Calls
              </p>
            </div>
            {/*  */}
            <div
              onClick={() => {
                setChatboxIsOpen(false);
              }}
            >
              <Icon iconType={"cancel"} className="w-4" />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={chatBoxContainerRef}
        className="flex-grow h-[80vh] overflow-y-clip pb-12"
      >
        <div
          onClick={() => {
            setShowPicker(false);
          }}
          ref={chatBoxBottomRef}
          className="w-full overflow-y-auto h-full scroll-container relative flex flex-col gap-6 pt-6 pb-8 px-4"
        >
          <Chat messages={messages} />

          {/* {showPicker && (
            <div className="absolute z-50 left-1/2 top-0 -translate-x-1/2">
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          )} */}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-full">
        <form
          onSubmit={handleSubmit}
          className="relative bg-background flex px-4 w-full gap-4 items-center"
        >
          <label
            className="cursor-pointer hover:text-primary text-text-secondary transition-colors duration-300 ease-in"
            htmlFor="image"
          >
            <Icon iconType="add" className="w-7" />
            <input name="image" id="image" className="hidden" type="file" />
          </label>
          <div className="relative flex-grow">
            <div onClick={() => setShowPicker(true)}>
              <Icon
                iconType="smileyFace"
                className="right-4 top-1/2 w-7 -translate-y-1/2 absolute  text-text-secondary"
              />
            </div>
            <div className="flex w-full gap-4 flex-col">
              <input
                type="text"
                placeholder="Type Your Message"
                className="whitespace-normal border border-text-secondary bg-transparent text-white max-w-full w-full rounded-full pr-12 pl-4 h-[47px] placeholder:text-text-secondary"
                value={inputValue}
                onChange={handleMessageChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className={cn(
              "bg-[#B4B7BB] transition-colors duration-300 aspect-square pl-2.5 p-2",
              {
                "bg-sender": inputValue.length >= 1,
              }
            )}
          >
            <Icon iconType="plane" className="w-5 text-text-tertiary" />
          </button>
        </form>
      </div>
    </div>
  );
}
