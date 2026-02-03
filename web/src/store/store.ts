import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import vehiclesReducer from './slices/vehiclesSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        vehicles: vehiclesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
