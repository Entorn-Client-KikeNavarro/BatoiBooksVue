<script setup>
    import { store } from '../stores/index'; 
</script>
<template>
    <div id="messages">
        <div v-for="msg in store.messages"
            :key="msg.id"
            class="alert"
            :class="'alert-' + msg.type">
            {{ msg.text }}
            <button @click="store.deleteMessage(msg.id)" class="btn-close">x</button>
        </div>
    </div>
</template>