"use client";

import { useFormStore } from "@/store/formStore";

export default function FloorWallSection() {
  const { floorColor, setFloorColor, wallColor, setWallColor } = useFormStore();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">床と壁の色</h2>

      <div className="mb-4">
        <label className="block mb-1">床の色</label>
        <input
          type="text"
          value={floorColor}
          onChange={(e) => setFloorColor(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="例：ライトブラウン"
        />
      </div>

      <div>
        <label className="block mb-1">壁の色</label>
        <input
          type="text"
          value={wallColor}
          onChange={(e) => setWallColor(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="例：ホワイト"
        />
      </div>
    </div>
  );
}
