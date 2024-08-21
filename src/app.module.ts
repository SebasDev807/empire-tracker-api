import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-starwars'),
    CharacterModule, SeedModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
