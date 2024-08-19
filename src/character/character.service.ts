import { Injectable, NotFoundException } from '@nestjs/common';
import { isValidObjectId, Model } from 'mongoose';
import { Character } from './entities/character.entity';
import { InjectModel } from '@nestjs/mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class CharacterService {


  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<Character>
  ) { }


  findAll(paginationDto: PaginationDto) {

    const { limit = 20, offset = 0 } = paginationDto;

    return this.characterModel.find()
      .limit(limit)
      .skip(offset)
      .sort({ index: 1 })
      .select('-__v');

  }

  async findAny(term: string): Promise<Character[] | Character> {
    
    let characters: Character[];
    
    try {
      
      const regex = { $regex: term, $options: 'i' }

      if (!characters && isValidObjectId(term)) {
        characters = await this.characterModel.findById(term);
      }

      if (!characters) {
        characters = await this.characterModel.find({
          name: regex//Buscar por coincidencia parcial
        });
      }

      if (!characters.length) {
        throw new NotFoundException(`Character with term '${term}' not found.`);
      }

      if (characters.length === 1) {
        return characters[0];
      }

      return characters;

    } catch (error) {
      console.error(`Error => ${error}`);
      throw error;
    }
  }

  

}
