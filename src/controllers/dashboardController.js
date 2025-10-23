import { fetchMainDashboardData } from "@/models/MockAPI";

export const getDashboardData = async () => {
  try {
    const response = await fetchMainDashboardData();
    return response;
  } catch (error) {
    console.error("Error loading main dashboard:", error);
    return {};
  }
};
