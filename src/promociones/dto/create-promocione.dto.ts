
import {
  IsString,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreatePromocioneDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsOptional()
  @IsString()
  imagen?: string;
}

