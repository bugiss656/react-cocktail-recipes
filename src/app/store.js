import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../features/search/searchSlice'
import drinksReducer from '../features/drinks/drinksByCategorySlice'
import randomDrinkReducer from '../features/randomDrink/randomDrinkSlice'


export const store = configureStore({
  reducer: {
    search: searchReducer,
    drinks: drinksReducer,
    randomDrink: randomDrinkReducer
  },
});