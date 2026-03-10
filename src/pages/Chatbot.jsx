import React, { useState, useEffect, useRef } from "react";
import Message from "../components/chatbot/Message";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I am your Academic Assistant. How can I help?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");
  const [context, setContext] = useState(null);
  const [typing, setTyping] = useState(false);

  const bottomRef = useRef(null);

  const students = {
    10234: { attendance: "87%", fees: "Paid", exam: "March 25" },
    10235: { attendance: "72%", fees: "Pending ₹12,000", exam: "March 25" },
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (textValue = input) => {
    if (!textValue.trim()) return;

    const userMessage = { text: textValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botReply = generateReply(textValue);
      setMessages((prev) => [...prev, botReply]);
      setTyping(false);
    }, 800);
  };

  const generateReply = (input) => {
    const text = input.toLowerCase();

    // Context: waiting for student ID
    if (context === "attendance") {
      setContext(null);
      const data = students[input];
      if (data) {
        return {
          text: `Your attendance is ${data.attendance}.`,
          sender: "bot",
        };
      }
      return { text: "Student ID not found.", sender: "bot" };
    }

    if (context === "fees") {
      setContext(null);
      const data = students[input];
      if (data) {
        return {
          text: `Your fee status: ${data.fees}.`,
          sender: "bot",
        };
      }
      return { text: "Student ID not found.", sender: "bot" };
    }

    if (text.includes("attendance")) {
      setContext("attendance");
      return {
        text: "Please provide your Student ID.",
        sender: "bot",
      };
    }

    if (text.includes("fees")) {
      setContext("fees");
      return {
        text: "Enter your Student ID to check fee status.",
        sender: "bot",
      };
    }

    if (text.includes("exam")) {
      return {
        text: "Your next exam is Data Structures on March 25.",
        sender: "bot",
      };
    }

    if (text.includes("timetable")) {
      return {
        text: "Your next class is Algorithms at 10:00 AM tomorrow.",
        sender: "bot",
      };
    }

    return {
      text: "I can help with attendance, exam schedule, timetable, or fees.",
      sender: "bot",
    };
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-base-200">
      <div className="flex flex-col w-full max-w-2xl shadow-xl card bg-base-100">
        {/* Header */}
        <div className="border-b card-body border-base-300">
          <h2 className="text-lg font-bold text-primary">Academic Assistant</h2>
        </div>

        {/* Messages */}
        <div className="h-[420px] overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <Message key={index} text={msg.text} sender={msg.sender} />
          ))}

          {typing && (
            <div className="chat chat-start">
              <div className="chat-bubble">Typing...</div>
            </div>
          )}

          <div ref={bottomRef}></div>
        </div>

        {/* Quick Suggestions */}
        <div className="flex gap-2 px-6 pb-3">
          <button
            className="btn btn-xs btn-outline"
            onClick={() => handleSend("attendance")}
          >
            Attendance
          </button>

          <button
            className="btn btn-xs btn-outline"
            onClick={() => handleSend("exam")}
          >
            Exam
          </button>

          <button
            className="btn btn-xs btn-outline"
            onClick={() => handleSend("fees")}
          >
            Fees
          </button>

          <button
            className="btn btn-xs btn-outline"
            onClick={() => handleSend("timetable")}
          >
            Timetable
          </button>
        </div>

        {/* Input */}
        <div className="flex gap-3 p-4 border-t border-base-300">
          <input
            className="flex-1 input input-bordered"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <button onClick={() => handleSend()} className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
