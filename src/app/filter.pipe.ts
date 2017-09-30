import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], type?: string): any {
    switch (type) {
      case 'Active':
        return value.filter(x => !x.done);

      case 'Completed':
        return value.filter(x => x.done);

      default:
        return value;
    }
  }

}
