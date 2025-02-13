import { getAllPlacesFromFb } from "@/api/firebaseOperations/getAllPlacesFromFb";
import { IPlace } from "@/interfaces/place.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface PlacesState {
  places: IPlace[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: PlacesState = {
  places: [],
  isLoading: false,
  isError: false,
};

export const fetchPlaces = createAsyncThunk("places/fetchPlaces", async () => {
  try {
    const placesData = await getAllPlacesFromFb();
    return placesData;
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    throw error;
  }
});

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPlaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.places = action.payload;
        state.isError = false;
      })
      .addCase(fetchPlaces.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const placesActions = placesSlice.actions;
export default placesSlice.reducer;
