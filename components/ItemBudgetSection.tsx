"use client";

import { useFormStore } from "@/store/formStore";

export default function ItemBudgetSection() {
  const { itemBudget, setItemBudget } = useFormStore();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">家具ごとの予算（任意）</h2>

      <textarea
        value={itemBudget}
        onChange={(e) => setItemBudget(e.target.value)}
        className="border p-2 rounded w-full h-32"
        placeholder={`例：
ベッド：30000
ソファ：40000
テーブル：15000
テレビ台：20000
ラグ：8000
照明：5000
収納：12000`}
      />
    </div>
  );
}
