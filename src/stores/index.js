import { reactive } from "vue";
import api from "../services/api";
const savedCart = JSON.parse(localStorage.getItem('batoi_cart')) || [];

export const store = reactive({
    state: {
        books: [],     
        modules: [],   
        messages: [],
        cart: savedCart    
    },

    saveCart() {
        localStorage.setItem('batoi_cart', JSON.stringify(this.state.cart));
    },

    addToCart(book) {
        const exists = this.state.cart.some(item => item.id === book.id);
        
        if (!exists) {
            this.state.cart.push(book);
            this.saveCart();
            this.addMessage(`Añadido al carrito: ${book.moduleCode}`, 'success');
        } else {
            this.addMessage("El libro ya está en el carrito", 'warning');
        }
    },

    removeFromCart(id) {
        this.state.cart = this.state.cart.filter(item => item.id !== id);
        this.saveCart();
        this.addMessage("Libro eliminado del carrito", 'warning');
    },

    clearCart() {
        this.state.cart = [];
        this.saveCart();
        this.addMessage("Carrito vaciado", 'info');
    },

    async checkout() {
        try {
            await api.processCheckout(this.state.cart);
            
            this.clearCart();
            this.addMessage("Compra realizada con éxito. Gracias por su confianza.", 'success');
        } catch (error) {
            this.addMessage(error.message, 'danger');
        }
    },

    async checkout() {
        try {
            await api.processCheckout(this.state.cart);
            
            this.clearCart();
            this.addMessage("Compra realizada con éxito. Gracias por su confianza.", 'success');
        } catch (error) {
            this.addMessage(error.message, 'danger');
        }
    },

    addMessage(text, type = 'danger') {
        const newMessage = {
            id: Date.now(),
            text: text,
            type: type
        };

        if (this.state.messages) {
            this.state.messages.push(newMessage);
            

            setTimeout(() => {
                this.removeMessage(newMessage.id);
            }, 5000);
        }
    },

    removeMessage(id) {
        if (this.state.messages) {
            this.state.messages = this.state.messages.filter(msg => msg.id !== id);
        }
    },

    async fetchBooks() {
        try {
            const response = await api.getBooks();
            this.state.books = response.data; 
        } catch (error) {
            this.addMessage("Error al cargar los libros: " + error.message, 'danger');
            console.error(error);
        }
    },

    async fetchModules() {
        try {
            const response = await api.getModules();
            this.state.modules = response.data;
        } catch (error) {
            this.addMessage("Error al cargar los módulos: " + error.message, 'danger');
        }
    },

    async addBook(book) {
        try {
            await api.addBook(book);
            this.addMessage(`Libro añadido correctamente`, 'success');
        } catch (error) {
            this.addMessage("Error al añadir el libro: " + error.message, 'danger');
            throw error;
        }
    },

    async updateBook(id, book) {
        try {
            await api.editBook(id, book);
            this.addMessage(`Libro editado correctamente`, 'success');
        } catch (error) {
            this.addMessage("Error al editar el libro: " + error.message, 'danger');
            throw error;
        }
    },

    async fetchBook(id) {
        try {
            const response = await api.getBook(id);
            return response.data;
        } catch (error) {
            this.addMessage("Error al cargar el libro: " + error.message, 'danger');
            return null;
        }
    },

    async removeBook(id) {
        try {
            await api.deleteBook(id);
            this.addMessage("Libro eliminado", 'warning');
            await this.fetchBooks();
        } catch (error) {
            this.addMessage("Error al borrar el libro: " + error.message, 'danger');
        }
    }
});