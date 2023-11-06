import { Component } from '@angular/core';
import { select,Store } from '@ngrx/store';
import { login } from '../state/app/app.action';
import{Observable} from'rxjs'
import { selectAllDetails} from '../state/app/app.selector';
import { detail } from '../model/form.models';
import { AppState } from '../state/app.state';
import { initialState } from '../state/app/app.reducer';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Create Forms
  Name=new FormControl('')
  Password=new FormControl('')
  
  
public allDetails$=this.store.select(selectAllDetails)
data:detail={firstName:'',password: ''}

constructor(private store:Store<AppState>,private router:Router){
}

responseData:detail={firstName:'',password: ''};


userDetailsFunction(){
  this.router.navigate([''])
 if(this.Name.value!=null&&this.Password.value!=null) this.data={firstName:this.Name.value,password:this.Password.value}

  this.store.dispatch(login({data:this.data}))
  this.allDetails$.subscribe(
  (response)=>{this.responseData=response}
 )

 alert('Login Successfully')
    console.log(this.Name.value)
    console.log(this.Password.value)
  this.Name.setValue('');
  this.Password.setValue('');

}
isValid(){
  return this.Name.value&&this.Password.value;
}
}
