import { customFetch } from "./fetcher";
import {
	type UpdateRankingRequest,
	type UpdateUserCoinsRequest,
	type UserDataResponse,
} from "./types";

const baseApiUrl = new URL("http://localhost:8080/");

async function gameApiFetch<T>(url: string | URL, init?: RequestInit) {
	const res = await customFetch(new URL(url, baseApiUrl), init);

	return (await res.json()) as T;
}

export async function getUserData(): Promise<UserDataResponse> {
	return gameApiFetch("/api/user");
}

export async function updateUserCoins(coins: UpdateUserCoinsRequest) {
	return gameApiFetch("/api/user/coins", {
		method: "POST",
		body: JSON.stringify(coins),
	});
}

export async function updateRanking(data: UpdateRankingRequest) {
	return gameApiFetch("/api/ranking", {
		method: "POST",
		body: JSON.stringify(data),
	});
}
