import { reactive } from "vue";
import api from "../services/api";

export const store = reactive({
    state: {
        books: [],     
        modules: [],   
        messages: []    
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