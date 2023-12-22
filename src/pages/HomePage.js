import Home from '../components/home/Home';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    // 다운로드 (fetch / axios)
    let datas = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];
    setBoards([...datas]);
    setUser({ id: 1, username: 'ssar' });
  }, []);

  return (
    <div>
      <Home boards={boards} setBoards={setBoards} user={user} />
    </div>
  );
};

export default HomePage;
