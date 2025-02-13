import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { placesSlice } from "./places.slice";

const rootReducer = combineReducers({
  places: placesSlice.reducer,
});

const additionalMiddlewares: Middleware[] = [];

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(additionalMiddlewares),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
