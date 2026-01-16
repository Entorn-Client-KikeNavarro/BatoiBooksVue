<script setup>
    import { store } from "../stores/";
import { computed } from "vue";
import BookItem from "./BookItem.vue";

const books = computed(() => store.state.books)
</script>
<template>
    <BookItem v-for="book in books" :book="book"></BookItem>
</template>