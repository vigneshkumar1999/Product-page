import { createAction,props } from "@ngrx/store";
import { Product } from "src/app/model/product.model";

export const getProductAction=createAction(
    '[Get Data] Get Product'
)

export const loadProductActionSucess=createAction(
    '[Load data] Load Data',
    props<{ products: Product[] }>()
)

export const loadProductActionFailure=createAction(
    '[Load Data] Load Data Failure',
    props<{error:string}>()
)