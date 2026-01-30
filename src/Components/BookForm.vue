<script setup>
import { reactive, onMounted, computed } from 'vue';
import { store } from '../stores/index';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const isEditing = computed(() => !!route.params.id);

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

onMounted(async() => {
  await store.fetchModules();

  if (isEditing.value) {
    const bookData = await store.fetchBook(route.params.id)
    if(bookData) {
      Object.assign(form, bookData)
    }
  }
})

const handleSubmit = async () => {
  const bookData = {
    moduleCode: form.moduleCode,
    publisher: form.publisher,
    price: parseFloat(form.price),
    pages: parseInt(form.pages),
    status: form.status,
    comments: form.comments,
    soldDate: form.soldDate
  };

  if (isEditing.value) {
    await store.updateBook(form.id, bookData)
  } else {
    await store.addBook(bookData)
  }

  router.push('/')
}

const handleReset = async () => {
  if (isEditing.value) {
    const bookData = await store.fetchBook(route.params.id)
    if (bookData) Object.assign(form, bookData)
  } else {
    form.moduleCode = '';
    form.publisher = '';
    form.price = null;
    form.pages = null;
    form.status = 'good';
    form.comments = '';
    form.soldDate = '';
  }
};
</script>

<template>
    <form id="form" novalidate @submit.prevent="handleSubmit" @reset.prevent="handleReset">
      
      <h3 id="form-title">{{ isEditing ? 'Editar libro' : 'Añadir libro' }}</h3>

      <div style="display: none;" id="book-id-div">
        <label for="book-id">ID:</label>
        <input v-model="form.id" type="text" name="id" id="book-id" disabled>
      </div>

      <div>
        <label for="book-moduleCode">Módulo: </label>
        <select v-model="form.moduleCode" id="book-moduleCode" required>
          <option value="" disabled>Elige el módulo:</option>
          <option v-for="mod in store.state.modules" :key="mod.code" :value="mod.code">
            {{ mod.code }} - {{ mod.cliteral }}
          </option>
        </select>
      </div>

      <div>
        <label for="book-publisher">Editorial: </label>
        <input v-model="form.publisher" type="text" id="book-publisher" required>
      </div>

      <div>
        <label for="book-price">Precio: </label>
        <input v-model="form.price" type="number" id="book-price" required step="0.01" min="0">
      </div>

      <div>
        <label for="book-pages">Páginas: </label>
        <input v-model="form.pages" type="number" id="book-pages" required min="0">
      </div>

      <div>
        <p>Estado: </p>
        <input v-model="form.status" type="radio" id="status-good" value="good" required>
        <label for="status-good">Bueno</label>

        <input v-model="form.status" type="radio" id="status-bad" value="bad">
        <label for="status-bad">Malo</label>
      </div>

      <div>
        <label for="book-comments">Comentarios: </label>
        <textarea v-model="form.comments" id="book-comments"></textarea>
      </div>

      <div>
        <label for="book-soldDate">Fecha de venta: </label>
        <input v-model="form.soldDate" type="date" id="book-soldDate">
      </div>

      <div>
        <button type="submit" id="btn-submit">
            {{ isEditing ? 'Modificar' : 'Añadir' }}
        </button>
        <button type="reset" id="btn-reset">
            {{ isEditing ? 'Restaurar' : 'Limpiar' }}
        </button>
      </div>

    </form>
</template>