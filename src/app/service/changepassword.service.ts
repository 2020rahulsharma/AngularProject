import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {
//Rest endpoint
endpoint = "http://localhost:8000/ORSAPI/Changepassword/";

/**
 * Constructor injects HTTP service
 *
 * @param http
 */
constructor(private http: HttpClient) { }

/**
   * Add/Update college
   * @param form Adds or updates a record
   * @param response
   */
  save(form, compCB) {

    let url = this.endpoint + "save";
    this.http.post(url, form).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }

}