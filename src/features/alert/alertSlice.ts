import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "" as "success" | "error" | "info" | "warning",
  show: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showModal: (
      state,
      {
        payload: { message, type },
      }: {
        payload: {
          message: string;
          type: "success" | "error" | "info" | "warning";
        };
      }
    ) => {
      state.message = message;
      state.type = type;
      state.show = !state.show;
    },
  },
});

const { reducer, actions } = alertSlice;

export const { showModal } = actions;

export default reducer;
