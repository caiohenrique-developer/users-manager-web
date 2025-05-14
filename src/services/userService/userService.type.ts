type UserIDProps = { id: string };

type UserDataProps = {
	name: string;
	email: string;
	password: string;
	role: string;
};

type ResponsePattern = {
	status: number;
	message?: string;
};

// Request
interface PostCreateUserProps extends UserDataProps {}
interface PutUpdateUserProps extends UserDataProps, UserIDProps {}
interface DeleteUserProps extends UserIDProps {}

// Response
interface GetUsersPromise extends ResponsePattern {
	data?: Array<UserIDProps & Omit<UserDataProps, "password">>;
}

interface PostCreateUserPromise extends ResponsePattern {
	data?: UserIDProps & Omit<UserDataProps, "password">;
}

interface PutUpdateUserPromise extends ResponsePattern {
	data?: UserIDProps & Omit<UserDataProps, "password">;
}

interface DeleteUserPromise extends ResponsePattern {}

export type {
	DeleteUserPromise,
	DeleteUserProps,
	GetUsersPromise,
	PostCreateUserPromise,
	PostCreateUserProps,
	PutUpdateUserPromise,
	PutUpdateUserProps,
};
