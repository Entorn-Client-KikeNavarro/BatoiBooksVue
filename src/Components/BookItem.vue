<script setup>
    const props = defineProps(['book']);
    const emit = defineEmits(['delete']);

    const onDelete = () => {
        emit('delete', props.book.id, props.book.moduleCode);
    };
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
            <button class="btn-delete" @click="onDelete">
                <span class="material-icons">delete</span> Borrar
            </button>

            <button disabled>Editar</button>
            <button disabled>Añadir al carrito</button>
        </div>
    </div>
</template>