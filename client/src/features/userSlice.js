import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: 0,
    username: "",
    email: "",
    phone_number: "",
    merchant_status: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.id = action.payload.id;
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.phone_number = action.payload.phone_number;
      state.value.merchant_status = action.payload.merchant_status;
    },
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
