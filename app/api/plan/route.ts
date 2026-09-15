import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { image, style } = body;

  // 1. 間取り読み取り（Vision）
  const visionRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "あなたはプロのインテリアコーディネーター兼建築士です。間取り図を正確に読み取り、部屋構成を日本語で説明してください。",
        },
        {
          role: "user",
          content: [
            { type: "text", text: "この間取り図を読み取ってください。" },
            { type: "image_url", image_url: image },
          ],
        },
      ],
    }),
  });

  const visionJson = await visionRes.json();
  const layoutText =
    visionJson.choices?.[0]?.message?.content || "間取り解析に失敗しました。";

  // 2. インテリア完成イメージ生成（Image API）
  const prompt = `
間取り説明: ${layoutText}

この間取りのリビング・主な居室に対して、
「${style}」テイストのインテリアをコーディネートした完成イメージを生成してください。

・実際に存在しそうな家具配置
・生活動線を意識したレイアウト
・色味や照明も${style}らしく
・日本の一般的なマンションの一室を想定
`;

  const imageRes = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    }),
  });

  const imageJson = await imageRes.json();
  const afterImage = imageJson.data?.[0]?.url || "";

  // 3. AIに家具を推定させて Amazon/Rakuten で検索させる（アフィリエイト本物版）
  const furnitureRes = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
あなたはプロのインテリアコーディネーターです。
以下の画像に写っている家具を推定し、
Amazon または 楽天市場で購入可能な類似商品を検索し、
商品名・価格・URL を返してください。

※ URL は Amazon または 楽天市場の検索結果ページでもOK。
※ アフィリエイトリンクは後で付けるので通常URLで返してください。
`,
        },
        {
          role: "user",
          content: [
            { type: "text", text: "この画像に写っている家具を推定し、購入可能な商品を教えてください。" },
            { type: "image_url", image_url: afterImage },
          ],
        },
      ],
    }),
  });

  const furnitureJson = await furnitureRes.json();
  const furnitureText = furnitureJson.choices?.[0]?.message?.content || "";

  // AIが返すテキストを簡易的にJSON化（後で精度上げる）
  const furniture = furnitureText
    .split("\n")
    .filter((line) => line.includes("http"))
    .map((line) => {
      const [name, url] = line.split(" - ");
      return {
        name: name?.trim(),
        url: url?.trim(),
        price: "不明",
        shop: url?.includes("amazon") ? "Amazon" : "楽天",
      };
    });

  return NextResponse.json({
    beforeImage: image,
    afterImage,
    layoutText,
    furniture,
  });
}
