import { useDecreaseCount, useIncreaseCount } from "@/store/count";
import { Button } from "../ui/button";

// 컴포넌트에서 불러온 store 값들 중, 하나라도 업데이트가 되면, 해당 컴포넌트 자동으로 리렌더링 시킴
// 현재 controller 컴포넌트에서 store 객체의 전부를 불러옴
export default function Controller() {
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();
  // const increase = useCountStore((store) => store.increase);
  // const decrease = useCountStore((store) => store.decrease);

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
