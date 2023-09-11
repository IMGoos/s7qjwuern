// reactionsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReactionState {
    likes: number;
    dislikes: number;
    status: 'liked' | 'disliked' | 'none';
}

interface ReactionsState {
    [postId: number]: ReactionState;
}

const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

const initialState: ReactionsState = {};

const reactionsSlice = createSlice({
    name: 'reactions',
    initialState,
    reducers: {
        initializeReaction: (state, action: PayloadAction<number>) => {
            const postId = action.payload;
            if (!state[postId]) {
                state[postId] = {
                    likes: getRandomInt(51),
                    dislikes: getRandomInt(51),
                    status: 'none',
                };
            }
        },
        toggleLike: (state, action: PayloadAction<number>) => {
            const postId = action.payload;
            if (state[postId].status === 'liked') {
                state[postId].likes -= 1;
                state[postId].status = 'none';
            } else {
                state[postId].likes += 1;
                if (state[postId].status === 'disliked') {
                    state[postId].dislikes -= 1;
                }
                state[postId].status = 'liked';
            }
        },
        toggleDislike: (state, action: PayloadAction<number>) => {
            const postId = action.payload;
            if (state[postId].status === 'disliked') {
                state[postId].dislikes -= 1;
                state[postId].status = 'none';
            } else {
                state[postId].dislikes += 1;
                if (state[postId].status === 'liked') {
                    state[postId].likes -= 1;
                }
                state[postId].status = 'disliked';
            }
        },
    },
});

export const { initializeReaction, toggleLike, toggleDislike } = reactionsSlice.actions;

export default reactionsSlice.reducer;
