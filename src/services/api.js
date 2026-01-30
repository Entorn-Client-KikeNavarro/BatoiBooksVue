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
    getBook(id) {
        return apiClient.get('/books/' + id);
    },
    addBook(book) {
        return apiClient.post('/books', book);
    },
    editBook(id, book) {
        return apiClient.put('/books/' + id, book);
    },
    deleteBook(id) {
        return apiClient.delete('/books/' + id);
    },
    getModules() {
        return apiClient.get('/modules');
    },

    async processCheckout(cart) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const total = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
                
                const firstDigit = parseInt(total.toString()[0]);

                if (firstDigit < 5) {
                    reject(new Error("Transacción fallada: Importe no válido según reglas de negocio."));
                } else {
                    resolve({ success: true, message: "Compra realizada con éxito" });
                }
            }, 500);
        });
    }
};