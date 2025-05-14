import { z } from "zod";

export const formSchema = z.object({
	name: z.string().min(1, { message: "Nome é obrigatório" }),
	email: z
		.string()
		.min(1, { message: "E-mail é obrigatório" })
		.email({ message: "Endereço de email inválido" }),
	password: z
		.string()
		.min(1, { message: "Senha deve ter de 1 a 4 caracteres" })
		.max(4, { message: "Senha deve ter no máximo 4 caracteres" }),
	role: z.enum(["USER", "ADMIN"], {
		message: "Selecione um perfil de usuário",
	}),
});
