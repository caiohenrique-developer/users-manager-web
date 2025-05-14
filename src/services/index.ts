import axios from "axios";

import { processEnv } from "@/env";

export const api = axios.create({
	baseURL: processEnv.VITE_API_URL,
	withCredentials: true,
});
