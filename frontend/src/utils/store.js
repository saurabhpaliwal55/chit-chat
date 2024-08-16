import { configureStore } from "@reduxjs/toolkit";
import refreshSidebar from "./refreshSidebar.js";

export const store = configureStore({
    reducer:{
        refreshKey:refreshSidebar,
    }
});