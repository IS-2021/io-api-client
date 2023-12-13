import { ApplicationError } from "./error";

export class FetchError extends ApplicationError {
	constructor(message: string, options?: ErrorOptions) {
		super(message, options);
	}
}

export class ApiError extends FetchError {
	response: Response;

	constructor(message: string, res: Response, options?: ErrorOptions) {
		super(message, options);
		this.response = res;
	}
}

export class NetworkError extends FetchError {
	constructor(message: string, options?: ErrorOptions) {
		super(message, options);
	}
}

export async function customFetch(input: string, init?: RequestInit) {
	let initOptions = init;

	if (init?.body) {
		initOptions = {
			...initOptions,
			headers: {
				"Content-Type": "application/json",
				...initOptions?.headers,
			},
		};
	}

	try {
		const res = await fetch(`http://localhost:8080/api${input}`, {
			...initOptions,
			credentials: "include",
			mode: "cors",
		});
		if (!res.ok) {
			throw new ApiError("Bad response", res);
		}
		return res;
	} catch (err) {
		if (err instanceof TypeError) {
			console.error(err?.message);
			throw new NetworkError("No network connection");
		}
		throw err;
	}
}
