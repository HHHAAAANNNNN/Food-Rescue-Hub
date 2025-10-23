import { fetchRegionData } from "@/models/MockAPI";

export const getRegionDashboard = async (regionId) => {
  try {
    const region = await fetchRegionData(regionId);
    return region;
  } catch (error) {
    console.error("Error fetching region:", error);
    return null;
  }
};
