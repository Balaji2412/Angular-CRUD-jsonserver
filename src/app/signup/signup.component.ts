import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {
  public signupforms!:FormGroup;

  constructor(private formbuilder:FormBuilder ,private http:HttpClient ,private router:Router )
  {}

  ngOnInit():void{
    this.signupforms=this.formbuilder.group({
      fullname:['',Validators.required],
      mobilenumber:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],

    })
  }

  signup()
  {
    this.http.post<any>("http://localhost:3000/signup",this.signupforms.value)
    .subscribe(res=>{
      alert("signedup successfull......!");
      this.signupforms.reset();
      this.router.navigate(['login'])
    })
  }


}
