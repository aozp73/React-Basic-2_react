import logo from './logo.svg';
import './App.css';

let a = 10;
const mystyle = {
  color: 'red',
};

function App() {
  return <div className="box-style">안녕 {a === 10 && '10입니다.'}</div>;
}

export default App;
