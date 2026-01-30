import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getBooks() {
        return apiClient.get('/books');
    },
    addBook(book) {
        return apiClient.post('/books', book);
    },
    deleteBook(id) {
        return apiClient.delete('/books/' + id);
    },
    getModules() {
        return apiClient.get('/modules');
    }
};