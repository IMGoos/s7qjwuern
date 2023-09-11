import { combineReducers } from '@reduxjs/toolkit';
import cardReducer from '../store/Slices/SliceCard';

const rootReducer = combineReducers({
    card: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;