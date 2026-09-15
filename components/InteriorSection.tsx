"use client";

import { useFormStore } from "@/store/formStore";

export default function InteriorSection() {
  const { interiorStyle, setInteriorStyle } = useFormStore();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">インテリアスタイル</h2>
      <select
        value={interiorStyle}
        onChange={(e) => setInteriorStyle(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">選択してください</option>
        <option value="北欧">北欧</option>
        <option value="モダン">モダン</option>
        <option value="ナチュラル">ナチュラル</option>
        <option value="ヴィンテージ">ヴィンテージ</option>
        <option value="和風">和風</option>
      </select>
    </div>
  );
}
