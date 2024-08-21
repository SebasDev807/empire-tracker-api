import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharacterService } from './character.service';

import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}


  @Get()
  findAll(@Query() paginationDto:PaginationDto) {
    return this.characterService.findAll(paginationDto);
  }

  @Get(':term')
  findAny(@Param('term') term: string) {
    return this.characterService.findAny(term);
  }

}
