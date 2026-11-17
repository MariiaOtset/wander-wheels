import {useContext} from "react";
import {CompareContext} from "./compare-store.js";
export function useCompare(){const context=useContext(CompareContext);if(!context)throw new Error("CompareProvider missing");return context;}
