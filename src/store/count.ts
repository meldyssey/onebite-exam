import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// type Store = {
//   count: number;
//   actions: {
//     increaseOne: () => void;
//     decreaseOne: () => void;
//   };
// };

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increaseOne: () => {
                // set((state) => ({
                //   count: state.count + 1,
                // }));

                set((state) => {
                  state.count += 1;
                });
              },
              decreaseOne: () => {
                set((state) => {
                  state.count -= 1;
                });
                // set((state) => ({
                //   count: state.count - 1,
                // }));
              },
            },
          })),
        ),
      ),
      {
        name: "countStore",
        partialize: (store) => ({
          count: store.count,
        }),
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      name: "countStore",
    },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    // Listner: 특정한 값이 변경될 때마다 호풀되는 콜백함수
    console.log(count, prevCount);

    // 현재 스토어 값을 가져올 수 있음
    const store = useCountStore.getState();
    // useCountStore.setState((store) => ({}))
  },
);

// 생성한 store를 useCountStore라는 훅을 통해서 다른 컴포넌트에서 부를 수 있음
// export const useCountStore = create<Store>((set, get) => ({
//   // return 하는 객체가 저장된 상태로 store 생성
//   count: 0,
//   actions: {
//     increaseOne: () => {
//       // const count = get().count;
//       // // 명시된 프로퍼티의 값만 변경하고 이외 프로퍼티는 변경하지 않음
//       // set({
//       //   count: count + 1,
//       // });

//       // set은 함수형 업데이트도 지원
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decreaseOne: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

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
