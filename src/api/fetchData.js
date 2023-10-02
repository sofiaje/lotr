import axios from "axios"

const config = {
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`
    }
}

const baseURL = 'https://the-one-api.dev/v2/'


export const getCharacter = async () => {
    // return axios.get(`${baseURL}character/`, config).then(res => res.data)
    const response = await axios.get(`${baseURL}character/`, config);
    return response.data;
    
}

