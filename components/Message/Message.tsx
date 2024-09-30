import { cn } from "@/utils/functions";
import React from "react";

type MessageProps = {
  messages: MessageType[];
};

const Message = ({ messages }: MessageProps) => {
  return (
    <>
      {messages.map(({ id, message, position, name, imageMessageUrl }) => {
        console.log("imageMessageUrl", imageMessageUrl);

        return (
          <div
            key={id}
            className={cn(
              "self-start  flex flex-col relative gap-5 py-4 w-full ma-w-[90%]",
              {
                "bg-receiver-gradient": position === "receiver",
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
                    "bg-sender px-1":
                      position === "sender" && message && message !== "",
                  })}
                >
                  {imageMessageUrl && (
                    <div className="lg:max-w-[300px] overflow-hidden">
                      <img
                        src={imageMessageUrl}
                        alt="Selected File Preview"
                        className="rounded-xl object-cover"
                      />
                    </div>
                  )}
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

export default Message;
