import axios from "axios";
export const Client = axios.create({
  baseURL: "https://ur-task.com/qilogs",
});
