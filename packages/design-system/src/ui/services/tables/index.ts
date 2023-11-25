import { useQuery, UseQueryOptions } from "react-query";
import { useEffectOnce } from "usehooks-ts";
import { useDynamicTable } from "../../components";
import { createUseTableKey } from "./keys";

export const useTable = <T = any>(
  id: string,
  ApiService: any,
  url: string,
  params: Record<string, any>,
  options?: UseQueryOptions<T>,
) => {
  const { isLoading: isRefreshing, filters, setKeys } = useDynamicTable();

  const parameters = { ...params, _filters: filters[id] };

  useEffectOnce(() => {
    setKeys(id, parameters);
  });
  return {
    ...useQuery<T>(
      createUseTableKey([parameters]),
      async () => await fetchData(ApiService, url, parameters),
      options,
    ),
    isRefreshing,
  };
};

async function fetchData(
  ApiService: any,
  url: string,
  params: Record<string, any>,
) {
  if (ApiService) {
    const data = await ApiService.load(url, params as any);
    if (data) {
      const { result, summary, ...rest } = data;
      return {
        results: result,
        total: summary?.total,
        ...rest,
      };
    }
    return { results: [], total: 0 };
  }
  return { results: [], total: 0 };
}
