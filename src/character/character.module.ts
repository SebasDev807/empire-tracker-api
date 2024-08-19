import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Character, CharacterSchema } from './entities/character.entity';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Character.name,
        schema: CharacterSchema
      }
    ])
  ],
  exports:[MongooseModule]
})
export class CharacterModule { }
