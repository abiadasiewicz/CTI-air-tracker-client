import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'kphToMph'
})
export class KphToMphPipe implements PipeTransform {

  transform(value: number): unknown {
    return (value * 0.621371).toFixed(2);
  }
}
