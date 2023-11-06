import { createReducer,on } from '@ngrx/store';
import { getProductAction, loadProductActionFailure, loadProductActionSucess } from './product.action';
import { Product } from 'src/app/model/product.model';


export interface productDetails{
    products:Product[];
    error:string;
    status:string
}

 export const initialState:productDetails={
    products:[],
    error:"",
    status:"pending"
 }

 export const productsReducer = createReducer(
    initialState,
    on(getProductAction, (state, {}) => ({
        ...state,
        status:'loading'
    })),
    on(loadProductActionSucess, (state, {products}) => ({
        ...state,
        products: products,
        status:'success'        
    })),
    on(loadProductActionFailure, (state, {error}) => ({
        ...state,
        error: error,
        status:'error'        
    }))
)
