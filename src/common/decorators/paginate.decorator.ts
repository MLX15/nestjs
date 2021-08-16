import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export function Paginate() {
  return applyDecorators(
    ApiQuery({
      name: 'page',
      type: 'number',
      description: 'Page of result set',
    }),
    ApiQuery({
      name: 'limit',
      type: 'number',
      description: 'Limit result each page of result set',
    }),
  );
}
