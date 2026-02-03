import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '@/domain/entities/Vehicle';
import { vehicleService } from '@/services/VehicleService';

export type { Vehicle };

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

// Obtiene vehículos usando el servicio
export const fetchVehicles = createAsyncThunk('vehicles/fetchVehicles', async () => {
    const vehicles = await vehicleService.getAll();
    return vehicles;
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
