import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    city: string;
    pickupDate: string;
    returnDate: string;
}

const initialState: SearchState = {
    city: '',
    pickupDate: '',
    returnDate: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchCriteria: (state, action: PayloadAction<SearchState>) => {
            state.city = action.payload.city;
            state.pickupDate = action.payload.pickupDate;
            state.returnDate = action.payload.returnDate;
        },
        resetSearch: (state) => {
            state.city = '';
            state.pickupDate = '';
            state.returnDate = '';
        },
    },
});

export const { setSearchCriteria, resetSearch } = searchSlice.actions;
export default searchSlice.reducer;
