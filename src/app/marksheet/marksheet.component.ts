import { Component, OnInit } from '@angular/core';
import { MarksheetService } from '../service/marksheet.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {


  //College form
  form = {
    "id": 0,
    "rollNumber": "",
    "name": "",
    "physics": "",
    "chemistry": "",
    "maths": ""
  };

  //Input errors
  inputError = {
    "rollNumber": "",
    "name": "",
    "physics": "",
    "chemistry": "",
    "maths": ""
   
  };

  //Server success/fail message
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
  constructor(private aroute: ActivatedRoute, private router: Router, private service: MarksheetService) { }

  /**
   * Display record if primary key is received
   */
  ngOnInit() {
    console.log("Display record if primary key is received");
    var _self = this;
    this.form.id = parseInt(this.aroute.snapshot.paramMap.get("id"));
    if ( !isNaN(this.form.id) && this.form.id > 0) {
      this.service.get(this.form.id, function (res, error) {
        if (error) {
          alert("Error:" + error.message);
          return;
        }
        _self.form = res.data;
      });
    }
  }

  /**
   * Save a record
   */
  save() {
    console.log("Save a record");
    if(isNaN(this.form.id)){
      this.form.id= 0;
    }
    var _self = this;
    this.service.save(this.form, function (res, error) {
      if (res.data.error) {
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError=res.form.inputError;
        return;
      }
      _self.success = true;
      if(_self.success){
        _self.message = res.data.message;
        _self.inputError = {
          "rollNumber": "",
          "name": "",
          "physics": "",
          "chemistry": "",
          "maths": ""
        };
      }else{
        _self.message = "Data Error";
       // _self.inputError = res.inputerror
      }
    });
  }

  /**
   * Go to search page
   */
  search() {
    console.log("search a record");
    this.router.navigateByUrl('/marksheetlist');
  }
  reset() {
    console.log("reset a record");
    this.form = {
      "id": 0,
      "rollNumber": "",
      "name": "",
      "physics": "",
      "chemistry": "",
      "maths": ""
    };

  }


}
