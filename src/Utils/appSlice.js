import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        openMenu:(state,action)=>{
            state.isMenuOpen = action.payload;
        },
        closeMenu:(state, action)=>{
            state.isMenuOpen = action.payload;
        },
        toggleMenu:(state, action)=>{
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});
// console.log(appSlice);
export default appSlice.reducer;
export const {openMenu, closeMenu, toggleMenu} = appSlice.actions;