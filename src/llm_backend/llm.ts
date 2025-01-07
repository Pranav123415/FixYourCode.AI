
import {GenerateContentResult, GenerateContentStreamResult, GoogleGenerativeAI} from "@google/generative-ai";
import dotenv from "dotenv";
import { systemPrompt } from "../constants/prompt";
dotenv.config();
const GOOGLE_API_KEY: string = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Call the model
export async function callModel(prompt: string): Promise<GenerateContentResult> {
    const combinePrompt = systemPrompt + prompt;
    return model.generateContent(
        combinePrompt
    );
}
