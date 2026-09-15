import { create } from "zustand";

interface FormState {
  totalBudget: string;
  setTotalBudget: (v: string) => void;

  floorTile: string;
  setFloorTile: (v: string) => void;

  floorColor: string;
  setFloorColor: (v: string) => void;

  wallColor: string;
  setWallColor: (v: string) => void;

  interiorStyle: string;
  setInteriorStyle: (v: string) => void;

  itemBudget: string;
  setItemBudget: (v: string) => void;

  lifestyle: string;
  setLifestyle: (v: string) => void;

  roomSize: string;
  setRoomSize: (v: string) => void;

  image: string;
  setImage: (v: string) => void;
}

export const useFormStore = create<FormState>((set) => ({
  totalBudget: "",
  setTotalBudget: (v) => set({ totalBudget: v }),

  floorTile: "",
  setFloorTile: (v) => set({ floorTile: v }),

  floorColor: "",
  setFloorColor: (v) => set({ floorColor: v }),

  wallColor: "",
  setWallColor: (v) => set({ wallColor: v }),

  interiorStyle: "",
  setInteriorStyle: (v) => set({ interiorStyle: v }),

  itemBudget: "",
  setItemBudget: (v) => set({ itemBudget: v }),

  lifestyle: "",
  setLifestyle: (v) => set({ lifestyle: v }),

  roomSize: "",
  setRoomSize: (v) => set({ roomSize: v }),

  image: "",
  setImage: (v) => set({ image: v }),
}));
