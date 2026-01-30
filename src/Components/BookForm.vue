<script setup>
import { reactive } from 'vue';
import { store } from '../stores/index';

const form = reactive({
  id: '',
  moduleCode: '',
  publisher: '',
  price: null,
  pages: null,
  status: 'good',
  comments: '',
  soldDate: ''
});

onMounted(() => {
  store.fetchModules();
})

const handleSubmit = async () => {
  const newBook = {
    moduleCode: form.moduleCode,
    publisher: form.publisher,
    price: parseFloat(form.price),
    pages: parseInt(form.pages),
    status: form.status,
    comments: form.comments,
    soldDate: form.soldDate
  };

  await store.addBook(newBook);
  handleReset();
}

const handleReset = () => {
  form.moduleCode = '';
  form.publisher = '';
  form.price = null;
  form.pages = null;
  form.status = 'good';
  form.comments = '';
  form.soldDate = '';
};
</script>

<template>
    <form id="form" novalidate @submit.prevent="handleSubmit" @reset.prevent="handleReset">
      <h3 id="form-title">Añadir libro</h3>

      <div style="display: none;" id="book-id-div">
        <label for="book-id">ID:</label>
        <input v-model="form.id" type="text" name="id" id="book-id" disabled>
      </div>

      <div>
        <label for="book-moduleCode">moduleCode: </label>
        <select v-model="form.moduleCode" name="moduleCode" id="book-moduleCode" required>
          <option value="" id="select" disabled>Escoge el módulo:</option>
          <option 
            v-for="mod in store.modules" 
            :key="mod.code" 
            :value="mod.code">
            {{ mod.cliteral }} ({{ mod.code }})
          </option>
        </select>
      </div>

      <div>
        <label for="book-publisher">Editorial: </label>
        <input v-model="form.publisher" type="text" id="book-publisher" name="publisher" required>
      </div>

      <div>
        <label for="book-price">Precio: </label>
        <input v-model="form.price" type="number" name="price" id="book-price" required step="0.01" min="0">
      </div>

      <div>
        <label for="book-pages">Páginas: </label>
        <input v-model="form.pages" type="number" name="pages" id="book-pages" required min="0">
      </div>

      <div>
        <p>Estado: </p>
        <input v-model="form.status" type="radio" id="status-good" name="status" value="good" required>
        <label for="status-good">Bueno</label>

        <input v-model="form.status" type="radio" id="status-bad" name="status" value="bad">
        <label for="status-bad">Malo</label>
      </div>

      <div>
        <label for="book-comments">Comentarios: </label>
        <textarea v-model="form.comments" name="comments" id="book-comments"></textarea>
      </div>

      <div>
        <label for="book-soldDate">Fecha de venta: </label>
        <input v-model="form.soldDate" type="date" name="soldDate" id="book-soldDate">
      </div>

      <div>
        <button type="submit" id="btn-submit">Guardar Libro</button>
        <button type="reset" id="btn-reset">Reset</button>
      </div>

    </form>
</template>