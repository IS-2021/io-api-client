import { customFetch } from "./fetcher";
import type {
	LoadGameDataRequest,
	LoadGameDataResponse,
	SaveGameDataRequest,
	UpdateRankingRequest,
	UpdateUserCoinsRequest,
	UserDataResponse,
} from "./types";

async function gameApiFetch<T>(url: string, init?: RequestInit) {
	const res = await customFetch(url, init);

	return (await res.json()) as T;
}

export async function getUserData() {
	return gameApiFetch<UserDataResponse>("/user");
}

export async function updateUserCoins(coins: UpdateUserCoinsRequest) {
	return customFetch("/user/coins", {
		method: "POST",
		body: JSON.stringify(coins),
	});
}

export async function updateRanking(data: UpdateRankingRequest) {
	return customFetch("/ranking", {
		method: "POST",
		body: JSON.stringify(data),
	});
}

export async function saveGameData(data: SaveGameDataRequest) {
	return customFetch("/datastorage", {
		method: "POST",
		body: JSON.stringify({
			gameId: data.gameId,
			gameDataJSON: JSON.stringify(data.gameData),
		}),
	});
}

export async function loadGameData({ gameId }: LoadGameDataRequest) {
	const res = await gameApiFetch<LoadGameDataResponse>(`/datastorage/${gameId}`);

	if (res.gameDataJSON) {
		return JSON.parse(res.gameDataJSON) as unknown
	}

	return null;
}
