import { toast } from "sonner";

import type { User } from "@/components/TableList/Columns/Columns.type";
import { deleteUserService } from "@/services/userService";
import { useUserStore } from "@/stores/userStore";

export const useColumnsModel = () => {
	const { open, setOpen } = useUserStore();

	const handleEditUser = ({ id, name, email, role }: User) => {
		useUserStore.getState().setSelectedUser({ id, name, email, role });
		setOpen(!open);
	};

	const removeUser = useUserStore((state) => state.removeUser);

	const handleRemoveUser = async (userId: string) => {
		const res = await deleteUserService(userId);

		if (res.status === 204) {
			removeUser(userId);

			toast.success("Usuário removido com sucesso!", {
				action: { label: "Fechar", onClick: () => {} },
			});
			return;
		}

		toast.error("Erro inesperado", {
			description: "Houve algum erro ao tentar remover o usuário.",
			action: { label: "Fechar", onClick: () => {} },
		});
	};

	return { handleRemoveUser, handleEditUser };
};
