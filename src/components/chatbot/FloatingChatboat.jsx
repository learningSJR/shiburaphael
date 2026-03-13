import React, { useState, useEffect, useRef } from "react";
import { suggestedQuestions } from "../../chatbot-data/suggestedQuestions";
import { sendMessageEngine } from "../../chatbot-engine/sendMessage";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import Message from "./Message";

function FloatingChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const sendMessage = (question) => {
    const text = question || input;

    if (!text.trim()) return;

    setInput("");

    sendMessageEngine(text, setMessages, setTyping);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  const [messages, setMessages] = useState([
    {
      text: "Hello 👋 I'm Shibu's AI Resume Assistant. Ask me interview questions about my UX, React, projects or experience.",
      sender: "bot",
    },
  ]);

  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  /* ---------------- UI ---------------- */

  return (
    <>
      {/* Chat Window */}

      <div
        className={`fixed bottom-24 right-4 z-[9998] w-[92vw] sm:w-[380px] md:w-[420px] h-[75vh] max-h-[640px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between px-4 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <img
              src="/shibu-sjr.jpg"
              alt="Shibu"
              className="object-cover border-2 rounded-full w-9 h-9 border-white/40"
            />
            {/* Title */}
            <div>
              <h3 className="font-semibold">AI Resume Assistant</h3>
              <p className="text-xs opacity-90">Ask me about Shibu</p>
            </div>
          </div>
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>

        {/* Messages */}
        {/* overflow-y-scroll */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
          {messages.map((msg, i) => (
            <Message key={i} text={msg.text} sender={msg.sender} />
          ))}

          {typing && (
            <div className="text-sm text-gray-500">AI is typing...</div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Suggested Questions */}

        <div className="px-3 py-2 overflow-y-auto border-t bg-gray-50 max-h-32">
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="px-3 py-1 text-xs bg-white border rounded-full hover:bg-gray-100"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}

        <div className="flex gap-2 p-3 bg-white border-t">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask an interview question..."
            className="flex-1 px-3 py-2 border rounded-lg outline-none resize-none max-h-32"
          />

          <button
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            className="px-4 py-2 text-white bg-indigo-600 rounded-lg disabled:opacity-40"
          >
            Send
          </button>
        </div>
      </div>

      {/* Floating Button */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed right-4 bottom-6 z-[9999] flex items-center justify-center w-14 h-14 text-white bg-indigo-600 rounded-full shadow-xl hover:scale-110 transition"
      >
        <HiChatBubbleLeftRight size={26} />
      </button>
    </>
  );
}

export default React.memo(FloatingChatbot);
