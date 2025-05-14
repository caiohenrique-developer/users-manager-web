import { useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";
import { postLogoutService } from "@/services/authService";

export const useNavUserModel = () => {
	const navigate = useNavigate();
	const loggedUserInfo = useAuth();

	const userInfo = {
		isUser:
			loggedUserInfo?.status === 200 && loggedUserInfo?.data?.role === "USER"
				? "Usuário"
				: "Administrador",
		userName:
			loggedUserInfo?.status === 200
				? loggedUserInfo?.data?.name.split(" ")[0]
				: "--",

		userEmail:
			loggedUserInfo?.status === 200 ? loggedUserInfo?.data?.email : "--",
	};

	const handleLogout = async () => {
		await postLogoutService();

		navigate("/login", { replace: true });
	};

	return { userInfo, handleLogout };
};
