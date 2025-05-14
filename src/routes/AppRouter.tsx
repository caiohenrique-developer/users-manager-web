import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";

import { AppLayout } from "@/Layouts/AppLayout";
import { useAuth } from "@/hooks/useAuth";
import { CreateUserPage } from "@/pages/CreateUserPage";
import { LoginPage } from "@/pages/LoginPage";
import { UsersPage } from "@/pages/UsersPage";

function PublicRoute() {
	const isAuthenticated = useAuth();

	if (isAuthenticated === null) {
		return <div>Loading...</div>;
	}

	return isAuthenticated.status === 200 ? (
		<Navigate to="/users" replace />
	) : (
		<Outlet />
	);
}

function PrivateRoute() {
	const isAuthenticated = useAuth();
	const location = useLocation();

	if (isAuthenticated === null) {
		return <div>Loading...</div>;
	}

	return isAuthenticated.status !== 200 ? (
		<Navigate to="/login" state={{ from: location }} replace />
	) : (
		<Outlet />
	);
}

export function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PublicRoute />}>
					<Route element={<AppLayout />}>
						<Route path="/" element={<Navigate to="/login" />} />
						<Route path="/login" element={<LoginPage />} />
					</Route>
				</Route>

				<Route element={<PrivateRoute />}>
					<Route element={<AppLayout />}>
						<Route path="/users" element={<UsersPage />} />
						<Route path="/create-user" element={<CreateUserPage />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
