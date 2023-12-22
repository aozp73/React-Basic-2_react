import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    // 다운로드 (fetch / axios)
    let datas = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];
    setBoards([...datas]);
  }, []);

  return (
    <div>
      <Header />
      <Home boards={boards} setBoards={setBoards} />
      <Footer />
    </div>
  );
};

export default HomePage;
