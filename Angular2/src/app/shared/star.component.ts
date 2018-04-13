import { Component,Input,OnChanges,Output, EventEmitter } from "@angular/core";

@Component({
    selector:'star-componet',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
 @Input() rating:number;
 starWidth:number;
ngOnChanges(){
    this.starWidth=this.rating * 86/5;
}
 @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
onClick() { 
    //console.log(this.rating);
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    
 }


}