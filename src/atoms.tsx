import { atom, selector } from 'recoil';

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface IToDo {
  text: string;
  status: Categories;
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: JSON.parse(localStorage.getItem('TODO') || 'null'),
});

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos?.filter((toDo) => toDo.status === category);
  },
});

export const minuteState = atom({
  key: 'minutes',
  default: 0,
});

export const hourSelector = selector<number>({
  key: 'hours',
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
