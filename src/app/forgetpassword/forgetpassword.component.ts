import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import { ForgetpasswordService } from '../service/forgetpassword.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {


  form={
    "id":0,
    "login_id":""
  }

  inputError = {
    "login_id":""
  };


  message = "";

  success: boolean = true;

  constructor(private aroute: ActivatedRoute, private router: Router, private service: ForgetpasswordService) { }

  ngOnInit(): void {
  }
  Forgetpassword() {
    
    var _self = this;
    this.service.Forgetpassword(this.form, function (res, error) {
      if (res.form.error) {
        _self.success = false;
        _self.message = res.form.message;
        _self.inputError=res.form.inputError;
        console.log("yoooooooooooooooooooooooooo",res.form.inputError);
        return;
        
      }
      _self.success = true;
      if(_self.success){
        _self.message = res.form.message;
        _self.inputError = {
          "login_id": ""
        };
      }else{
        _self.message = "Data Error";
        // _self.inputError = res.inputError
      }
      
    });
      this.inputError = {
        "login_id": ""
        
      };
    }
  
  }

