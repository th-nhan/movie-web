import { useState,useEffect } from 'react'
import Header from './component/Header'
import Banner from './component/Banner'
import Chude from './component/Chude'
import Login from './component/LoginModal'
import MoviesList from './component/MoviesList'
import RegisterModal from './component/RegisterModal'


function App() {
  const [movie,setMovie] = useState([])
  const [movieRated,setMovieRated] = useState([])
  const [loginOpen,setLoginOpen] = useState(false)
  const [registerOpen,setRegisterOpen] = useState(false)

  useEffect(()=>{
    const fetchMovie = async()=>{
      const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    };
    const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1';
    const url2 = 'https://api.themoviedb.org/3/movie/now_playing?language=vi-US&page=1';
    
    const [res1,res2] = await Promise.all([
      fetch(url1,options),
      fetch(url2,options),
    ])

    const data1 = await res1.json();
    const data2 = await res2.json();
    setMovie(data1.results)
    setMovieRated(data2.results)
  }
    fetchMovie();
  },[])

  const handleLoginOpen = ()=>{
    setLoginOpen(true)
  }
   const handleLoginClose = () => {
    setLoginOpen(false);
  }

    const handleRegisterOpen = ()=>{
    setRegisterOpen(true)
    setLoginOpen(false) 
  }
   const handleRegisterClose = () => {
    setRegisterOpen(false);
  }

  
  return (
    <>
      <div className='bg-black/90 pb-10'>
        <Header onLoginClick={handleLoginOpen} onRegisterClick={handleRegisterOpen} />
        <Banner/>
        <Chude/>
        <MoviesList title="Phim nổi bật" data={movie}/>
        <MoviesList title="Phim mới" data={movieRated}/>
        {loginOpen && (
          <Login onClose={handleLoginClose}  />
        )}
        {registerOpen && (
          <RegisterModal onClose={handleRegisterClose}  />
        )}

      </div>
    </>
  )
}

export default App
