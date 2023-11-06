import{createAction,props} from '@ngrx/store'
import { detail } from 'src/app/model/form.models'

export const login=createAction(
    '[Login form] Login',
    props<{data:detail}>()
)

