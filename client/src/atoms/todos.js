import { atom } from "recoil";

export const todosState = atom({
  key: "TodosState",
  default: [],
});
