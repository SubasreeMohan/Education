import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { Buyer } from './buyer';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class EAuctionService { 
  // apiGateWayURL:string="https://localhost:44347/apigateway/";
  // apiGateWayURL:string="http://eacutionapigatewayservice.centralindia.azurecontainer.io/apigateway/";
  apiGateWayURL:string="https://eauctiongatewayappservice.azurewebsites.net/apigateway/";
  constructor(private http: HttpClient) { } 
  getProducts(): Observable<any>
  {   
    var url=this.apiGateWayURL+"GetAllProduct";
    return this.http.get(url, {headers:this.getRequestOptions(),withCredentials:false});
  }
  getAllBidsByProductName(productName: string): Observable<any>
  {   
    var url=this.apiGateWayURL+"GetAllBidsByProductName/"+productName;
    return this.http.get(url, {headers:this.getRequestOptions(),withCredentials:false});
  }
  private getRequestOptions():HttpHeaders{
    const headers=new HttpHeaders();
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    return headers;
  }
}