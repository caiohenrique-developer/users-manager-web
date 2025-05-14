import { useAuth } from "@/hooks/useAuth";

export const useAuthenticatedPageHeaderModel = () => {
	const loggedUserInfo = useAuth();

	const isUser =
		loggedUserInfo?.status === 200 && loggedUserInfo?.data?.role === "USER";
	const userName =
		loggedUserInfo?.status === 200
			? loggedUserInfo?.data?.name.split(" ")[0]
			: "--";

	return { isUser, userName };
};
