import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginform!:FormGroup;

  constructor(private formbuilder:FormBuilder ,private http:HttpClient  ,private router:Router)
  {}

  ngOnInit():void{
    this.loginform=this.formbuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],

    })
  }

  login()
  {
    this.http.get<any>("http://localhost:3000/signup/")
    .subscribe(res=>{
      let user=res.find((a:any)=>{
        return a.email == this.loginform.value.email && a.password == this.loginform.value.password
      //  console.log(a.email+a.password);
      //console.log(user);
      });
      if(user){
        alert("logged in successfully");
        this.loginform.reset();
        this.router.navigate(['home'])

      }
       else
      {
        alert("user doesnot found");
        console.log(this.loginform.value)
      }

    }, err=>{
      alert("something went wrong")
    })

  }

}
