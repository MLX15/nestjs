import { PartialType, OmitType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class EditProductDto extends PartialType(CreateProductDto) {}

export class PatchProductDto extends OmitType(CreateProductDto, [
  'name',
  'description',
  'catId',
] as const) {}
