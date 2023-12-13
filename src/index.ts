import { customFetch } from "./fetcher";
import {
	type UpdateRankingRequest,
	type UpdateUserCoinsRequest,
	type UserDataResponse,
} from "./types";

async function gameApiFetch<T>(url: string | URL, init?: RequestInit) {
	const res = await customFetch(url, init);

	return (await res.json()) as T;
}

export async function getUserData() {
	return gameApiFetch<UserDataResponse>("/api/user");
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
