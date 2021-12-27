import React from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { toDoSelector, toDoState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import ToDoSelect from './ToDoSelect';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 70vh;
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 90%;
  border: 2px solid ${(props) => props.theme.textColor};
  margin-top: 10px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const toDosValue = useRecoilValue(toDoState);

  //서버통신get 하는 것처럼 만들기
  useEffect(() => {
    localStorage.setItem('TODO', JSON.stringify(toDosValue));
  });
  return (
    <>
      <h1>to Dos</h1>
      <hr />
      <Container>
        <ToDoListContainer>
          <ToDoSelect />
          <CreateToDo />
          <TodoList>
            {toDos?.map((toDo) => (
              <ToDo key={toDo.id} {...toDo} />
            ))}
          </TodoList>
        </ToDoListContainer>
      </Container>
    </>
  );
}

export default ToDoList;
