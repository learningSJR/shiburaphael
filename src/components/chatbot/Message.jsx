import React from "react";

function Message({ text, sender }) {
  const isUser = sender === "user";

  return (
    <div className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`
        px-4 py-3
        text-[14px]
        leading-relaxed
        max-w-[95%] md:max-w-[80%]
        w-fit
        break-words
        whitespace-pre-wrap
        rounded-2xl
        shadow-md
        ${
          isUser
            ? "bg-indigo-600 text-white rounded-br-none"
            : "bg-gray-100 text-gray-900 rounded-bl-none"
        }
      `}
      >
        {text}
      </div>
    </div>
  );
}

export default Message;
