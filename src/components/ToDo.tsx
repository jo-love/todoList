import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Categories, IToDo, toDoState } from '../atoms';

const List = styled.li`
  margin: 0 auto;
  padding: 10px 0;
`;
const XBtn = styled.button`
  background: transparent;
  text-align: center;
  color: white;
  height: 20px;
  margin-left: 10px;
`;
function ToDo({ text, status, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setToDos((prev) => {
      const targetIdx = prev.findIndex((todo) => todo.id === id);
      // as 타입단언 - 버튼의 name을 보수적으로 추론해서 IToDo의 status속성 타입이라고 단언
      const newTodo = { text, id, status: name as IToDo['status'] };
      return [
        ...prev.slice(0, targetIdx),
        newTodo,
        ...prev.slice(targetIdx + 1),
      ];
    });
  };
  const onDelete = (id: number) => {
    setToDos((todo) => todo.filter((item) => item.id !== id));
  };
  return (
    <List>
      <span>{text}</span>
      {status !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {status !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To DO
        </button>
      )}
      {status !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <XBtn onClick={() => onDelete(id)}>x</XBtn>
    </List>
  );
}

export default ToDo;
