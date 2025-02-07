
 
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "https://fakestoreapi.com/",
  TIMEOUT: 5000,
} as const;

export const API_LOCAL_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL_LOCAL || "http://localhost:3001/api",
  TIMEOUT: 5000,
} as const;