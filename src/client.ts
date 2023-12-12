import { createTypeLevelClient, initUntypeable } from "untypeable";
import {
	type UpdateRankingRequest,
	type UpdateUserCoinsRequest,
	type UserDataResponse,
} from "./types";
import { customFetch } from "./fetcher";

const u = initUntypeable().pushArg<"GET" | "POST">();

const userRouter = u.router({
	"/user": {
		GET: u.output<UserDataResponse>(),
	},
	"/user/coins": {
		POST: u.input<UpdateUserCoinsRequest>().output(),
	},
});

const rankingRouter = u.router({
	"/ranking": {
		POST: u.input<UpdateRankingRequest>().output(),
	},
});

const baseRouter = userRouter.merge(rankingRouter);
export type BaseRouter = typeof baseRouter;

export const apiClient = createTypeLevelClient<typeof baseRouter>((path, method, input = {}) => {
	let resolvedInit: RequestInit = {};
	if (method == "POST") {
		resolvedInit = {
			method,
			body: JSON.stringify(input),
		};
	}

	return customFetch(`http://localhost:8080/api${path}`, resolvedInit).then((res) => res.json());
});
