import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type modeType = "ru-en" | "en-ru";

interface TransliteratorState {
  text: string;
  mode: modeType;
}

const initialState: TransliteratorState = {
  text: "Привет",
  mode: "ru-en",
};

export const transliteratorSlice = createSlice({
  name: "transliterator",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    switchLanguages: (state, action: PayloadAction<modeType>) => {
      state.mode = action.payload;
    },
  },
});

export default transliteratorSlice.reducer;
export const { setText, switchLanguages } = transliteratorSlice.actions;
