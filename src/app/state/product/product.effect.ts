
import { Injectable, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppServiceService } from "src/app/app-service.service";
import { createEffect,ofType,Actions } from "@ngrx/effects";
import { getProductAction, loadProductActionSucess } from './product.action';
import { catchError, map, switchMap,exhaustMap, withLatestFrom, of } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { AppState } from '../app.state';
import { selectProductDetails } from './product.selector';
import { detail } from 'src/app/model/form.models';
import { selectAllDetails } from '../app/app.selector';

@Injectable()
export class productEffect {
    constructor(
        private actions$:Actions,
        private store:Store<AppState>,
        private service:AppServiceService,
        
    ){}
    
    productsList!:Product[]
    loadProducts$ = createEffect(() =>
    this.actions$.pipe(
    ofType(getProductAction), 
    switchMap(() => {
        return this.service.getProduct().pipe(
            map((products: Product[]) => loadProductActionSucess({ products })),
            catchError((error) => of(loadProductActionSucess( error )))
        );
    })
    )
    );
    
}
