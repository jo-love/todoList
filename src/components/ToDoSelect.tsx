import { useRecoilState } from 'recoil';
import { Categories, categoryState } from '../atoms';

const ToDoSelect = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    // options의 value를 categories 타입이 아니라 단지 string으로 보기때문에
    setCategory(value as Categories);
  };
  return (
    <select value={category} onInput={onInput}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
    </select>
  );
};

export default ToDoSelect;
