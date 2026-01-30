<script setup>
import { store } from '../stores/';
import { onMounted, computed } from "vue";
import { useRouter } from 'vue-router';
import BookItem from "./BookItem.vue";

const router = useRouter();

onMounted(() => {
    store.fetchBooks();
})

const totalBooks = computed(() => store.state.books?.length || 0);
const totalPrice = computed(() => 
    store.state.books?.reduce((acc, book) => acc + parseFloat(book.price || 0), 0) || 0
);

const handleDelete = (id, moduleCode) => {
    if (confirm(`Estás seguro de borrar el libro con ID ${id} del módulo ${moduleCode}?`)) {
        store.removeBook(id);
    }
}

const handleEdit = (id) => {
    router.push({ name: 'edit', params: { id } });
};

const isInCart = (id) => {
    return store.state.cart.some(item => item.id === id);
};

</script>

<template>
    <div>
        <h1>Lista de Libros</h1>
        <div id="list">
            <BookItem v-for="book in store.state.books" :key="book.id" :book="book">
                
                <button 
                    class="btn-add-cart" 
                    :disabled="isInCart(book.id)"
                    @click="store.addToCart(book)"
                    title="Añadir al carrito"
                >
                    <span class="material-icons">add_shopping_cart</span>
                </button>

                <button class="btn-edit" @click="handleEdit(book.id)">
                    <span class="material-icons">edit</span>
                </button>
                
                <button class="btn-delete" @click="handleDelete(book.id, book.moduleCode)">
                    <span class="material-icons">delete</span>
                </button>
            </BookItem>
        </div>

        <div class="totals-container" style="margin-top:20px; text-align:center;">
            <p><strong>Total de libros listados:</strong> {{ totalBooks }}</p>
            <p><strong>Importe total:</strong> {{ totalPrice.toFixed(2) }}€</p>
        </div>
    </div>
</template>