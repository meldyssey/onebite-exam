import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

// id는 필수, 그 외는 없어도 가능
export async function updateTodo(todo: Partial<Todo> & { id: string }) {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("Update Todo Failed");
  const data: Todo = await response.json();
  return data;
}
