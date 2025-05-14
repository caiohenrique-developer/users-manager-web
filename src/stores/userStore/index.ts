import { create } from "zustand";

import type { UserStore } from "@/stores/userStore/userStore.type";

export const useUserStore = create<UserStore>((set) => ({
	users: [],
	usersCount: { userTotal: 0, adminTotal: 0 },
	open: false,
	selectedUser: null,
	setUsers: (users) => set({ users }),
	setUsersCount: (usersCount) => set({ usersCount }),
	setOpen: (open) => set({ open }),
	setSelectedUser: (user) => set({ selectedUser: user }),
	updateUser: (updatedUser) =>
		set((state) => {
			const existingUser = state.users.find(
				(user) => user.id === updatedUser.id,
			);

			if (!existingUser) return {};

			const newUsers = state.users.map((user) => {
				if (user.id === updatedUser.id) {
					if (updatedUser.role === "USER") {
						return { formattedRole: "Usuário", ...updatedUser };
					}

					if (updatedUser.role === "ADMIN") {
						return { formattedRole: "Administrador", ...updatedUser };
					}
				}

				return user;
			});

			let { adminTotal = 0, userTotal = 0 } = state.usersCount;

			if (existingUser.role !== updatedUser.role) {
				if (updatedUser.role === "ADMIN") {
					adminTotal += 1;
					userTotal -= 1;
				} else if (updatedUser.role === "USER") {
					adminTotal -= 1;
					userTotal += 1;
				}
			}

			return { users: newUsers, usersCount: { adminTotal, userTotal } };
		}),
	removeUser: (id) =>
		set((state) => {
			const userToRemove = state.users.find((user) => user.id === id);
			if (!userToRemove) return {};

			const newUsers = state.users.filter((user) => user.id !== id);
			const isAdmin = userToRemove.role === "ADMIN";

			return {
				users: newUsers,
				usersCount: {
					...state.usersCount,
					adminTotal:
						isAdmin && state?.usersCount?.adminTotal
							? state.usersCount.adminTotal - 1
							: state.usersCount.adminTotal,
					userTotal:
						!isAdmin && state?.usersCount?.userTotal
							? state.usersCount.userTotal - 1
							: state.usersCount.userTotal,
				},
			};
		}),
}));
