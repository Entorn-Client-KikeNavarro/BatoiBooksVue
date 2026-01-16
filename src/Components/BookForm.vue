<script setup>

</script>
<template>
    <form id="form" novalidate>
      <h3 id="form-title">Añadir libro</h3>

      <div style="display: none;" id="book-id-div">
        <label for="book-id">ID:</label>
        <input type="text" name="id" id="book-id" disabled>
      </div>

      <div>
        <label for="book-moduleCode">moduleCode: </label>
        <select name="moduleCode" id="book-moduleCode" required>
          <option value="" id="select">tria el modul:</option>
        </select>
      </div>

      <div>
        <label for="book-publisher">Publisher: </label>
        <input type="text" id="book-publisher" name="publisher" required>
      </div>

      <div>
        <label for="book-price">Precio: </label>
        <input type="number" name="price" id="book-price" required step="0.01" min="0">
      </div>

      <div>
        <label for="book-pages">Paginas: </label>
        <input type="number" name="pages" id="book-pages" required min="0">
      </div>

      <div>
        <p>Status: </p>
        <input type="radio" id="status-good" name="status" value="good" required>
        <label for="status-good">good</label>

        <input type="radio" id="status-bad" name="status" value="bad">
        <label for="status-bad">bad</label>
      </div>

      <div>
        <label for="book-comments">comentarios: </label>
        <textarea name="comments" id="book-comments"></textarea>
      </div>

      <div>
        <label for="book-soldDate">Fecha de venta: </label>
        <input type="date" name="soldDate" id="book-soldDate">
      </div>

      <div>
        <button type="submit" id="btn-submit">Guardar Libro</button>
        <button type="reset" id="btn-reset">Reset</button>
      </div>

    </form>
</template>