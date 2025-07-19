import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

export default async function handler(req, res) {
  const { text } = req.body;
  const chat = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: text }]
  });
  res.status(200).json({ reply: chat.data.choices[0].message.content });
}
