"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [style, setStyle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setImage(e.target.files[0]);
  };

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async () => {
    if (!image || !style) return;
    setLoading(true);

    const base64 = await toBase64(image);

    const res = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: base64, style }),
    });

    const json = await res.json();

    const params = new URLSearchParams({
      before: json.beforeImage || "",
      after: json.afterImage || "",
      furniture: JSON.stringify(json.furniture || []),
      layout: json.layoutText || "",
      style,
    });

    window.location.href = `/result?${params.toString()}`;
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <h1 className="text-xl font-semibold">間取りからインテリアプランを作成</h1>
        <p className="text-sm text-gray-600">
          間取り図の画像をアップロードし、インテリアの雰囲気を選んでください。
        </p>

        <input type="file" accept="image/*" onChange={handleFile} />

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full border rounded-md p-2 text-sm"
        >
          <option value="">インテリアの雰囲気を選択</option>
          <option value="北欧">北欧</option>
          <option value="モダン">モダン</option>
          <option value="韓国風">韓国風</option>
          <option value="ホテルライク">ホテルライク</option>
        </select>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-semibold rounded-md"
        >
          {loading ? "AIがプランを作成中…" : "プランを作成する"}
        </button>
      </div>
    </main>
  );
}
