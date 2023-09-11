import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPost} from "../../Types/Post/types";

const initialState: {currentCard: IPost | null} = {
    currentCard: null
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCurrentCard: (state, action: PayloadAction<IPost | null>) => {
            state.currentCard = action.payload;
        }
    }
});

export const { setCurrentCard } = cardSlice.actions;

export default cardSlice.reducer;