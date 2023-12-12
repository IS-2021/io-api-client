export type GetUserData = {
	username: string;
	coins: number;
};

export function helloWorld() {
	const userData: GetUserData = {
		username: "foo",
		coins: 30,
	};

	return userData;
}
