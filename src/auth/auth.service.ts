import { UsersService } from '../users/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  //TODO: hash password
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user && compare(user.password, password)) {
      delete user.password;
      return user;
    }
    return null;
  }
  async login(user: UserEntity) {
    const { id, ...rest } = user;
    const payload = { sub: id };
    return {
      user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
