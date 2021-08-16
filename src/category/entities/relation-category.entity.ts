import { ProductEntity } from 'src/product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity('relation_categories')
export class RelationCategory {
  @PrimaryGeneratedColumn() id: number;

  @ManyToOne(() => Category, (c) => c.id)
  @JoinColumn({ name: 'cat_id' })
  catId: number;

  @ManyToOne(() => Category, (c) => c.id)
  @JoinColumn({ name: 'sub_cat_id' })
  subCategory: Category;
}
