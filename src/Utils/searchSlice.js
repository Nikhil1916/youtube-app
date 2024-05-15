import {createSlice} from "@reduxjs/toolkit";
// import { enableMapSet } from 'immer';
// enableMapSet();
const searchSlice = createSlice({
    name:'search', 
    initialState: {
        suggestionSearch: {},
        searchedMovies: []
    },
    reducers: {
        cacheResults:(state, action) => {
            state.suggestionSearch[action.payload.key]=action.payload.value;
            // set(action.payload.key, action.payload.value)
        },
        searchedMovies:(state,action) => {
            state.searchedMovies = action.payload;
        }
    }
});

export default searchSlice.reducer;
export const {cacheResults, searchedMovies} = searchSlice.actions;