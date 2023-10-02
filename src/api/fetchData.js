import axios from "axios"

const config = {
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer TcF6uwe5wriaVfspHyDE'
    }
}

const baseURL = 'https://the-one-api.dev/v2/'


export const getCharacter = async () => {
    // return axios.get(`${baseURL}character/`, config).then(res => res.data)
    const response = await axios.get(`${baseURL}character/`, config);
    return response.data;
    
}

