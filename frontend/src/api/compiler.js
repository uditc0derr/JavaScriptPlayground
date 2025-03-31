import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const runCode = async (code) => {
    try {
        const response = await axios.post(`${API_URL}/compiler/run`, { code });
        return response.data;
    } catch (error) {
        return { error: "Execution failed" };
    }
};
