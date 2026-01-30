<script setup>
import { store } from '../stores/';
import { onMounted, computed } from "vue";
import BookItem from "./BookItem.vue";
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

</script>

<template>
    <div>
        <h1>Lista de libros</h1>

        <div id="list">
            <BookItem
                v-for="book in store.state.books"
                :key="book.id"
                :book="book"
                @delete="handleDelete"
            />
        </div>

        <div class="totals-container" style="margin-top:20px; text-align:center;">
            <p><strong>Total de libros listados:</strong> {{ totalBooks }}</p>
            <p><strong>Importe total:</strong> {{ totalPrice.toFixed(2) }}€</p>
        </div>
    </div>
</template>