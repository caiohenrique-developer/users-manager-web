import { LoginPageLayout } from "@/Layouts/LoginLayout";
import { LoginPageFooter } from "@/components/Login/LoginPageFooter";
import { LoginPageForm } from "@/components/Login/LoginPageForm";
import { LoginPageHeader } from "@/components/Login/LoginPageHeader";

export function LoginPage() {
	return (
		<LoginPageLayout className="min-h-screen flex items-center justify-center">
			<div className="grid gap-[24px] bg-blue-100/20 backdrop-blur-xs py-[40px] px-[80px] rounded-4xl border border-blue-100/20">
				<LoginPageHeader />

				<h1 className="text-gray-50 font-bold text-2xl">Login</h1>

				<LoginPageForm />

				<LoginPageFooter />
			</div>
		</LoginPageLayout>
	);
}
