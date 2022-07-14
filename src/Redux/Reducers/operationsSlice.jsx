import {createSlice} from "@reduxjs/toolkit";
// import data from "./../../"

  const initialState={
    // products:data.products,
    cart:[]
}
// console.log(data);
const operationsSlice=createSlice({
    name:"operations",
    initialState,
    reducers:{
        addToCart(){
        
        },
    },
    extraReducers:{}
})
export const {addToCart}=operationsSlice.actions;
export default operationsSlice.reducer;