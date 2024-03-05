import { configureStore } from "@reduxjs/toolkit";
import cartSclice from "./sclices/cart-sclice";

const store = configureStore({
  reducer:{

    cart : cartSclice
  }
})
export default store ;