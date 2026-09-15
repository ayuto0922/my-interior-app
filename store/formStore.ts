import { create } from "zustand";

export const useFormStore = create((set) => ({
  image: "",
  setImage: (v) => set({ image: v }),

  interiorStyle: "",
  setInteriorStyle: (v) => set({ interiorStyle: v }),

  floorColor: "",
  setFloorColor: (v) => set({ floorColor: v }),

  wallColor: "",
  setWallColor: (v) => set({ wallColor: v }),

  // ⭐⭐⭐ ここが今回のエラーの原因だった部分 ⭐⭐⭐
  floorTile: "",
  setFloorTile: (v) => set({ floorTile: v }),

  lifestyle: "",
  setLifestyle: (v) => set({ lifestyle: v }),

  roomSize: "",
  setRoomSize: (v) => set({ roomSize: v }),

  totalBudget: "",
  setTotalBudget: (v) => set({ totalBudget: v }),

  itemBudget: "",
  setItemBudget: (v) => set({ itemBudget: v }),
}));
