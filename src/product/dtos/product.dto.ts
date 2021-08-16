import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({ name: 'name', default: 'Thit ga ca chep' })
  name!: string;
  description?: string;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  catId!: number;
}
