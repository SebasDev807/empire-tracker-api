import { Injectable, PipeTransform } from '@nestjs/common';


@Injectable()
export class ToApiParam implements PipeTransform {
  transform(value: string) {

    return this.toParam(value);

  }

  private capitalizeWords(str: string): string {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  private toParam(str:string):string{
    const capitalizated = this.capitalizeWords(str);
    return capitalizated.replace(/ /g, '%20')
  }
}
