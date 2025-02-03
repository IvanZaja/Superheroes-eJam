import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000/api',
    
});

http.interceptors.response.use(
    function (response) {
        return response;
    }
);

export function createHero(data) {
    console.log(data);
    return http.post('/superheroes', data)
}

export function getHeroes(data) {
    return http.get('/superheroes', data );
}