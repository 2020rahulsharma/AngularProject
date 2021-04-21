import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ActivatedRoute } from "@angular/router";
import { ChangepasswordService } from '../service/changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {


  form = {
    "login_id":"",
    "oldPassword": "",
    "newPassword": "",
    "confirmPassword": ""
  };


  inputError = {
    "oldPassword": "",
    "newPassword": "",
    "confirmPassword": ""
  };

  message = "";


  //Server error
  success: boolean = true;
  /**
   * Injects services 
   * 
   * @param aroute 
   * @param router 
   * @param service 
   */
  constructor(private aroute: ActivatedRoute, private router: Router, private service: ChangepasswordService) { }

 

  ngOnInit() {
    localStorage.getItem("loginId")
  }
  /**
   * Save a record
   */
  save() {
      
    
    var _self = this;
    this.form.login_id= localStorage.getItem("loginId");
    // console.log("bbbbbbbbbbbbbbbbbbbb",localStorage.getItem("loginId"))
    this.service.save(this.form, function (res, error) {
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
        "oldPassword": "",
        "newPassword": "",
        "confirmPassword": ""
      };
    }else{
      _self.message = "Data Error";
      // _self.inputError = res.inputError
    }
    
  });
    this.inputError = {
      "oldPassword": "",
      "newPassword": "",
      "confirmPassword": "",
      
    };
  }

}