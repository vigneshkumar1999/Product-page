import { createSelector } from "@ngrx/store";
import { productDetails } from "./product.reducer";
import { AppState } from "../app.state";

export const selectProductDetails=(state:AppState)=>state.productState

export const selectAllProductDetails=createSelector(
    selectProductDetails,
    (state:productDetails)=>state.products
)