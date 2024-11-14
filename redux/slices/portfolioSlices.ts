import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data:[]
}
const portfolioSlice = createSlice({
    name:"portfolio",
    initialState,
    reducers:{
        setData(state, action){
            state.data = action.payload
        }
    }
});
export const {setData} = portfolioSlice.actions;
export default portfolioSlice.reducer;