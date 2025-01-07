
import {GenerateContentResult, GenerateContentStreamResult, GoogleGenerativeAI} from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
const GOOGLE_API_KEY: string = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Call the model
export async function callModel(prompt: string): Promise<GenerateContentStreamResult> {
    return model.generateContentStream(
        prompt
    );
}
