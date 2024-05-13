import {createSlice} from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';
enableMapSet();
const searchSlice = createSlice({
    name:'search', 
    initialState: {
        suggestionSearch: new Map()
    },
    reducers: {
        cacheResults:(state, action) => {
            state.suggestionSearch.set(action.payload.key, action.payload.value);
        }
    }
});

export default searchSlice.reducer;
export const {cacheResults} = searchSlice.actions;