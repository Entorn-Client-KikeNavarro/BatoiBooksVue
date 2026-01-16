<script setup>
  import { computed, onMounted } from "vue";
  import AppMenu from './Components/AppMenu.vue';
  import AppMessages from './Components/AppMessages.vue';
  import AppAbout from './Components/AppAbout.vue';
  import BookForm from './Components/BookForm.vue';
  import BooksList from './Components/BooksList.vue';
  import { store } from "./stores/index.js"
  onMounted(async () => {
    await store.getDBBooksAction()
  })
</script>

<template>
  <div>
    <img src="/logoBatoi.png" class="logo" alt="Batoi logo" />
    <header>BatoiBooks</header>
    <nav>
      <AppMenu></AppMenu>
    </nav>
  </div>
    <AppMessages></AppMessages>
    <BooksList></BooksList>
  <div>
    <div id="list"></div>
    <BookForm></BookForm>
  </div>
  <br>
  <AppAbout></AppAbout>
  </br>
</template>

<style scoped></style>
