import axios from "axios";

const url = "https://octet.onrender.com/";

export const jobdata = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('error in jobdata:', error);
        throw error;
    }
};


