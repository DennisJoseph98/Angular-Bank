import { Component,OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      
        uname:any;
        psw:any;
        data="Your perfect banking partner"
        placeholderData="Enter account number"
        constructor(private ds:DataService) {}
        ngOnInit(): void{
          
        }
        login(){
        // alert(this.ds.sdata)
        alert(this.ds.checkData())
        }
        
}
