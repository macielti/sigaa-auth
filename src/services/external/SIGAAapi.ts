import axios from "axios";

function createSIGAAapi(instituition: string) {
  const api = axios.create({
    baseURL: `https://${instituition}`,
    timeout: 30000,
  });

  return api;
}

export default createSIGAAapi;
