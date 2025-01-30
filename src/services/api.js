class ApiError extends Error {
	constructor(message, status) {
		super(message);
		this.name = "ApiError";
		this.status = status;
	}
}

export async function apiFetch(endpoint, options= {}) {
	try {
		const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
		const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

		const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
			cache: "no-store",
			headers: {
				"Content-Type": "application/json",
				...(token ? { Authorization: `Bearer ${token}` } : {}),
			},
			...options,
		});

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