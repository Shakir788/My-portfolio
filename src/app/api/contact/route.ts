import { NextResponse } from "next/server";
import { CORTEX_SYSTEM_PROMPT } from "@/data/cortexContext";

// 1. Models List
const MODELS = [
  "meta-llama/llama-3.3-70b-instruct:free",
  "qwen/qwen3-next-80b-a3b-instruct:free",
  "google/gemma-4-31b-it:free",
  "openai/gpt-oss-120b:free"
];

// 2. Fallback Helper Function (Ye define hona chahiye)
async function callOpenRouterWithFallback(messages: any) {
  for (const model of MODELS) {
    try {
      console.log(`[AI Contact Engine] Trying model: ${model}`);
      
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://shakir.dev",
          "X-Title": "Shakir Portfolio Lead Processor",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          messages: messages,
        }),
      });

      if (!response.ok) {
        throw new Error(`Model ${model} failed with status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`[AI Contact Engine] Model ${model} failed, switching fallback...`);
      continue; 
    }
  }
  throw new Error("All AI lead analysis models failed.");
}

// 3. POST Handler
export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const messages = [
      { 
        role: "system", 
        content: `${CORTEX_SYSTEM_PROMPT}\n\nINSTRUCTION: You are the Lead Qualification Agent for Mohammad Shakir. Analyze the lead and classify priority.` 
      },
      {
        role: "user",
        content: `Analyze this potential client lead:
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        Task:
        1. Classify as: High/Medium/Low priority.
        2. Identify relevant project match.
        3. Give a 1-sentence recommended action.`
      }
    ];

    const aiData = await callOpenRouterWithFallback(messages);
    const aiAnalysis = aiData.choices[0].message.content;

    console.log("[AI Lead Analysis Result]:", aiAnalysis);
    
    return NextResponse.json({ 
      success: true, 
      analysis: aiAnalysis 
    });

  } catch (error) {
    console.error("[API Error]:", error);
    return NextResponse.json({ success: false, error: "AI Service temporarily unavailable" }, { status: 500 });
  }
}