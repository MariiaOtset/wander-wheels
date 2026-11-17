import {createSlice} from "@reduxjs/toolkit";
import {fetchCampers,fetchCamperById} from "./operations.js";
const initialState={items:[],camperById:null,loading:false,error:null,total:null,notFound:false,activeListRequest:null,activeDetailsRequest:null};
const slice=createSlice({name:"campers",initialState,reducers:{resetItems(state){state.items=[];state.total=null;state.notFound=false;state.error=null;state.loading=false;state.activeListRequest=null;},resetSelectedCamper(state){state.camperById=null;state.error=null;state.notFound=false;state.loading=false;}},extraReducers:builder=>builder
 .addCase(fetchCampers.pending,(state,action)=>{state.loading=true;state.error=null;state.notFound=false;state.activeListRequest=action.meta.requestId;})
 .addCase(fetchCampers.fulfilled,(state,action)=>{if(action.meta.requestId!==state.activeListRequest)return;state.loading=false;const data=action.payload;state.items=[...state.items,...(data.items??(Array.isArray(data)?data:[]))].filter((item,index,items)=>items.findIndex(i=>i.id===item.id)===index);state.total=data.total??(Array.isArray(data)?data.length:0);})
 .addCase(fetchCampers.rejected,(state,action)=>{if(action.meta.requestId!==state.activeListRequest)return;state.loading=false;if(action.payload?.status===404)state.notFound=true;else if(!action.meta.aborted)state.error=true;})
 .addCase(fetchCamperById.pending,state=>{state.loading=true;state.error=null;state.notFound=false;state.camperById=null;})
 .addCase(fetchCamperById.fulfilled,(state,action)=>{state.loading=false;state.camperById=action.payload;})
 .addCase(fetchCamperById.rejected,(state,action)=>{state.loading=false;if(!action.meta.aborted){if(action.payload?.status===404)state.notFound=true;else state.error=true;}})
});
export const campersReducer=slice.reducer;
export const {resetItems,resetSelectedCamper}=slice.actions;
