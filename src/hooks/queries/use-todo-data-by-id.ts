import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: number) {
  return useQuery({
    // id 전달을 위해 화살표 함수로 id값 전달
    queryFn: () => fetchTodoById(id),
    queryKey: ["todos", id],

    // 5초 ~ 30초가 일반적
    staleTime: 5000,
    gcTime: 5000,

    // refetch를 세부적으로 적용할 수 있음
    // refetchInterval: 1000,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
  });
}
