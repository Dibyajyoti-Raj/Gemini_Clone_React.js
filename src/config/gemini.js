const apiKey = "AIzaSyBBDHE9Q80qM9b4ecbAjvSQzgNZGvrLovg"

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
  } from '@google/genai';
  
  async function main(prompt) {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
    });
    const tools = [
      {
        googleSearch: {
        }
      },
    ]; 
    const config = {
      thinkingConfig: {
        thinkingBudget: -1,
      },
      tools,
    };
    const model = 'gemini-2.5-pro';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];
  
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });
    // console.log(response)
    let finalText = "";
    for await (const chunk of response) {
      if (chunk.text) {
        finalText += chunk.text;
      }
    }
    console.log(finalText, '\n\n')
    return finalText;

  }
  
  export default main;
  