import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Monster',
    avatar: 'https://i.pravatar.cc/150?u=monster'
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload || state.name;
        },
        changeAvatar: (state, action) => {
            state.avatar = action.payload || state.avatar;
        }
    }
});

export const { changeName, changeAvatar } = userSlice.actions;
export default userSlice.reducer;




