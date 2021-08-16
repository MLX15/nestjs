import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, RelationCategory } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Category, RelationCategory])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
