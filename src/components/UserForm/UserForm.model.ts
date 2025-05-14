import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import type { z } from "zod";

import { formSchema } from "@/components/UserForm/UserForm.schema";
import {
	postCreateUserService,
	putUpdateUserService,
} from "@/services/userService";
import { useUserStore } from "@/stores/userStore";

const useUserFormModel = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { open, setOpen, selectedUser, setSelectedUser } = useUserStore();

	const whichPage = pathname === "/create-user";

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { name: "", email: "", password: "", role: "USER" },
	});

	const [loading, setLoading] = useState<boolean>(false);

	const handleReset = useCallback(() => {
		form.reset({ name: "", email: "", password: "", role: "USER" });
		setSelectedUser(null);
		setOpen(false);
	}, [form.reset, setSelectedUser, setOpen]);

	useEffect(() => {
		if (selectedUser) {
			const { name, email, role } = selectedUser;

			form.reset({ name, email, password: "", role } as z.infer<
				typeof formSchema
			>);
		}

		if (open === false) handleReset();
	}, [open, form.reset, selectedUser, handleReset]);

	async function onSubmit(userData: z.infer<typeof formSchema>) {
		setLoading(true);

		try {
			if (selectedUser) {
				const updatedUser = { id: selectedUser.id, ...userData };

				const { status, message } = await putUpdateUserService(updatedUser);

				if (status === 200 && message === "User is up to date") {
					toast.success("Nenhum campo alterado!", {
						description:
							"Não há campos a serem atualizados, o usuário já está atualizado!",
						action: { label: "Fechar", onClick: () => {} },
					});
					return;
				}

				if (status === 200) {
					toast.success("Usuário atualizado com sucesso!", {
						action: { label: "Fechar", onClick: () => {} },
					});

					useUserStore.getState().updateUser(updatedUser);
					handleReset();

					return;
				}
			} else {
				const { status } = await postCreateUserService(userData);

				if (status === 201) {
					toast.success("Usuário criado com sucesso!", {
						action: { label: "Fechar", onClick: () => {} },
					});

					navigate("/users", { replace: true });
					return;
				}

				if (status === 409) {
					toast.success("Usuário já cadastrado!", {
						action: { label: "Fechar", onClick: () => {} },
					});
					return;
				}
			}

			toast.error("Erro inesperado ao salvar o usuário!", {
				description:
					"Houve algum erro ao tentar salvar o usuário. Tente novamente mais tarde.",
				action: { label: "Fechar", onClick: () => {} },
			});
		} finally {
			setLoading(false);
		}
	}

	return { form, onSubmit, whichPage, loading };
};

export { useUserFormModel };
