import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn() id: number;
  @ApiProperty({ name: 'name', default: 'Thit ga cac loai' })
  @Column({ type: 'varchar', length: 50, nullable: false })
  name!: string;
  @Column({ type: 'varchar', length: 150, nullable: true })
  description?: string;
  @Column() quantity: number;
  @Column() price: number;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
  @OneToOne((type) => Category, (cat) => cat.id)
  @JoinColumn({ name: 'cat_id' })
  catId!: number;
}
