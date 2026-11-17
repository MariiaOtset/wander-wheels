import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {removeNulls} from "../../utils/removeNulls.js";
const api=axios.create({baseURL:"https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/"});
export const fetchCampers=createAsyncThunk("campers/fetchAll",async(params,thunkAPI)=>{
 const query=new URLSearchParams({...removeNulls(params),limit:5});
 try{const {data}=await api.get("campers?"+query.toString(),{signal:thunkAPI.signal});return data;}
 catch(error){if(error.response?.status===404)return {items:[],total:0};return thunkAPI.rejectWithValue({status:error.response?.status??0,message:error.message??"Failed to load campers"});}
});
export const fetchCamperById=createAsyncThunk("campers/fetchOneCamper",async(id,thunkAPI)=>{
 try{const {data}=await api.get("campers/"+encodeURIComponent(id),{signal:thunkAPI.signal});return data;}
 catch(error){return thunkAPI.rejectWithValue({status:error.response?.status??0,message:error.message??"Failed to load camper"});}
});
