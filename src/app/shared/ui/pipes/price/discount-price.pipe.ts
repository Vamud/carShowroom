import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPrice'
})
export class DiscountPricePipe implements PipeTransform {

  transform(value: number, discount: number): string {
    if (isNaN(value)) {
      return '';
    }
    const dis = value - (value * 0.01 * discount);
    return dis.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

}