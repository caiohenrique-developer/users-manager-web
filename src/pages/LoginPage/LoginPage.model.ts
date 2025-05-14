import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import type { z } from "zod";

import { formSchema } from "@/pages/LoginPage/LoginPage.schema";
import { postLoginService } from "@/services/authService";

const useLoginPageModel = () => {
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { email: "", password: "" },
	});

	const [loading, setLoading] = useState<boolean>(false);

	async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
		try {
			setLoading(true);

			const { status } = await postLoginService({ email, password });

			if (status === 401) {
				toast.error("Credenciais inválidas!", {
					description: "E-mail ou senha incorretos.",
					action: { label: "Fechar", onClick: () => {} },
				});
				return;
			}

			navigate("/users", { replace: true });
		} catch (error) {
			console.error("Error:", error);

			toast.error("Erro inesperado ao fazer login", {
				description: "Tente novamente mais tarde.",
				action: { label: "Fechar", onClick: () => {} },
			});

			setLoading(false);
		} finally {
			setLoading(false);
		}
	}

	return { loading, form, onSubmit };
};

export { useLoginPageModel };
