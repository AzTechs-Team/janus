import { atom } from "recoil";

export const userState = atom({
  key: "UserState",
  default: {},
});

export const socketState = atom({
  key: "SocketState",
  default: null,
});

export const notifsState = atom({
  key: "NotifsState",
  default: [],
});
