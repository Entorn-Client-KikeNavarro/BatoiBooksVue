import { reactive } from "vue";
import * as api from "../services/api";

export const store = {
  debug: true,
  state: reactive({
    books: [],
    
  }),
  async getDBBooksAction() {
    if (this.debug) console.log("getDBBooksAction triggered");
    this.state.books = await api.getDBBooks();
  }
}