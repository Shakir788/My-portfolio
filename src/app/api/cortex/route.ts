import { NextResponse } from "next/server";
import { CORTEX_SYSTEM_PROMPT } from "@/data/cortexContext";

const MODELS = [
  "meta-llama/llama-3.3-70b-instruct:free",
  "qwen/qwen3-next-80b-a3b-instruct:free",
  "google/gemma-4-31b-it:free",
  "openai/gpt-oss-120b:free"
];

async function callOpenRouterWithFallback(messages: any) {
  for (const model of MODELS) {
    try {
      console.log(`[AI Contact Engine] Attempting model: ${model}`);
      
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

      if (!response.ok) throw new Error(`Model ${model} responded with ${response.status}`);
      
      return await response.json();
    } catch (e) {
      console.error(`[AI Contact Engine] ${model} failed, cycling to next...`);
      continue;
    }
  }
  throw new Error("All AI models in fallback chain failed.");
}

export async function POST(req: Request) {
  try {
    // 1. Safe JSON parsing
    const body = await req.json();
    const { name, email, message, history = [] } = body;

    // 2. Strict Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // 3. Constructing context-aware payload
    const messages = [
      { 
        role: "system", 
        content: `${CORTEX_SYSTEM_PROMPT}\n\nINSTRUCTION: You are Cortex, the Lead Qualifier. Analyze the current lead, cross-reference with history, and provide a decision.` 
      },
      ...history, 
      {
        role: "user",
        content: `Lead Details:
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        Task: 
        1. Classify Priority (High/Medium/Low).
        2. Match with portfolio projects.
        3. Recommend specific closing action.`
      }
    ];

    // 4. Fallback Engine Execution
    const aiData = await callOpenRouterWithFallback(messages);
    
    if (!aiData?.choices?.[0]?.message?.content) {
      throw new Error("Invalid AI Response format");
    }

    const aiAnalysis = aiData.choices[0].message.content;

    console.log("[AI Lead Analysis Success]");
    
    return NextResponse.json({ 
      success: true, 
      analysis: aiAnalysis 
    });

  } catch (error) {
    console.error("[API Error]:", error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : "Service unavailable" 
    }, { status: 500 });
  }
}