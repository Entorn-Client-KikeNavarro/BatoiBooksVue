<script setup>
import AppMenu from './Components/AppMenu.vue';
import AppMessages from './Components/AppMessages.vue';
import BooksList from './Components/BooksList.vue';
import BookForm from './Components/BookForm.vue';
import AppAbout from './Components/AppAbout.vue';
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
    <BookForm></BookForm>
  </div>
  <br>
  <AppAbout></AppAbout>
  </br>
</template>

<style scoped></style>
