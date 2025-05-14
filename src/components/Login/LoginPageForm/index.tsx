import { EyeSlash } from "iconsax-reactjs";
import { Loader2 } from "lucide-react";

import { InputField, InputIcon, InputRoot } from "@/components/InputCustom";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { useLoginPageModel } from "@/pages/LoginPage/LoginPage.model";

export function LoginPageForm() {
	const { form, onSubmit, loading } = useLoginPageModel();

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
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
						<FormItem>
							<FormControl>
								<InputRoot error={!!form.formState.errors.password}>
									<InputField
										type="password"
										placeholder="Password"
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

				<Button
					type="submit"
					disabled={loading}
					className="bg-purple w-full text-1xl py-6 hover:bg-purple/80 disabled:pointer-events-auto disabled:cursor-not-allowed disabled:hover:bg-purple"
				>
					{loading ? (
						<>
							<Loader2 className="animate-spin" />
							Entrando ...
						</>
					) : (
						<>Login</>
					)}
				</Button>
			</form>
		</Form>
	);
}
