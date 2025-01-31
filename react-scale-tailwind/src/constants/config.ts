
 
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "https://fakestoreapi.com/",
  TIMEOUT: 5000,
} as const;