export const API_URL = "http://localhost:3000";

// 객체로 모든 key 값을 관리하면 코드도 깔끔해지고 불필요한 캐시데이터를 무효화하지 않을 수 있음
export const QUERY_KEYS = {
  todo: {
    all: ["todo"],
    list: ["todo", "list"],
    detail: (id: string) => ["todo", "detail", id],
  },
};
