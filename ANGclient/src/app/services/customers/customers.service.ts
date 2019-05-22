import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

private apiUrl :string;

  constructor(    private HttpClient: HttpClient) {
    this.apiUrl= environment.apiUrl
  }

  public readAllCustomers = () => {
    return this.HttpClient.get(`${this.apiUrl}/merchant`)
      .toPromise().then(this.getData).catch(this.handleError)
  }

  public updateCustomers = () => {

  }

  public deleteCustomers = () => {

  }

  // Get the API response
  private getData(res: any){
    return res || {};
  };

  // Get the API error
  private handleError(err: any){
    return Promise.reject(err.error);
  };
}
