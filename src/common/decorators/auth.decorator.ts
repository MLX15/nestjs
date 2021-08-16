import { UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ACGuard, Role, UseRoles } from 'nest-access-control';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    UseGuards(JwtAuthGuard, ACGuard),
    UseRoles(...roles),
    ApiBearerAuth(),
  );
}
