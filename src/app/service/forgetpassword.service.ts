import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  endpoint = "http://localhost:8000/ORSAPI/Login/";


    /**
   * Constructor injects HTTP service
   *
   * @param http
   */
     constructor(private http: HttpClient) { }

     Forgetpassword(form, compCB) {

      let url = this.endpoint + "Forgetpassword";
      this.http.post(url, form).subscribe(
        (data) => {
          compCB(data);
        },
        (data) => {
          compCB(data, true);
        });
    }
  
  }

