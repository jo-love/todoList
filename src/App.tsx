import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';
import ToDoList from './components/ToDoList';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
${reset}
body {
  font-family:'Raleway', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}

a {
  color: inherit;
  text-decoration:none;
}
`;

function App() {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ToDoList />
    </>
  );
}

export default App;
