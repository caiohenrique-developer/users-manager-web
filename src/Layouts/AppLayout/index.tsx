import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export function AppLayout() {
	return (
		<main className="relative min-h-screen bg-radial-[at_25%_25%] from-blue-200 to-blue-300 to-75% overflow-hidden">
			<div className="relative z-10">
				<Outlet />
				<Toaster />
			</div>
		</main>
	);
}
