import { configureStore } from "@reduxjs/toolkit";
import transliteratorReducer from "entities/transliterator/model/slice";

const store = configureStore({
  reducer: {
    transliterator: transliteratorReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
