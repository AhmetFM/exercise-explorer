import {
  FunctionDeclarationSchemaType,
  GoogleGenerativeAI,
} from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDJXog-0Eb_VyuANdwkgEaaOtCihQHhkLQ");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  generationConfig: {
    responseMimeType: "application/json",
  },
});

export default model;
