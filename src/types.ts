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

export type SaveGameDataRequest = {
	gameId: number;
	gameData: unknown;
};

export type LoadGameDataRequest = {
	gameId: number;
};

export type LoadGameDataResponse = {
	gameDataJSON: string | undefined;
};
