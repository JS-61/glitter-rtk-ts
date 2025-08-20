import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type StatsType = 'followers' | 'following';

type StateProps = {
    followers: number;
    following: number;
};

type ChangeStatsPayload = {
    statsType: StatsType;
    sum: number;
};

const initialState: StateProps = {
    followers: 0,
    following: 0,
};

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        changeStats: {
            reducer: (state, action: PayloadAction<ChangeStatsPayload>) => {
                const { statsType, sum } = action.payload;
                const updatedValue = state[statsType] + sum;
                state[statsType] = updatedValue >= 0 ? updatedValue : 0;
            },
            prepare: (statsType: StatsType, sum: number) => ({
                payload: { statsType, sum }
            }),
        },
    },
});

export const { changeStats } = statsSlice.actions;
export default statsSlice.reducer;