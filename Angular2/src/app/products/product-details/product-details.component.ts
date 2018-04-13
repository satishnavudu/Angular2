import { Component, OnInit } from '@angular/core';
import { IProducts } from '../products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProducts;
 
  constructor(private router:ActivatedRoute,
  private navrouter:Router) {

   }

  ngOnInit() {
    let id=+this.router.snapshot.paramMap.get('id');
    console.log(id);
    // let id = +this._route.snapshot.paramMap.get('id');
    // this.pageTitle += `: ${id}`;
    this.product = {
      "productId": id,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  }



  }
  backToProductList(prodcutID:any){
    if(prodcutID==1){
      this.navrouter.navigate(['/products'])
    }
    else{
      this.navrouter.navigate(['/home'])
    }
      if(prodcutID==1){
      this.navrouter.navigate(['/products'])
    }
    else{
      this.navrouter.navigate(['/home'])
    }
    
  }

}
