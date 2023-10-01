import axios from "axios"

const getBook = async () => {
    // return axios.get(`https://the-one-api.dev/v2/book`).then(res => res.data)
    const response = await axios.get(`https://the-one-api.dev/v2/book`);
    return response.data;
}
 
export default getBook;
