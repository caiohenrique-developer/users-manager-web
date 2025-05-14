import { api } from "@/services";
import type { PostLoginServiceProps } from "@/services/authService/authService.type";

const postLoginService = ({ email, password }: PostLoginServiceProps) =>
	api
		.post("/auth/login", { email, password })
		.then((res) => {
			return { status: res.status, data: res.data.data };
		})
		.catch((error) => {
			return {
				status: error?.response?.status || 500,
				message: error?.response?.data?.message || "Erro inesperado.",
			};
		});

const postLogoutService = () =>
	api
		.post("/auth/logout")
		.then((res) => {
			return { status: res.status, data: res.data.data };
		})
		.catch((error) => {
			return {
				status: error?.response?.status || 500,
				message: error?.response?.data?.message || "Erro inesperado.",
			};
		});

const getProfileService = () =>
	api
		.get("/auth/me")
		.then((res) => {
			return { status: res.status, data: res.data.data };
		})
		.catch((error) => {
			return {
				status: error?.response?.status || 500,
				message: error?.response?.data?.message || "Erro inesperado.",
			};
		});

export { getProfileService, postLoginService, postLogoutService };
