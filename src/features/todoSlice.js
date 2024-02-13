import { createSlice } from "@reduxjs/toolkit";

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state.items));
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: JSON.parse(localStorage.getItem("todos")) || [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.items = [...state.items, action.payload];
      saveStateToLocalStorage(state);
    },
    updateTodo: (state, action) => {
      const { id, name, desc } = action.payload;
      const todoToUpdate = state.items.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.name = name;
        todoToUpdate.desc = desc;
        saveStateToLocalStorage(state);
      }
    },
    deleteTodo: (state, action) => {
      const idToDelete = action.payload;
      state.items = state.items.filter((todo) => todo.id !== idToDelete);
      saveStateToLocalStorage(state);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
