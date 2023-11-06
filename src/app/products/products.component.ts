import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Store } from '@ngrx/store';
import { selectAllProductDetails } from '../state/product/product.selector';
import { getProductAction } from '../state/product/product.action';
import { AppState } from '../state/app.state';
import { Product } from '../model/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
constructor(private store :Store<AppState>){}
products!:Product[];
ngOnInit(): void {
  this.store.dispatch(getProductAction())

  this.store.select(selectAllProductDetails).subscribe((data:Product[])=>{
    this.products=data;
  })
}
}
