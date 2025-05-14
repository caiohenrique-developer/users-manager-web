import { api } from "@/services";
import type {
	DeleteUserPromise,
	GetUsersPromise,
	PostCreateUserPromise,
	PostCreateUserProps,
	PutUpdateUserPromise,
	PutUpdateUserProps,
} from "@/services/userService/userService.type";

const getUsersService = (): Promise<GetUsersPromise> =>
	api
		.get("/users")
		.then((res) => {
			return {
				status: res.status,
				message: res.data.message,
				data: res.data.data,
			};
		})
		.catch((error) => {
			return {
				status: error?.response?.status || 500,
				message: error?.response?.data?.message || "Erro inesperado.",
			};
		});

const postCreateUserService = ({
	name,
	email,
	password,
	role,
}: PostCreateUserProps): Promise<PostCreateUserPromise> =>
	api
		.post("/users/create", { name, email, password, role })
		.then((res) => {
			return {
				status: res.status,
				message: res.data.message,
				data: res.data.data,
			};
		})
		.catch((error) => {
			return {
				status: error?.response?.status || 500,
				message: error?.response?.data?.message || "Erro inesperado.",
			};
		});

const putUpdateUserService = ({
	id,
	name,
	email,
	password,
	role,
}: PutUpdateUserProps): Promise<PutUpdateUserPromise> =>
	api
		.put(`/users/${id}/update`, { name, email, password, role })
		.then((res) => {
			return {
				status: res.status,
				message: res.data.message,
				data: res.data.data,
			};
		})
		.catch((error) => {
			return {
				status: error?.response?.status || 500,
				message: error?.response?.data?.message || "Erro inesperado.",
			};
		});

const deleteUserService = (id: string): Promise<DeleteUserPromise> =>
	api
		.delete(`/users/${id}/remove`)
		.then((res) => {
			return {
				status: res.status,
				message: res.data.message,
				data: res.data.data,
			};
		})
		.catch((error) => {
			return {
				status: error?.response?.status || 500,
				message: error?.response?.data?.message || "Erro inesperado.",
			};
		});

export {
	deleteUserService,
	getUsersService,
	postCreateUserService,
	putUpdateUserService,
};
