import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-starwars'),
    CharacterModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
