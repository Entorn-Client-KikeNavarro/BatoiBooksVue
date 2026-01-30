<script setup>
import { store } from "../stores/index.js";
import BookItem from "./BookItem.vue";

const handleRemove = (id) => {
    store.removeFromCart(id);
};

const handleEmpty = () => {
    if (confirm("¿Seguro que quieres vaciar el carrito?")) {
        store.clearCart();
    }
};

const handleCheckout = () => {
    store.checkout();
};
</script>

<template>
    <div class="cart-container">
        <h1>Carrito de Compra</h1>

        <div v-if="store.state.cart.length === 0" class="empty-msg">
            <p>El carrito está vacío.</p>
            <router-link to="/">Volver a la tienda</router-link>
        </div>

        <div v-else>
            <div id="list">
                <BookItem v-for="book in store.state.cart" :key="book.id" :book="book">
                    <button class="btn-delete" @click="handleRemove(book.id)" title="Quitar del carrito">
                        <span class="material-icons">remove_shopping_cart</span>
                    </button>
                </BookItem>
            </div>

            <div class="cart-summary">
                <h3>Resumen del pedido</h3>
                <p>Total artículos: <strong>{{ store.cartTotalItems }}</strong></p>
                <p class="total-price">Total a pagar: <strong>{{ store.cartTotalPrice.toFixed(2) }}€</strong></p>
                
                <div class="cart-actions">
                    <button class="btn-danger" @click="handleEmpty">
                        Vaciar Carrito
                    </button>
                    <button class="btn-success" @click="handleCheckout">
                        Realizar Compra
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cart-summary {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-top: 30px;
    text-align: center;
    border: 1px solid #dee2e6;
}

.total-price {
    font-size: 1.5em;
    color: #28a745;
    margin: 15px 0;
}

.cart-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.btn-danger {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.btn-success {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.empty-msg {
    text-align: center;
    margin-top: 50px;
}
</style>