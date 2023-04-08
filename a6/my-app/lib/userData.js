import { getToken } from "@/lib/authenticate";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function makeRequest(url, method) {
  const token = getToken();
  const options = {
    method,
    headers: {
      Authorization: `JWT ${token}`,
    },
  };
  const response = await fetch(API_URL + url, options);
  if (response.ok) {
    return await response.json();
  } else {
    return [];
  }
}

export async function addToFavourites(id) {
  const url = `/favourites/${id}`;
  return await makeRequest(url, "PUT");
}

export async function removeFromFavourites(id) {
  const url = `/favourites/${id}`;
  return await makeRequest(url, "DELETE");
}

export async function getFavourites() {
  const url = "/favourites";
  return await makeRequest(url, "GET");
}

export async function addToHistory(id) {
  const url = `/history/${id}`;
  return await makeRequest(url, "PUT");
}

export async function removeFromHistory(id) {
  const url = `/history/${id}`;
  return await makeRequest(url, "DELETE");
}

export async function getHistory() {
  const url = "/history";
  return await makeRequest(url, "GET");
}
