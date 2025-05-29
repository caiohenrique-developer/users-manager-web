import z from "zod";

const envSchema = z.object({ VITE_API_URL: z.string().url() });

const { data, success, error } = envSchema.safeParse(import.meta.env);

if (!success) {
	console.error("❌ Invalid environment variables:", error.format());
	throw new Error("Invalid environment variables");
}

export const processEnv = data as z.infer<typeof envSchema>;
