import { UserEntity } from './../users/entities/user.entity';
import {
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dtos/login-suth.dto';
import { LocalAuthGuard } from './guards';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Type } from 'class-transformer';
import { json } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() login: LoginAuthDto, @Request() req) {
    const data = await this.authService.login(req.user);
    return { message: 'Login success', data };
  }

  @Auth()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Auth()
  @Get('refreshToken')
  async refreshToken(@Request() req) {
    const data = await this.authService.login(req.user);
    return { message: 'Refresh Token success', data };
  }
}
