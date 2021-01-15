import axios from 'axios';
// Axios is for API Request

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    // used Async
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}