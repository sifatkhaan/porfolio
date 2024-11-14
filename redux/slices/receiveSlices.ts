import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data:[]
}
const mySlice = createSlice({
    name: "portfolio",
    initialState,
    reducers:{
        setData(state, action){
            state.data = action.payload
        }
    }
});

export const {setData} = mySlice.actions;
export default mySlice.reducer;