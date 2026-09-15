"use client";

import { useFormStore } from "@/store/formStore";

export default function FloorTileSection() {
  const { floorTile, setFloorTile } = useFormStore();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">床材の種類</h2>

      <select
        value={floorTile}
        onChange={(e) => setFloorTile(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">選択してください</option>
        <option value="wood">木材</option>
        <option value="tile">タイル</option>
        <option value="carpet">カーペット</option>
      </select>
    </div>
  );
}
