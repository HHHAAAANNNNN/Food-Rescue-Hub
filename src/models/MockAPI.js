import { projectProfile } from "./Project";
import { regions } from "./Region";

export const fetchMainDashboardData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ projectProfile, regions }), 300);
  });

export const fetchRegionData = (id) =>
  new Promise((resolve, reject) => {
    const region = regions.find((r) => r.id === parseInt(id));
    region ? setTimeout(() => resolve(region), 300) : reject("Region not found");
  });
