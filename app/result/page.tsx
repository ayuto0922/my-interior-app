"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const params = useSearchParams();
  const before = params.get("before");
  const after = params.get("after");
  const layout = params.get("layout");
  const style = params.get("style");
  const furnitureParam = params.get("furniture");
  const furniture = furnitureParam ? JSON.parse(furnitureParam) : [];

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-xl font-semibold">インテリアプラン結果</h1>

        {style && (
          <p className="text-sm text-gray-600">
            選択したインテリアの雰囲気：<span className="font-medium">{style}</span>
          </p>
        )}

        {layout && (
          <div>
            <h2 className="text-lg font-semibold mb-1">間取りの読み取り結果</h2>
            <p className="text-sm text-gray-700">{layout}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {before && (
            <div>
              <p className="text-sm text-gray-600 mb-2">アップロードされた間取り図</p>
              <img src={before} className="w-full h-auto rounded-md" />
            </div>
          )}
          {after && (
            <div>
              <p className="text-sm text-gray-600 mb-2">AIが提案した完成イメージ</p>
              <img src={after} className="w-full h-auto rounded-md" />
            </div>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">この雰囲気に合う家具例</h2>
          <ul className="space-y-2 text-sm">
            {furniture.map((item: any, i: number) => (
              <li key={i} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">
                    {item.price} / {item.shop}
                  </p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  className="text-blue-500 text-xs underline"
                >
                  商品ページへ
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
