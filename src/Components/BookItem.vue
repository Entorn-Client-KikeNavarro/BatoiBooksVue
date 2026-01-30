<script setup>
defineProps(['book']);
</script>
<template>
    <div class="card">
        <h3>{{ book.moduleCode }} (ID: {{ book.id }})</h3>
        <p>Editorial: {{ book.publisher }}</p>
        <p>Páginas: {{ book.pages }}</p><br>
        <p>Estado: {{ book.status }}</p><br>
        <p>Vendido el: {{book.soldDate || 'En venta'}}</p><br>
        <p>Comentarios: {{ book.comments }}</p><br>
        <h4 class="price">{{ book.price }}€</h4>
            
        <div class="actions">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 15px;
}
</style>