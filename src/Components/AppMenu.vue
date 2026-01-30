<template>
    <ul>
        <li><router-link to="/">Ver libros</router-link></li>
        <li><router-link to="/create">Nuevo Libro</router-link></li>
        <li><router-link to="/cart">Ver carrito</router-link></li>
        <li><router-link to="/about">Acerca de...</router-link></li>
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

.router-link-active {
    text-decoration: underline;
    color: var(--secondary-color);
}
</style>