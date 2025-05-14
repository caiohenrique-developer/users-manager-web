import {
	KeySquare,
	MessageQuestion,
	Profile2User,
	UserSquare,
} from "iconsax-reactjs";

export const useAppSidebar = () => {
	const menuItemList = [
		{ name: "Dashboard", url: "#", icon: KeySquare },
		{ name: "Lista de usuários", url: "/users", icon: Profile2User },
		{ name: "Criar usuário", url: "/create-user", icon: UserSquare },
		{ name: "FAQ", url: "#", icon: MessageQuestion },
	];

	return { menuItemList };
};
