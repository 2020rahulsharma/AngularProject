



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegeService } from '../service/college.service';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent implements OnInit {
  //Server response message
  message = "";

  //Contains Marksheet list
  list = [];

  //Search form
  form = {
    "collegeName": "",
    "collegeAddress": "",
    "pageNo": 1,
  };

  /**
   * Injects services
   *
   * @param router
   * @param service
   */
  constructor(private router: Router, private service: CollegeService) { }


  /**
   * Loads list
   */
  ngOnInit() {
    this.search(); //Loads list
  }

  /**
   * Edits a Marksheet
   *
   * @param id
   */
  edit(id) {
    this.router.navigateByUrl('/college/' + id);
  }

  /**
   * Deletes a record
   * @param id
   */
  delete(id) {
    var _self = this;
    this.service.delete(id, function (res, error) {
      if (res.data.error) {
        alert("Error " + res.data.message);
        return;
      }else{
        _self.message = res.data.message
      }
      _self.search();
    });
  }

  next(){
    var _self = this;
    this.form.pageNo+=1
    _self.search();
  }

  previous(){
    var _self = this;
    this.form.pageNo-=1
    _self.search();
  }

  /**
   * Searches and get list
   */
  search() {
    var _self = this;
    
    this.service.search(this.form, function (res, error) {
      if (error) {
        alert("Error " + res.message);
        return;
      }
      _self.list = res.resultkey;
      console.log("000000000000000000------------->",_self.list)
    });
  }

}

