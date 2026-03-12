import { fetchTodos } from "@/api/fetch-todos";
import { useQuery } from "@tanstack/react-query";

export function useTodosData() {
  // 데이터 조회 요청만 관리하는 훅
  return useQuery({
    queryFn: fetchTodos,
    queryKey: ["todos"],
  });
}
