import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(left, right) {
    let filteredLeft = [];
    filteredLeft = left.filter(restaurant => {
      if(restaurant.name.toLocaleLowerCase().includes(right.toLocaleLowerCase())) {
        return restaurant;
      }
    });
    return filteredLeft;
  }

}
