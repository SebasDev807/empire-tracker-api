import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseResponsePipe implements PipeTransform {
  
  transform(value: any ):string {
    return decodeURIComponent(value);
  }
  
}


