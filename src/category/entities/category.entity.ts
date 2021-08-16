import { ProductEntity } from 'src/product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RelationCategory } from './relation-category.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'varchar', length: 50 }) title!: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => ProductEntity, (p) => p.catId)
  @JoinColumn({ name: 'id' })
  products: ProductEntity[];

  @OneToMany(() => RelationCategory, (c) => c.catId)
  @JoinColumn({ name: 'id' })
  subCategories: number[];
}
