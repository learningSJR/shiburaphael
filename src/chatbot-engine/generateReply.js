import { knowledgeBase } from "../chatbot-data/knowledgeBase";

export const generateReply = (question) => {
  const cleanedQuestion = question
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();

  const questionWords = cleanedQuestion.split(" ");

  let bestScore = 0;
  let bestAnswer = null;

  knowledgeBase.forEach((item) => {
    let score = 0;

    item.keywords.forEach((keyword) => {
      const cleanKeyword = keyword.toLowerCase().replace(/[^\w\s]/g, "");

      const keywordWords = cleanKeyword.split(" ");

      /* Phrase match (strong signal) */
      if (cleanedQuestion.includes(cleanKeyword)) {
        score += 5;
      }

      /* Word matching */
      keywordWords.forEach((word) => {
        if (questionWords.includes(word)) {
          score += 3;
        }
      });
    });

    if (score > bestScore) {
      bestScore = score;
      bestAnswer = item.answer;
    }
  });

  if (bestAnswer) return bestAnswer;

  return "That's a great question. You can ask me about UX design, React development, projects, design thinking, tools I use, or career advice.";
};
