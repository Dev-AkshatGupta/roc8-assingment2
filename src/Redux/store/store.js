import { configureStore  } from "@reduxjs/toolkit";
import operationsReducer from "./../Reducers/operationsSlice";
 const store=configureStore({
    reducer:{
operations:operationsReducer
    }
});
 export default store;