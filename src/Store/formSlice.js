import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        data: {},
    },
    reducers: {
        saveFormData: (state, action) => {
            console.log('Saving form data in the redux toolkit', action.payload);
            state.data = action.payload;
        },
    },
});

export const { saveFormData } = formSlice.actions;
export default formSlice.reducer;
