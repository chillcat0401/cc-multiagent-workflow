"""
Tarot Reading API Server
POST /api/tarot-reading  — LLM-powered deep tarot interpretation via Anthropic API
GET  /api/health         — Health check
"""

import os
from flask import Flask, request, jsonify
from anthropic import Anthropic

app = Flask(__name__)

MODEL = "claude-sonnet-4-20250514"


# ---------------------------------------------------------------------------
# CORS — allow local frontend dev (static server on 8080)
# ---------------------------------------------------------------------------
@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    return response


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


@app.route("/api/tarot-reading", methods=["POST"])
def tarot_reading():
    # --- 1. Check API key ---
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        return jsonify({"error": "API Key 未配置，请设置 ANTHROPIC_API_KEY 环境变量"}), 500

    # --- 2. Parse request ---
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "请求数据为空"}), 400

    card_name = data.get("card_name", "")
    card_emoji = data.get("card_emoji", "")
    orientation = data.get("orientation", "")
    position = data.get("position", "")
    question = data.get("question", "")

    # --- 3. Build prompts ---
    system_prompt = (
        "你是一位资深塔罗牌解读师。你的解读富有洞察力和启发性，语言优美，避免套话。"
        "请用中文回答，字数控制在150-250字之间。"
        "只返回解读文字本身，不需要标题或前缀。"
    )

    user_parts = [
        f"牌面：{card_name} {card_emoji}",
        f"位向：{orientation}",
    ]
    if position:
        user_parts.append(f"牌阵位置：{position}")
    if question:
        user_parts.append(f"用户的疑问：{question}")

    user_prompt = "请根据以下信息给出深度解读：\n\n" + "\n".join(user_parts)

    # --- 4. Call Anthropic API ---
    try:
        client = Anthropic(api_key=api_key)
        message = client.messages.create(
            model=MODEL,
            max_tokens=400,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}],
        )
        reading = message.content[0].text
        return jsonify({"reading": reading})

    except Exception as e:
        error_str = str(e)
        # Surface auth errors clearly
        if "auth" in error_str.lower() or "key" in error_str.lower():
            error_str = "API Key 无效，请检查 ANTHROPIC_API_KEY 环境变量"
        return jsonify({"error": f"解读失败：{error_str}"}), 500


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8081, debug=False)
