import { resultArray } from './common/utils';
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Category } from './category/entities/category.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hiep Hello Nestjs and Backend!';
  }

  async getAllProd(page: number, limit: number) {
    const data = await getRepository(Category)
      .createQueryBuilder('categories')
      .leftJoinAndSelect('categories.products', 'product')
      .take(limit)
      .skip(limit * (page - 1))
      .getManyAndCount();
    return resultArray(data, limit, page);
  }
}
