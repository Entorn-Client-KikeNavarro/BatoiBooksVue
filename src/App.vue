<script setup>
import AppMenu from './Components/AppMenu.vue';
import AppMessages from './Components/AppMessages.vue';
</script>

<template>
  <div id="app">
    <header>
        <img src="/logoBatoi.png" class="logo" alt="Batoi logo" />
        <h1>BatoiBooks</h1>
    </header>
    
    <nav>
      <AppMenu></AppMenu>
    </nav>

    <AppMessages></AppMessages>
    
    <main>
        <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
