import "./globals.css";

export const metadata = {
  title: "Grand Interior Planner",
  description: "上質なホテルのような空間づくりをAIがお手伝いいたします",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="text-gray-900">
        <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-brandGold shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/top" className="text-2xl font-serif font-bold tracking-wide">
              Grand <span className="text-brandGold">Interior</span>
            </a>
            <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
              <a href="/top" className="hover:text-brandGold transition">ホーム</a>
              <a href="/" className="hover:text-brandGold transition">インテリアプラン</a>
              <a href="/result?text=&images=[]" className="hover:text-brandGold transition">プラン結果</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
