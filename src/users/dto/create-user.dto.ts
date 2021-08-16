import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  MaxLength,
  IsEmail,
  MinLength,
  IsArray,
  IsEnum,
} from 'class-validator';
import { AppRoles } from 'src/app.roles';

export class CreateUserDto {
  @ApiProperty({ default: 'Hiep' })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({ default: 'Hiep@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: 'password' })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;

  @ApiProperty({ type: 'array', default: [AppRoles.USER] })
  @IsArray()
  @IsEnum(AppRoles, {
    each: true,
    message: `User role must be valid: ${AppRoles.ADMIN}, ${AppRoles.USER}, ${AppRoles.SHOP} `,
  })
  roles: string[];
}
