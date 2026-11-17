import {createAsyncThunk} from "@reduxjs/toolkit";
import {findCamper,selectCamperPage} from "../../data/camperQueries.js";

/* The demo catalogue is bundled locally so a removed/unstable MockAPI never
   makes the home page, filters, or camper detail routes disappear. */
export const fetchCampers=createAsyncThunk("campers/fetchAll",async(params={},api)=>{
 if(api.signal.aborted)return api.rejectWithValue({status:0,message:"Request cancelled"});
 return selectCamperPage(params);
});
export const fetchCamperById=createAsyncThunk("campers/fetchOneCamper",async(id,api)=>{
 if(api.signal.aborted)return api.rejectWithValue({status:0,message:"Request cancelled"});
 const camper=findCamper(id);
 if(!camper)return api.rejectWithValue({status:404,message:"Camper not found"});
 return camper;
});
