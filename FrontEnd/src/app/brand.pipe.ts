import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brand'
})

@Injectable()
export class BrandPipe implements PipeTransform {

  transform( array: Array<any>, filterField: any, filterValue: any ): Array<any> {
    console.log(filterValue);
    if (!array) return [];
    return array.filter(item => item[filterField] == filterValue);
}

}
