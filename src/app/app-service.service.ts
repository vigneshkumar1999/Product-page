import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs'
import { Product } from './model/product.model';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }
  api:string='https://fakestoreapi.com/products'

  getProduct():Observable<Product[]>{
      return this.http.get<Product[]>(this.api) ||[]
  }
}
