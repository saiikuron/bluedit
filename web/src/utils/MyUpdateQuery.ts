import { Cache, QueryInput } from "@urql/exchange-graphcache";

export function MyUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query // update function
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}
