"use client";

import { useFormStore } from "@/store/formStore";

export default function SizeSection() {
  const { roomSize, setRoomSize } = useFormStore();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">部屋の広さ</h2>
      <input
        type="number"
        value={roomSize}
        onChange={(e) => setRoomSize(Number(e.target.value))}
        className="border p-2 rounded w-full"
        placeholder="例：6（帖）"
      />
    </div>
  );
}
