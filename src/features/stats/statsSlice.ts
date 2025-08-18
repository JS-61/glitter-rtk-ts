import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    followers: 0,
    following: 0
};

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        changeStats: {
            reducer: (state, action) => {
                const res = state[action.payload.statsType] + action.payload.sum;
                state[action.payload.statsType] = res >= 0 ? res : 0
            },
            prepare: (statsType, sum) => ({payload: {statsType, sum}})
        }
    }




});

export const { changeStats } = statsSlice.actions;
export default statsSlice.reducer;