import { apiFetch, API_V1 } from "./api";

export async function getUserBookmarks(pagination = {}) {
	return apiFetch( `${API_V1}/bookmarks`, {
		method: "GET"
	},true,pagination);
}