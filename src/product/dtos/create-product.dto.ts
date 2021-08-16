import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  catId: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
