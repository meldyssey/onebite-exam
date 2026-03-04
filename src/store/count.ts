import { create } from "zustand";

type Store = {
  count: number;
  actions: {
    increaseOne: () => void;
    decreaseOne: () => void;
  };
};

// 생성한 store를 useCountStore라는 훅을 통해서 다른 컴포넌트에서 부를 수 있음
export const useCountStore = create<Store>((set, get) => ({
  // return 하는 객체가 저장된 상태로 store 생성
  count: 0,
  actions: {
    increaseOne: () => {
      // const count = get().count;
      // // 명시된 프로퍼티의 값만 변경하고 이외 프로퍼티는 변경하지 않음
      // set({
      //   count: count + 1,
      // });

      // set은 함수형 업데이트도 지원
      set((store) => ({
        count: store.count + 1,
      }));
    },
    decreaseOne: () => {
      set((store) => ({
        count: store.count - 1,
      }));
    },
  },
}));

// 보통 커스텀훅으로 감싸서 사용하여 한 파일에서 수정가능하도록 유지보수에 용이하게 함
export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increaseOne);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decreaseOne);
  return decrease;
};
