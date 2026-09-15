"use client";

import { useFormStore } from "@/store/formStore";

export default function UploadSection() {
  const { image, setImage } = useFormStore();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">部屋の写真をアップロード</h2>
      <input type="file" accept="image/*" onChange={handleUpload} />
      {image && <p className="mt-2 text-green-600">画像が選択されました</p>}
    </div>
  );
}
