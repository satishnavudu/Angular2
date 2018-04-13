import {Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name:'convertpspace'
})
export class ConvertToSpace implements PipeTransform{
    transform(value:string,character:string):string{
        return value.replace(character,' ')
        }
}