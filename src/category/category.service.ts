import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { RelationCategory } from './entities/relation-category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private readonly catRepo: Repository<Category>,
    @InjectRepository(RelationCategory)
    private readonly catRelRepo: Repository<RelationCategory>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const cat = await this.catRepo.create(createCategoryDto);
    return await this.catRepo.save(cat);
  }

  async findAll(page: number, take: number) {
    const data = await this.catRepo.findAndCount({
      take,
      skip: take * (page - 1),
    });
    const edges = data[0];
    const totalCount = data[1];
    const totalPage = Math.ceil(totalCount / take);
    // if (page > totalPage) return new NotFoundException('Error param page');
    return { edges, totalCount, totalPage, page };
  }

  async findOne(id: number) {
    const cat = await this.catRepo.findOne(id);
    if (!cat) throw new NotFoundException(`Category ${id} does not exist`);
    return cat;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const cat = await this.catRepo.findOne(id);
    if (!cat) throw new NotFoundException(`Category ${id} does not exist`);
    const newCat = Object.assign(cat, updateCategoryDto);
    return await this.catRepo.save(newCat);
  }

  async remove(id: number) {
    return this.catRepo.delete(id);
  }
}
