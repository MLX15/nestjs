import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppResources } from 'src/app.roles';
import { Auth } from 'src/common/decorators';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Auth({
    action: 'create',
    possession: 'any',
    resource: AppResources.CATEGORY,
  })
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll(@Query('page') page: number, @Query('limit') limit: number) {
    const data = await this.categoryService.findAll(page, limit);
    return {
      message: 'Successfully',
      data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.categoryService.findOne(+id);
    return {
      message: 'Successfully',
      data,
    };
  }

  @Auth({
    action: 'update',
    possession: 'any',
    resource: AppResources.CATEGORY,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Auth({
    action: 'update',
    possession: 'any',
    resource: AppResources.CATEGORY,
  })
  @Put(':id')
  async edit(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.update(+id, updateCategoryDto);
  }

  @Auth({
    action: 'delete',
    possession: 'any',
    resource: AppResources.CATEGORY,
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.categoryService.remove(+id);
  }
}
