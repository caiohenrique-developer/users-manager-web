import type { User } from "@/components/TableList/Columns/Columns.type";

type UserCount = { userTotal?: number; adminTotal?: number };

interface UserStore {
	users: User[];
	usersCount: UserCount;
	open: boolean;
	selectedUser: User | null;
	setUsers(users?: User[]): void;
	setUsersCount(usersCount: UserCount): void;
	setOpen(open: boolean): void;
	setSelectedUser(user: User | null): void;
	updateUser(user: User): void;
	removeUser(id: string): void;
}

export type { UserCount, UserStore };
