import logo from './logo.svg';
import './App.css';

function App() {
  let li = [1, 2, 3];
  return (
    <div>
      <div>
        {li.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
