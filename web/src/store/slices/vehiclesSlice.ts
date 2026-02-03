import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define Vehicle Type locally for now (move to separate types file later)
export interface Vehicle {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    transmission: string;
    seats: number;
}

interface VehiclesState {
    list: Vehicle[];
    selectedVehicle: Vehicle | null;
    loading: boolean;
    error: string | null;
}

const initialState: VehiclesState = {
    list: [],
    selectedVehicle: null,
    loading: false,
    error: null,
};

// Async thunk to fetch vehicles (mock for now, will replace with API call)
export const fetchVehicles = createAsyncThunk('vehicles/fetchVehicles', async () => {
    // In a real scenario, this would be: 
    // const response = await fetch('http://localhost:8000/api/vehicles');
    // return response.json();

    // Using the real API now since we set it up!
    const response = await fetch('http://localhost:8000/api/vehicles');
    if (!response.ok) {
        throw new Error('Failed to fetch vehicles');
    }
    return response.json();
});

const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        selectVehicle: (state, action: PayloadAction<Vehicle>) => {
            state.selectedVehicle = action.payload;
        },
        clearSelection: (state) => {
            state.selectedVehicle = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVehicles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVehicles.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchVehicles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { selectVehicle, clearSelection } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
