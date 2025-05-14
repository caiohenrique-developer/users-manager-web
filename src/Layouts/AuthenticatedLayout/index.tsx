import type { AuthenticatedPageLayoutProps } from "@/Layouts/AuthenticatedLayout/AuthenticatedLayout.type";
import { AppSidebar } from "@/components/AppSidebar";
import { AuthenticatedPageHeader } from "@/components/Auth/AuthenticatedPageHeader";
import { SidebarProvider } from "@/components/ui/sidebar";

export function AuthenticatedPageLayout({
	children,
}: AuthenticatedPageLayoutProps) {
	return (
		<div className="min-h-screen flex bg-radial-[at_25%_25%] from-gray-200 to-gray-100 to-75% overflow-hidden">
			<SidebarProvider>
				<AppSidebar />
				<div className="flex flex-col flex-1 py-[40px] px-[80px] overflow-hidden">
					<AuthenticatedPageHeader />
					<div className="flex-1 overflow-hidden">{children}</div>
				</div>
			</SidebarProvider>
		</div>
	);
}
