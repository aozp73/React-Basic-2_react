import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

function App() {
  console.log('App 실행');

  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];

  const [users, setUsers] = useState(sample);

  const download = () => {
    setUsers([...sample, { id: 5, name: '조자룡' }]);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}. {u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;
