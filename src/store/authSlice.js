import {createSlice} from "@reduxjs/toolkit"

const initialState={
    status:false,
    userData:null
}

export const BlogSlice=createSlice({
    name:'MegaBlog',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload
        },
        logOut:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})

 export const {logOut,login}=BlogSlice.actions
export default BlogSlice.reducer;