import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
}
