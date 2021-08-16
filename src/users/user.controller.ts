import { PaginatedDto } from './../common/dtos/paginated.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiParam, ApiTags, ApiProperty } from '@nestjs/swagger';
import { InjectRolesBuilder, RolesBuilder } from 'nest-access-control';
import { AppResources, AppRoles } from 'src/app.roles';
import { User, Auth, Paginate } from 'src/common/decorators';
import { CreateUserDto, EditUserDto, UserRegistrationDto } from './dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    @InjectRolesBuilder() private readonly roleBuilder: RolesBuilder,
  ) {}
  @Paginate()
  @Get()
  async getMany(
    @Query() page: number,
    @Query() limit: number,
  ): Promise<PaginatedDto<UserEntity>> {
    const data = await this.userService.getMany(page, limit);
    return data;
  }

  @ApiParam({ name: 'id', type: 'number' })
  @Get(':id')
  async getOne(@Param() id: number) {
    const data = await this.userService.getOne(id);
    return { data };
  }

  @Post('register')
  async publicRegistration(@Body() dto: UserRegistrationDto) {
    const data = await this.userService.createOne({
      ...dto,
      roles: [AppRoles.USER],
    });
    return { message: 'User registered', data };
  }

  @Auth({
    action: 'create',
    possession: 'any',
    resource: AppResources.USER,
  })
  @Post()
  async creatOne(@Body() dto: CreateUserDto) {
    const data = await this.userService.createOne(dto);
    return { message: 'Created User', data };
  }

  @Auth({
    action: 'update',
    possession: 'own',
    resource: AppResources.USER,
  })
  @Put(':id')
  async editOne(
    @Param() id: number,
    @Body() dto: EditUserDto,
    @User() user: UserEntity,
  ) {
    let data;
    if (this.roleBuilder.can(user.roles).updateAny(AppResources.USER).granted) {
      //Role ADMIN
      data = await this.userService.editOne(id, dto);
    } else {
      //Role User
      const { roles, ...rest } = dto;
      data = await this.userService.editOne(id, rest, user);
    }
    return { message: 'User edited', data };
  }

  @Auth({
    action: 'delete',
    possession: 'own',
    resource: AppResources.USER,
  })
  @Delete(':id')
  async deleteOne(@Param() id: string, @User() user: UserEntity) {
    let data;

    if (this.roleBuilder.can(user.roles).updateAny(AppResources.USER).granted) {
      // esto es un admin
      data = await this.userService.deleteOne(+id);
    } else {
      // esto es un author
      data = await this.userService.deleteOne(+id, user);
    }
    return { message: 'User deleted', data };
  }
}
