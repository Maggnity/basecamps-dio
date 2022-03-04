import './App.css';
import Button from './components/Button';

const element = 'Digital Innovation'
const element2 = <h1>Olá turma</h1>

function App() {
  return (
    <div className="App">
     <h1>Hello World!</h1>
     {element}
     {element2}
     <Button onClick={() => soma(10, 20)} name="Fernando" />
    </div>
  );
}

function soma (a, b){
  alert (a + b)
}

export default App;