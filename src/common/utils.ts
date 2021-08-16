import { PaginatedDto } from './dtos/paginated.dto';
export const resultArray = (
  data: [edges: any, totalCount: number],
  limit: number,
  page: number,
): PaginatedDto<any> => {
  const edges = data[0];
  const totalCount = data[1];
  const totalPage = Math.ceil(totalCount / limit);
  return { edges, totalCount, totalPage, page };
};
