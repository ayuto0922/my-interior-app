"use client";

import { useFormStore } from "@/store/formStore";

export default function LifestyleSection() {
  const { lifestyle, setLifestyle } = useFormStore();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">生活スタイル</h2>

      <select
        value={lifestyle}
        onChange={(e) => setLifestyle(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">選択してください</option>
        <option value="single">一人暮らし</option>
        <option value="couple">二人暮らし</option>
        <option value="family">家族</option>
        <option value="pet">ペットあり</option>
        <option value="work">在宅勤務あり</option>
      </select>
    </div>
  );
}
