export type UserDataResponse = {
	username: string;
	coins: number;
};

export type UpdateUserCoinsRequest = {
	coins: number;
};

export type UpdateRankingRequest = {
	gameID: number;
	score: number;
};
