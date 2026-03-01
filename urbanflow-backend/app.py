from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import json
import os

app = Flask(__name__)
CORS(app)

client = OpenAI(
    base_url="https://api.featherless.ai/v1",
    aapi_key=os.getenv("FEATHERLESS_API_KEY")
)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.json
    proposal = data.get("proposal")

    response = client.chat.completions.create(
        model="deepseek-ai/DeepSeek-V3.2",
        messages=[
            {
                "role": "user",
                "content": f"""
You are an urban infrastructure AI analyst.

Analyze the proposal and return JSON ONLY in this format:

{{
  "economic_growth": number,
  "safety_impact": number,
  "environmental_impact": number,
  "public_trust": number,
  "explanation": "short executive summary"
}}

Proposal:
{proposal}
"""
            }
        ],
    )

    ai_text = response.model_dump()['choices'][0]['message']['content']

    # Clean JSON
    start = ai_text.find("{")
    end = ai_text.rfind("}") + 1
    clean_json = ai_text[start:end]

    return jsonify(json.loads(clean_json))


if __name__ == "__main__":
    app.run(port=5000)