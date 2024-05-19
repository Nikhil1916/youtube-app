import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "./constants";

const chatSlice = createSlice({
    name:'chat',
    reducers: {
        addChat:(state, action)=>{
            state.messages.splice(LIVE_CHAT_OFFSET, 2);
            state.messages.unshift(action.payload);
        }
    },
    initialState: {
        messages: []
    }
});
export const {addChat} = chatSlice.actions;
export default chatSlice.reducer;