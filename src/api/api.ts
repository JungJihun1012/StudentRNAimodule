import { API_BASE_URL } from "@env";
import axios from "axios";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'aplication/json',
    },
});

export default apiClient;