import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { EAuctionService } from './app.service';
import { Buyer } from './buyer';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EAuction';
  displayedColumns: string[] = ['bidAmount', 'name', 'email', 'phone'];
  products:any[]=new Array();
  productId:string='';
  productName:string='Select Product';
  product:any;
  constructor(private eAuctionservice: EAuctionService) {
    this.product= {_id:"", productName: "", shortDescription: "",
     detailedDescription: "",category: "",
     startingPrice: 0.00,bidEndDate:"",buyers:new Array()};

    this.eAuctionservice.getProducts().subscribe(res=>{
       this.products = res;
       console.log(this.products);
    });
   }  
  getProductById(){
    if(this.productName!="Select Product"){
      this.eAuctionservice.getAllBidsByProductName(this.productName).subscribe(res=>{
        this.product = res;
     });
    }
    else
      alert("Please select product.");
  }


}
