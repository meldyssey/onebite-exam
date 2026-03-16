import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodosData() {
  // 데이터 조회 요청만 관리하는 훅
  return useQuery({
    queryFn: fetchTodos,
    queryKey: QUERY_KEYS.todo.list,
  });
}
