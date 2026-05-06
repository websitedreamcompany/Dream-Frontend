import { create } from "zustand";

type ProjectData = {
  data: unknown[];
};
type userProps = {
 user:{ email: string;}| null
}

interface DreamStoreData {
    userData:userProps | null,
  setUSerAccountData: (data: userProps | null) => void;
  
  projectData: ProjectData | null;
  moreData: unknown[];
  setProjectData: (data: ProjectData) => void;
  setMoreData: (data: unknown[]) => void;
}


const useDreamTradingStore = create<DreamStoreData>((set) => ({
    userData:null,
  setUSerAccountData: (userData: userProps | null) => {
    console.log('Setting user account data:',userData)
    set({ userData});
  },

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



export default useDreamTradingStore