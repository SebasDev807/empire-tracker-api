import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios, { AxiosInstance } from 'axios';
import { Model } from 'mongoose';
import { Character } from 'src/character/entities/character.entity';


@Injectable()
export class SeedService {

  public axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Character.name)
    private readonly characterModel: Model<Character>
  ) { }

  async executeSeed() {
    await this.characterModel.deleteMany({});
    const res = await this.axios.get('https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=964');
    const { data } = res.data;

    const characters = data.map(({ name, image, description },index) => ({
      name: this.normalizeText(name).toLowerCase(),
      image,
      description,
      index: index + 1
    }));

    await this.characterModel.insertMany(characters);
    return 'Seed executed';

  }

  private normalizeText(text: string): string {
    return text.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

}
