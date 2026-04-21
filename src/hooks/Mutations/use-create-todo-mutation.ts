import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {
  // 모든데이터를 보관하는 저장소
  const QueryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSettled: () => {},
    // createTodo의 반환값이 onSuccess의 매개변수로 받아올 수 있음
    onSuccess: (newTodo) => {
      // 해당 쿼리키의 캐시데이터가 일괄 무효됨 => 데이터 리페칭
      // QueryClient.invalidateQueries({
      //   queryKey: QUERY_KEYS.todo.list,
      // });
      QueryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo];
        return [...prevTodos, newTodo];
      });
    },
    onError: (error) => {
      window.alert(error.message);
    },
  });
}
