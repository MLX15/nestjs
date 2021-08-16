import { CreatePhotoDto } from './../photo/dto/create-photo.dto';
import { ProductDto } from './dtos/product.dto';
import { PaginatedDto } from './../common/dtos/paginated.dto';
import { ProductService } from './product.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDto, EditProductDto, PatchProductDto } from './dtos';
import { ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators';
import { AppResources } from 'src/app.roles';

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<PaginatedDto<ProductDto>> {
    const data = await this.productService.findAll(page, limit);
    return data;
  }
  @Get('/by-category/:id')
  @ApiConsumes('id')
  async findByCat(
    @Param('id') id: number,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    const data = await this.productService.findByCatId(id, page, limit);
    return {
      message: 'Successfully',
      data,
      category: id,
    };
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.productService.findOne(id);
    return {
      message: 'Successfully',
      data,
    };
  }

  @Auth({
    action: 'create',
    possession: 'any',
    resource: AppResources.PRODUCT,
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @Post()
  async create(@Body() productDto: CreateProductDto): Promise<CreatePhotoDto> {
    return await this.productService.create(productDto);
  }

  @Auth({
    action: 'update',
    possession: 'any',
    resource: AppResources.PRODUCT,
  })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully updated.',
  })
  @Put(':id')
  edit(@Param('id') id: string, @Body() dto: EditProductDto) {
    return this.productService.edit(+id, dto);
  }

  @Auth({
    action: 'update',
    possession: 'any',
    resource: AppResources.PRODUCT,
  })
  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: PatchProductDto) {
    return this.productService.update(id, dto);
  }

  @Auth({
    action: 'delete',
    possession: 'any',
    resource: AppResources.PRODUCT,
  })
  @Delete(':id')
  deleteProduct(@Param() params) {
    return this.productService.deleteOne(params.id);
  }
}
