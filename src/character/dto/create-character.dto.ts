import { IsString, MinLength } from "class-validator";

export class CreateCharacterDto {
    @IsString()
    @MinLength(1)
    name:string;
    
    @IsString()
    @MinLength(1)
    image:string | 'No image'; 
    
    @IsString()
    @MinLength(1)
    planet?:string | 'unknown';
    
    @IsString()
    @MinLength(1)
    description:string;
}
