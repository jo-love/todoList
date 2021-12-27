import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

function ToDo({ text, status, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setToDos((prev) => {
      const targetIdx = prev.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, status: name as any };
      return [
        ...prev.slice(0, targetIdx),
        newTodo,
        ...prev.slice(targetIdx + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {status !== 'DOING' && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {status !== 'TO_DO' && (
        <button name="TO_DO" onClick={onClick}>
          To DO
        </button>
      )}
      {status !== 'DONE' && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
