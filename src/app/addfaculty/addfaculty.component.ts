



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * ActivatedRoute is used to read route parameters
 */
import { ActivatedRoute } from "@angular/router";
import { AddFacultyService } from '../service/addfaculty.service';

/**
 * College controller
 *
 * @author Sunil Sahu
 * @Copyright (c) SunilOS Infotech Pvt Ltd*
*/

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {

  //College form
  form = {
    "id": 0,
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "address": "",
    "gender": "",
    "dob": "",
    "college_ID": 0,
    "subject_ID": 0,
    "course_ID": 0,
    
    

  };

  //Input errors
  inputError = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "address": "",
    "gender": "",
    "dob": "",
    "college_ID": 0,
    "subject_ID": 0,
    "course_ID": 0
     

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
  constructor(private aroute: ActivatedRoute, private router: Router, private service: AddFacultyService) { }

  /**
   * Display record if primary key is received
   */
  ngOnInit() {
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
    this.preload()
  }

  /**
   * Save a record
   */
  save() {
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
          "firstName": "",
          "lastName": "",
          "email": "",
          "password": "",
          "address": "",
          "gender": "",
          "dob": "",
          "college_ID": 0,
          "subject_ID": 0,
          "course_ID": 0,
           
           

        };
      }else{
        _self.message = "Data Error";
       // _self.inputError = res.inputerror
      }
    });
  }
  collegeData=[]
  courseData=[]
  subjectData=[]
  preload() {
    var _self = this;
    this.service.preload( function (res, error) {
      if (error) {
        alert("Error:" + error.message);
        return;
      }

      _self.collegeData=res.collegeList ;
      _self.courseData=res.courseList ;
      _self.subjectData=res.subjectList
      // console.log("------------------------->",res.preloadList)
    });

  }

  /**
   * Go to search page
   */
  search() {
    this.router.navigateByUrl('/addfacultylist');
  }
  reset() {
    this.form = {
      "id": 0,
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": "",
      "address": "",
      "gender": "",
      "dob": "",
      "college_ID": 0,
      "subject_ID": 0,
      "course_ID": 0

      };
      

  }


}

