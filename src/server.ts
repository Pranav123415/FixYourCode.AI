import express from 'express'; // This will now work due to esModuleInterop
import { callModel } from "./llm_backend/llm";

const app = express();

app.get('/', async (req, res) => {
    const prompt = "write code to fetch data from api in nodejs";
    const result = await callModel(prompt);
    res.json({key: result.response});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
