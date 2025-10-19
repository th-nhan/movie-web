import { useState, useEffect } from 'react'
import Header from './component/Header'
import Banner from './component/Banner'
import Chude from './component/Chude'
import Login from './component/LoginModal'
import MoviesList from './component/MoviesList'
import RegisterModal from './component/RegisterModal'

function App() {
  const [movie, setMovie] = useState([])
  const [movieRated, setMovieRated] = useState([])
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/movies/");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        // Xử lý đường dẫn ảnh
        const updated = data.map(item => ({
          ...item,
          bg: item.bg?.startsWith('http')
            ? item.bg
            : `http://127.0.0.1:8000${item.bg}`,
          thumb: item.thumb?.startsWith('http')
            ? item.thumb
            : `http://127.0.0.1:8000${item.thumb}`,
        }));

        const half = Math.ceil(updated.length / 2);
        setMovie(updated.slice(0, half));
        setMovieRated(updated.slice(half));
      } catch (error) {
        console.error("Lỗi khi fetch từ Django:", error);
      }
    };

    fetchMovie();
  }, []);

  const handleLoginOpen = () => setLoginOpen(true)
  const handleLoginClose = () => setLoginOpen(false)
  const handleRegisterOpen = () => {
    setRegisterOpen(true)
    setLoginOpen(false)
  }
  const handleRegisterClose = () => setRegisterOpen(false)

  return (
    <div className='bg-black/90 pb-10'>
      <Header onLoginClick={handleLoginOpen} onRegisterClick={handleRegisterOpen} />
      <Banner />
      <Chude />
      <MoviesList title="Phim nổi bật" data={movie} />
      <MoviesList title="Phim mới" data={movieRated} />
      {loginOpen && <Login onClose={handleLoginClose} />}
      {registerOpen && <RegisterModal onClose={handleRegisterClose} />}
    </div>
  )
}

export default App
