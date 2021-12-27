import { atom, selector } from 'recoil';

export interface IToDo {
  text: string;
  status: categories;
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const categoryState = atom<categories>({
  key: 'category',
  default: 'TO_DO',
});

type categories = 'TO_DO' | 'DOING' | 'DONE';

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.status === category);
  },
});
