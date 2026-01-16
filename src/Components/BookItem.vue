<script setup>
    defineProps(['book'])
</script>
<template>
    <div>
        <h3>libro: {{book.id}}</h3><br>
            <h3>{{book.moduleCode}}</h3>
            <p>{{book.publisher}}</p><br>
            <p>{{book.pages}} paginas</p><br>
            <p>Estado: {{book.status}}</p><br>
            <p>vendido el: {{book.soldDate || 'No vendido'}}</p><br>
            <p>{{book.comments}}</p><br>
            <p>{{book.price}}€</p>
            <div>
                <button class="btn-add-cart" data-id="${book.id}">
                    <span class="material-icons">add_shopping_cart</span>
                </button>
                <button class="btn-edit" data-id="${book.id}">
                    <span class="material-icons">edit</span>
                </button>
                <button class="btn-delete" data-id="${book.id}">
                    <span class="material-icons">delete</span>
                </button>
            </div>
    </div>
</template>