import { ApiProperty } from '@nestjs/swagger';

export class PaginatedDto<Tdata> {
  @ApiProperty()
  totalPage: number;
  @ApiProperty()
  totalCount: number;
  @ApiProperty({ type: 'number', default: 1 })
  page: number;

  edges: Tdata[];
}
