import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((prev) => {
      return [...prev, { text: toDo, id: Date.now(), status: category }];
    });
    setValue('toDo', '');
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('toDo', {
          required: 'Please write a To Do',
        })}
        placeholder="Write a to do"
        autoComplete="off"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
