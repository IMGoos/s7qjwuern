import {configureStore} from "@reduxjs/toolkit";
import reactionsReducer from './Slices/SliceReaction';
import cardReducer from './Slices/SliceCard';
import {api} from "../Api/api";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        reactions: reactionsReducer,
        card: cardReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;