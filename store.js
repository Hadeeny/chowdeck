// import { create } from "zustand";
// import { produce } from "immer";
import { create } from "zustand";
import { produce } from "immer";

export const useStore = create((set) => ({
  metadata: {},
  charts: [],
  firstChart: {},
  secondChart: {},
  thirdChart: {},
  title: "",
  searchQuery: "",
  updateMetadata: (payload) =>
    set(
      produce((draft) => {
        draft.metadata = payload;
      })
    ),
  addFirstChart: (payload) =>
    set(
      produce((draft) => {
        draft.firstChart = payload;
      })
    ),
  addSecondChart: (payload) =>
    set(
      produce((draft) => {
        draft.secondChart = payload;
      })
    ),
  addThirdChart: (payload) =>
    set(
      produce((draft) => {
        draft.secondChart = payload;
      })
    ),
  addToCharts: (payload) =>
    set(
      produce((draft) => {
        draft.charts.push(payload);
      })
    ),
  getTitle: (payload) =>
    set(
      produce((draft) => {
        draft.title = payload;
      })
    ),
}));
