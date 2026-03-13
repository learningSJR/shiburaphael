/* ---------------- SEND MESSAGE ENGINE ---------------- */

import { generateReply } from "./generateReply";

export const sendMessageEngine = (question, setMessages, setTyping) => {
  const userMsg = { text: question, sender: "user" };

  setMessages((prev) => [...prev, userMsg]);

  setTyping(true);

  setTimeout(() => {
    const reply = generateReply(question);

    setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);

    setTyping(false);
  }, 700);
};
