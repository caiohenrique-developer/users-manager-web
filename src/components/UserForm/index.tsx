import { EyeSlash } from "iconsax-reactjs";
import { Loader2 } from "lucide-react";

import { InputField, InputIcon, InputRoot } from "@/components/InputCustom";
import { useUserFormModel } from "@/components/UserForm/UserForm.model";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

export function UserForm() {
	const { form, onSubmit, whichPage, loading } = useUserFormModel();

	return (
		<div className="grid gap-10">
			<header>
				<h1 className="text-gray-950 text-2xl font-semibold">
					{whichPage ? "Criar um novo " : "Editar "}
					usuário
				</h1>
			</header>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<InputRoot error={!!form.formState.errors.name}>
										<InputField placeholder="Nome" {...field} />
									</InputRoot>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<InputRoot error={!!form.formState.errors.email}>
										<InputField
											type="email"
											placeholder="username@example.com"
											{...field}
										/>
									</InputRoot>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<InputRoot error={!!form.formState.errors.password}>
										<InputField
											type="password"
											placeholder="Senha"
											{...field}
										/>
										<InputIcon className="right-4">
											<EyeSlash size="20" />
										</InputIcon>
									</InputRoot>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex justify-between">
						<FormField
							name="role"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											value={field.value}
											className="flex gap-4"
										>
											{[
												{ value: "USER", label: "Usuário" },
												{ value: "ADMIN", label: "Administrador" },
											].map(({ value, label }) => (
												<FormItem key={value}>
													<FormControl>
														<RadioGroupItem
															value={value}
															id={`radio-${value}`}
															className="sr-only"
														/>
													</FormControl>
													<FormLabel
														htmlFor={`radio-${value}`}
														className={cn(
															"rounded-md p-2 text-sm uppercase ring-1 cursor-pointer transition-colors bg-white text-gray-900 ring-gray-300",
															field.value === value && [
																"bg-gray-900 text-white ring-gray-900",
																"hover:bg-gray-900 hover:text-white",
															],
														)}
													>
														{label}
													</FormLabel>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button
							type="submit"
							disabled={loading}
							className="min-w-26 bg-purple text-1xl py-6 hover:bg-purple/80 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:hover:bg-purple"
						>
							{loading ? (
								<>
									<Loader2 className="animate-spin" />
									{whichPage ? "Criando ..." : "Editando ..."}
								</>
							) : (
								<>{whichPage ? "Criar" : "Editar"}</>
							)}
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
