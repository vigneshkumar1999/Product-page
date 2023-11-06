import { loginDetails } from "./app/app.reducer";
import { productDetails } from "./product/product.reducer";
export interface AppState{
    appState:loginDetails;
    productState:productDetails
}