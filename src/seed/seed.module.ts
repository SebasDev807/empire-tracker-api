import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CharacterModule } from 'src/character/character.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[
    CharacterModule,
    
  ]
})
export class SeedModule {}
