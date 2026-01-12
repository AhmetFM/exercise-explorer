import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API!);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

export default model;
