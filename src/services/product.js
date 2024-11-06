import { apiClient } from "./config";

// Get all products
export const apiGetProducts = async () => {
  return apiClient.get("/products");
};