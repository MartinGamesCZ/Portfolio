import axios from "axios";
import type { ISiteNavbarConfig } from "../types/api/site.js";

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export const API = {
  site: {
    navbar: {
      async getConfig(): Promise<ISiteNavbarConfig> {
        const response = await api.get<ISiteNavbarConfig>("/site/navbar");

        return response.data;
      },
    },
  },
};
