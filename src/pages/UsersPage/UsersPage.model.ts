import { useEffect } from "react";
import { toast } from "sonner";

import { getUsersService } from "@/services/userService";
import { useUserStore } from "@/stores/userStore";

export const useUsersPageModel = () => {
	const { users, setUsers, usersCount, setUsersCount } = useUserStore();

	useEffect(() => {
		const getUserList = async () => {
			const users = await getUsersService();

			if (users.status === 200) {
				const usersData = users?.data?.map((user) => ({
					formattedRole: user.role === "USER" ? "Usuário" : "Administrador",
					...user,
				}));

				setUsers(usersData);

				const userTotal = usersData?.filter(
					(user) => user.role === "USER",
				)?.length;
				const adminTotal = usersData?.filter(
					(user) => user.role === "ADMIN",
				)?.length;

				setUsersCount({ userTotal, adminTotal });
				return;
			}

			toast.error("Erro inesperado ao listar os usuários", {
				description: "Tente novamente mais tarde.",
				action: { label: "Fechar", onClick: () => {} },
			});
		};

		getUserList();
	}, [setUsers, setUsersCount]);

	return { users, usersCount };
};
