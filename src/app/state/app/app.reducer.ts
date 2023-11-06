import { createReducer ,on} from "@ngrx/store";
import { login} from "./app.action";
import { detail } from "src/app/model/form.models";


export interface loginDetails{
data:detail;
}

export const initialState :loginDetails={
    data:{firstName:'',password:''}
}

export const loginReducer=createReducer(
    initialState,
    on(login,(state,{data})=>({
        ...state,
        data:data
    }))
)