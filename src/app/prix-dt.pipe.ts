import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prixDT'
})
export class PrixDTPipe implements PipeTransform {

  transform(prix:number): string{
    return prix+" DT";
  }
  }

