import { AuthenticatedPageLayout } from "@/Layouts/AuthenticatedLayout";
import { UserForm } from "@/components/UserForm";

export function CreateUserPage() {
	return (
		<AuthenticatedPageLayout>
			<div className="grid gap-10 h-full rounded-[30px] bg-white">
				<div className="py-8 px-12">
					<main>
						<UserForm />
					</main>
				</div>
			</div>
		</AuthenticatedPageLayout>
	);
}
