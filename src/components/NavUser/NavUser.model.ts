import { useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";
import { postLogoutService } from "@/services/authService";

const userProfileImg = "/img/user/user-profile-shadcn.jpg";
const adminProfileImg = "/img/user/admin-profile-pravatar.jpeg";

export const useNavUserModel = () => {
	const navigate = useNavigate();
	const loggedUserInfo = useAuth();

	const userInfo = {
		isUser:
			loggedUserInfo?.status === 200 && loggedUserInfo?.data?.role === "USER"
				? { profileImg: userProfileImg, role: "Usuário" }
				: { profileImg: adminProfileImg, role: "Administrador" },
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
