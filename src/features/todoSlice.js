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
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
