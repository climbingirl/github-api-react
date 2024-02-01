import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const GITHUB_API_FAV_KEY = 'GITHUB_API_FAV_KEY';

interface InitialState {
  favourites: string[];
}

const initialState: InitialState = {
  favourites: JSON.parse(localStorage.getItem(GITHUB_API_FAV_KEY) ?? '[]'),
};

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<string>) => {
      state.favourites.push(action.payload);
      localStorage.setItem(
        GITHUB_API_FAV_KEY,
        JSON.stringify(state.favourites)
      );
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(
        (favorite) => favorite !== action.payload
      );
      localStorage.setItem(
        GITHUB_API_FAV_KEY,
        JSON.stringify(state.favourites)
      );
    },
  },
});

export const githubActions = githubSlice.actions;
export default githubSlice.reducer;
