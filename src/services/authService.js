import { apiFetch } from "./api";

export async function login(data) {
	return apiFetch("api/v1/login", {
		method: "POST",
		body: JSON.stringify(data),
	});
}