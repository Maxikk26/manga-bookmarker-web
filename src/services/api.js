class ApiError extends Error {
	constructor(message, status) {
		super(message);
		this.name = "ApiError";
		this.status = status;
	}
}

export const API_V1 = "api/v1"

export async function apiFetch(endpoint, options= {},auth = false, queryParams = {}) {
	try {
		const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
		const token = auth ? localStorage.getItem("token") : null;

		const isValidQueryParams = queryParams && Object.keys(queryParams).length > 0;
		const queryString = isValidQueryParams ? `?${new URLSearchParams(queryParams).toString()}` : "";

		const url = `${API_BASE_URL}/${endpoint}${queryString}`;

		const res = await fetch(url, {
			cache: "no-store",
			headers: {
				"Content-Type": "application/json",
				...(token ? { Authorization: `Bearer ${token}` } : {}),
			},
			...options,
		});

		console.log("res",res)

		if (!res.ok) {
			let errorMessage = `API error: ${res.status} ${res.statusText}`;
			switch (res.status) {
				case 400:
					errorMessage = "Bad Request: The request was invalid.";
					break;
				case 401:
					errorMessage = "Unauthorized: Invalid or missing authentication.";
					break;
				case 403:
					errorMessage = "Forbidden: You don't have permission.";
					break;
				case 404:
					errorMessage = "Not Found: The requested resource was not found.";
					break;
				case 500:
					errorMessage = "Server Error: Something went wrong on the server.";
					break;
			}
			throw new ApiError(errorMessage, res.status);
		}

		return await res.json();
	} catch (error) {
		throw error;
	}
}