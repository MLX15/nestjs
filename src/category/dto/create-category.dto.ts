import { IsArray, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  title: string;
}
