import { resultArray } from './../common/utils';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto, EditUserDto } from './dto';
import { PaginatedDto } from 'src/common/dtos/paginated.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {}

  async findOne(email: string): Promise<UserEntity> {
    return await this.usersRepo
      .createQueryBuilder('users')
      .where({ email })
      .addSelect('users.password')
      .getOne();
  }
  async getOne(id: number, userEntity?: UserEntity): Promise<UserEntity> {
    const user = await this.usersRepo
      .findOne(id)
      .then((u) =>
        !userEntity ? u : !!u && userEntity.id === u.id ? u : null,
      );
    if (!user) throw new NotFoundException('User not contain');
    return user;
  }

  async getMany(
    page: number,
    limit: number,
  ): Promise<PaginatedDto<UserEntity>> {
    const data = await this.usersRepo.findAndCount({
      take: +limit,
      skip: limit * (page - 1),
    });
    return resultArray(data, limit, page);
  }

  async createOne(dto: CreateUserDto) {
    const userExist = await this.usersRepo.findOne({
      where: { email: dto.email },
    });
    if (userExist)
      throw new BadRequestException(
        `Email ${dto.email} already used on other account`,
      );
    const newUser = await this.usersRepo.create(dto);
    const user = await this.usersRepo.save(newUser);
    delete user.password;
    return user;
  }

  async editOne(id: number, dto: EditUserDto, userEntity?: UserEntity) {
    const user = await this.getOne(id, userEntity);
    if (!user) throw new NotFoundException('Can not find user');
    return await this.usersRepo.update(id, dto);
  }

  async deleteOne(id: number, userEntity?: UserEntity) {
    const user = await this.getOne(id, userEntity);
    return await this.usersRepo.delete(user);
  }
}
