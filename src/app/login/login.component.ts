import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
        data="Your perfect banking partner"
        placeholderData="Enter account number"
        constructor() {}
        ngOnInit(): void{
          
        }
        login(){
          alert("login clicked")
        }
        unameChange(event:any){
          console.log(event);
          console.log(event.target.value);
          
        }
}
