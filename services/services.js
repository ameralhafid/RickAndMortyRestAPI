import axios from 'axios';

const apiUrl = 'https://rickandmortyapi.com/api';

// Get Popular Movies
export const getPopularMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/popular?`);
    return resp.data.results;
};

// Get Upcoming Movies
export const getUpcomingMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/upcoming?`);
    return resp.data.results;
};

// Get Popular TV
export const getPopularTv = async () => {
    const resp = await axios.get(`${apiUrl}/tv/popular?`);
    return resp.data.results;
};
