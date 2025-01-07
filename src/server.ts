import express from 'express'; // This will now work due to esModuleInterop
import { callModel } from "./llm_backend/llm";
 

const app = express();

app.get('/', async (req, res) => {
    const result = await callModel('write code to fetch data from api in nodejs');
    res.json({key: result.response});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
