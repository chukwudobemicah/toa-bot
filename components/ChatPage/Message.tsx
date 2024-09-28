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
              "self-end flex flex-col relative gap-4 items-end max-w-[90%]",
              {
                "self-start items-start": position === "receiver",
              }
            )}
          >
            <div
              id={`message_${id}`}
              className={cn("flex gap-4 items-center group overflow-wrap", {
                "flex-row-reverse": position === "receiver",
              })}
            >
              <div className="flex gap-2 -translate-y-[10px] transition-all duration-200 ease-in-out items-center group-hover:opacity-100 opacity-0">
                <MoreActions>
                  <div className="cursor-pointer p-3">
                    <Icon
                      iconType="more"
                      className="w-1 text-text-secondary cursor-pointer"
                    />
                  </div>
                </MoreActions>

                <div className="-translate-y-1">
                  <Icon
                    iconType="smileyFace"
                    className="w-5 text-text-secondary cursor-pointer"
                    onClick={() => {
                      setIsPickerVisible((prev) => !prev);
                    }}
                  />
                </div>

                {/* Custom Emoji Picker */}
                {isPickerVisible && (
                  <div className="absolute bottom-8 right-0 z-50">
                    <EmojiPicker
                      onSelectEmoji={(emoji) => onEmojiClick(emoji, id)}
                    />
                  </div>
                )}
              </div>

              <div
                className={cn("flex flex-col gap-1", {
                  "items-end": position === "sender",
                })}
              >
                <div
                  className={cn("w-fit rounded-lg text-text-tertiary", {
                    "self-start bg-receiver text-text":
                      position === "receiver" && message && message !== "",
                    "bg-sender px-1 pt-1":
                      position === "sender" && message && message !== "",
                  })}
                >
                  {message && message !== "" && (
                    <div className="px-3 py-2 pb-4 max-w-[290px] relative items-end flex gap-3">
                      <p>{message}</p>
                      {/* Display selected emoji on top of the message */}
                      {emojiForMessage && (
                        <div className="absolute z-[-1] top-[-24px] right-0 flex gap-2">
                          {emojiForMessage} {/* Display emoji */}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {/*  */}
                <div className="flex gap-3 text-text-secondary text-sm">
                  {name && position === "receiver" && (
                    <p className="font-bold">{name}</p>
                  )}
                  {position === "sender" && (
                    <Icon iconType="check" className="w-5" />
                  )}
                  <p
                    className={cn("", {
                      "float-right": position === "sender",
                    })}
                  >
                    {time}
                  </p>
                </div>
              </div>
              {senderImage && (
                <img
                  src={"https://placehold.co/36x36"}
                  alt={`${name} profile picture`}
                  className="rounded-full select-none h-9"
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Chat;
