import { Module } from '@nestjs/common';
import { ParseResponsePipe } from './pipes/parse-response/parse-response.pipe';

@Module({
    providers:[ParseResponsePipe],
    exports:[ParseResponsePipe]
})
export class CommonModule {}
