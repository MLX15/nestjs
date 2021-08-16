import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiParam, ApiQuery, ApiTags, ApiProperty } from '@nestjs/swagger';
import { ProductService } from './product/product.service';
import { Paginate } from './common/decorators';

@ApiTags('APP Module')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prodService: ProductService,
  ) {}

  @Get('all-product')
  @Paginate()
  async getAllProd(@Query('page') page: number, @Query('limit') limit: number) {
    const data = await this.appService.getAllProd(page, limit);
    return {
      message: 'Successfully',
      data,
    };
  }
}
