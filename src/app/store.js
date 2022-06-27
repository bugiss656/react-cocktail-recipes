import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../features/search/searchSlice'
import drinksReducer from '../features/drinks/drinksByCategorySlice'


export const store = configureStore({
  reducer: {
    search: searchReducer,
    drinks: drinksReducer
  },
});