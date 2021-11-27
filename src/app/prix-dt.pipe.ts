import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prixDT'
})
export class PrixDTPipe implements PipeTransform {

  transform(nom:string): string{
    return nom+" DT";
  }
  }

