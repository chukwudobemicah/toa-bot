import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/functions";
import Icon from "../icon-selector/icon-selector";
import useChatBoxIsOpenStore from "@/utils/store/useChatBoxIsOpenStore";
import Message from "../Message/Message";

export type Position = "receiver" | "sender";

export default function Page3ChatBox() {
  const [inputValue, setInputValue] = useState<string>("");
  const [messages, setMessages] = useState<MessageType[]>([]);

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

  const [showNote, setShowNote] = useState(true);

  const { chatboxIsOpen } = useChatBoxIsOpenStore();
  const questions = [
    "Machine learning vs. deep learning: what's the difference?",
    "What's the deal with proof-of-work vs. proof-of-stake?",
    "How does natural selection work?",
    "Stack vs. queue: what's the difference?",
    "Can you explain the Turing test?",
  ];
  return (
    <div
      className={cn(
        "flex w-full z-50 max-md:left-0 right-0 left-0 max-lg:h-[calc(100dvh-74px)] h-dvh transition-transform duration-500  ease-in-out bg-background relative flex-col box-border max-h-full flex-grow",
        {
          "max-lg:translate-x-0": chatboxIsOpen,
        }
      )}
    >
      <h1 className="text-white sticky pt-2 pb-4 bg-background top-0 left-0 font-quicksand text-xl font-bold text-center">
        Social Tensor
      </h1>
      <audio ref={audioRef} src="/audio/sent_message.wav" />

      <div
        ref={chatBoxContainerRef}
        className="flex-grow h-[80vh] overflow-y-clip pb-12"
      >
        {messages.length < 1 && (
          <div className=" text-white h-full flex flex-col items-center p-6">
            {/* Title */}

            {/* Note Section */}
            {showNote && (
              <div className="bg-secondary border border-white/10 text-gray-300 py-2 px-3 rounded-lg flex items-center justify-between max-w-lg w-full text-xs mb-8">
                <p>
                  Note: Due to the nascent nature of Bittensor, subnets and
                  their APIs are often unstable. In order to make this service
                  conducive for production use, we use Akash as a fallback for
                  requests that fail.
                </p>
                <button
                  onClick={() => setShowNote(false)}
                  className="ml-4 text-gray-500 hover:text-white transition-colors"
                >
                  <Icon iconType={"cancel"} className="w-3" />
                </button>
              </div>
            )}

            <div className="flex flex-col gap-4 flex-grow items-center justify-center">
              {/* Suggested Questions Section */}
              <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">Suggested Questions</h2>
                <p className="text-gray-400 text-xs">
                  Questions that you might want to ask
                </p>
              </div>

              {/* Questions Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-4/5 mx-auto">
                {questions.map((question, index) => (
                  <button
                    key={index}
                    className="flex hover:brightness-150 transition-all duration-300 ease-in-out cursor-pointer items-center gap-3 bg-secondary border border-white/10 py-1.5 px-3 rounded-lg text-xs"
                  >
                    <div>
                      <Icon iconType={"star"} className="w-4" />
                    </div>
                    <p>{question}</p>
                  </button>
                ))}
              </div>
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
                <input name="image" id="image" className="hidden" type="file" />
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

// import { useState } from "react";

// export default function SuggestedQuestions() {

//   return (

//   );
// }
