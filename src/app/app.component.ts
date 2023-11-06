import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { selectAllDetails } from './state/app/app.selector';
import { detail } from './model/form.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Product page';
  constructor(private store1:Store<AppState>){}
  ngOnInit(): void {
    this.store1.select(selectAllDetails).subscribe(res=>this.userData=res)
}
userData:detail={firstName:'',password:''};
}
