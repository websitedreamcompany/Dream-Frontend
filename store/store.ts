import { create } from "zustand";

type ProjectData = {
  data: unknown[];
};

interface DreamStoreData {
  projectData: ProjectData | null;
  moreData: unknown[];
  setProjectData: (data: ProjectData) => void;
  setMoreData: (data: unknown[]) => void;
}

const useDreamTradingStore = create<DreamStoreData>((set) => ({
  projectData: null,
  moreData: [],
  setMoreData: (data: unknown[]) => {
    console.log("Setting more data:", data);
    set({ moreData: data });
  },

  setProjectData: (data: ProjectData) => {
    console.log("Setting project data:", data);
    set({ projectData: data });
  },
}));

export default useDreamTradingStore;
