import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: string = "Aayush";
  myName: String = '';

  constructor() { }

  form: RegisterForm = {
    
    FirstName: '',
    LastName: '',
    email: '',
    password: '',
    confirmpassword: ''

  };

  ngOnInit(): void {
  }

  handleInput(event: any){
     this.myName = event.target.value;
  }

  submit() {
    console.log(this.form);
  }



}
