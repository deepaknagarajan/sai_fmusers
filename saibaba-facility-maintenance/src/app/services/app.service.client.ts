import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient) {}
    url = "http://localhost:5000";

    addUser = (user: any) => {
      console.log(user);
      return this.httpClient.post(this.url + '/api/addUser', user, httpOptions);
    }





    




} 
