import { useEffect, useState } from "react";

import type { User } from "@/components/TableList/Columns/Columns.type";
import { getProfileService } from "@/services/authService";

interface GetProfileServiceResponse {
	status: number;
	data?: User & {
		iat: number;
		exp: number;
	};
	message?: string;
}

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] =
		useState<null | GetProfileServiceResponse>(null);

	useEffect(() => {
		getProfileService().then((res: GetProfileServiceResponse) => {
			if (res.status === 200) {
				setIsAuthenticated({ status: res.status, data: res.data });
				return;
			}

			setIsAuthenticated({ status: res.status, message: res.message });
		});
	}, []);

	return isAuthenticated;
};
