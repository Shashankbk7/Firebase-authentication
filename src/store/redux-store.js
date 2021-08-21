import { createSlice, configureStore } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    email: null,
    token: "",
    expiresIn: null,
    kind: "",
    isLoggedIn: false,
    error: "",
    success: null,
    refreshToken: "",
    profileError: "",
    profileSuccess: "",
  },
  reducers: {
    loggedIn(state, action) {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.expiresIn = action.payload.expiresIn;
      state.kind = action.payload.kind;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = !!state.token;
      console.log(state.isLoggedIn);
    },
    error(state, action) {
      state.error = action.payload;
    },
    success(state, action) {
      state.success = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    profileError(state, actions) {
      state.profileError = actions.payload;
    },
    profileSuccess(state, action) {
      state.profileSuccess = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    authenticationSlice: authenticationSlice.reducer,
  },
});

export const Actions = authenticationSlice.actions;
export default store;
