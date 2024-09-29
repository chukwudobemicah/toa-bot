import { cn } from "@/utils/functions";
import React, { useState } from "react";
import { MessageType } from "./ChatBox";
import Icon from "../icon-selector/icon-selector";
import EmojiPicker from "./EmojiPicker";
import MoreActions from "./MoreActions";

type ChatProps = {
  messages: MessageType[];
};

const Chat = ({ messages }: ChatProps) => {
  // Define the selectedEmoji as an object with number keys and string values
  const [selectedEmoji, setSelectedEmoji] = useState<Record<number, string>>(
    {}
  );
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const onEmojiClick = (emoji: string, messageId: number) => {
    setSelectedEmoji((prev) => ({
      ...prev,
      [messageId]: emoji, // Dynamically set the emoji for the given message ID
    }));
    setIsPickerVisible(false); // Hide the picker after selection
  };

  return (
    <>
      {messages.map(({ id, message, position, time, senderImage, name }) => {
        const emojiForMessage = selectedEmoji[id]; // Retrieve the emoji for the current message
        return (
          <div
            key={id}
            className={cn(
              "self-start  flex flex-col relative gap-5 w-full ma-w-[90%]",
              {
                // "self-start items-start": position === "receiver",
              }
            )}
          >
            <div
              id={`message_${id}`}
              className={cn(
                "flex gap-4 group w-fit flex-row-reverse overflow-wrap",
                {
                  "flex-row-reverse": position === "receiver",
                }
              )}
            >
              <div
                className={cn("flex flex-col gap-1", {
                  "items-end": position === "sender",
                })}
              >
                <div
                  className={cn("w-fit rounded-lg", {
                    "self-start bg-receiver text-text":
                      position === "receiver" && message && message !== "",
                    "bg-sender px-1 pt-1":
                      position === "sender" && message && message !== "",
                  })}
                >
                  {message && message !== "" && (
                    <div className="max-w-[290px] relative flex flex-col gap-1.5">
                      <p
                        className={cn(
                          `${
                            position === "receiver" &&
                            "text-[#FECACA] font-semibold "
                          }`,
                          {
                            "text-text-tertiary": position === "sender",
                          }
                        )}
                      >
                        {position === "receiver" ? name : "You"}
                      </p>
                      <p className="text-[#D1D5DB]">{message}</p>
                    </div>
                  )}
                </div>
                {/*  */}
              </div>
              {/* {senderImage && ( */}
              <img
                src={"https://placehold.co/36x36"}
                alt={`${name} profile picture`}
                className="rounded-full select-none h-9"
              />
              {/* )} */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Chat;
