import{createSelector} from '@ngrx/store'
import { loginDetails } from './app.reducer'
import { AppState } from '../app.state'

export const selectDetails=(state:AppState)=>state.appState;

export const selectAllDetails=createSelector(
    selectDetails,
    (state:loginDetails)=>state.data
)