import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    constructor(private loginservice: LoginService, private router: Router) 
    { }
    signInForm: any;
  
    ngOnInit(): void {
      this.signInForm = new FormGroup({

        'username': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required)
  
      });
    }
  
    login() {
      let user = this.signInForm.value;
      this.loginservice.login(user.username, user.password).then(
        res => {
          if (res.loginSuccessful) {
            console.log(res)
            debugger;
            this.router.navigate(['landing'])
          }
         
        }, (err)=>{
          console.log(err)
        }
  
      )
    }
  
    resetForm() {
      this.signInForm.reset()
    }

}
