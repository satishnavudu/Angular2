import { ProductsService } from "./products.service";
import { Component } from "@angular/core";
import { IProducts } from "./products";


@Component({
    selector:'pm-list',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent{
    data:Boolean=false;
    somesample:String="rate"
    tableTitle:string="My Product List";
    showMyImages:boolean=false;
    filterData:String="filter"
    products:any;

    constructor(private _productService:ProductsService){
            //var _productService=new ProductsService()
            this.products=this._productService.getProducts();
    }

    showImages(){
        this.showMyImages=!this.showMyImages;
    }

    onRatingClicked(message:string){
      // this.tableTitle='prodcut List:' +message;  
      console.log(message);   
    }

   // products:IProducts[]=
    onClick(){
        console.log("print");
    }
}