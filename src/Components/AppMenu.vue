<script setup>
import BooksList from './BooksList.vue';

</script>
<template>
    <ul>
        <li><a href="#list">Ver libros</a></li>
        <li><a href="#form">Añadir Libro</a></li>
        <li><a href="#about">Acerca de...</a></li>
      </ul>
</template>

<style scoped>
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    text-decoration: none;
    color: var(--link-color);
    font-weight: bold;
}

nav ul li a:hover {
    text-decoration: underline;
}
</style>