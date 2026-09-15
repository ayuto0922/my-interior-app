"use client";

import { useFormStore } from "@/store/formStore";

export default function BudgetSection() {
  const { totalBudget, setTotalBudget } = useFormStore();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">総予算（円）</h2>

      <input
        type="number"
        value={totalBudget}
        onChange={(e) => setTotalBudget(Number(e.target.value))}
        className="border p-2 rounded w-full"
        placeholder="例：150000"
      />
    </div>
  );
}
