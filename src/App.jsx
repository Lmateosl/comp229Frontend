import { useEffect, useState } from 'react'
import { authService, getNews } from './features/httpRequest';
import Navbar from './components/Navbar.jsx';
import ModalAuth from './components/Modal.jsx';
import CardsContainer from './container/CardsContainer.jsx';
import Categories from './components/Categories.jsx';
import './App.css'

function App() {
  const [isLoged, setIsLoged] = useState(false);
  const [email, setEmail] = useState('');
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      loadNews('general');
      if (email) {
        setIsLoged(true);
      } else {
        window.localStorage.removeItem('token');
        setIsLoged(false);
        handleOpen();
      }
    } else {
      handleOpen();
    }
  }, [email]);
  const [articles, setArticles] = useState(['']);
  const loadNews = async(category) => {
    try {
      const data = await getNews(category);
      console.log(data.message.articles);
      setArticles(data.message.articles);
    } catch {
      window.localStorage.removeItem('token');
      setIsLoged(false);
      handleOpen();
    }
  }

  const auth = async(userCredentials, isLogin) => {
    try {
      const data = await authService(userCredentials, isLogin);
      console.log(data);
      setEmail(data.user);
      window.localStorage.setItem('token', data.token);
      setIsLoged(true);
      setOpen(false);
    } catch (err) {
      console.log(err);
      setIsLoged(false);
      const errorMsg = isLogin ? 'Error in the loging. Try again or create an account' : 'Error creating an account';
      alert(errorMsg);
      setOpen(false);
    }
  }
  const logout = () => {
    window.localStorage.removeItem('token');
    setIsLoged(false);
    setEmail(null);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className='all'>
        <Navbar isLoged={isLoged} email={email} handleOpen={handleOpen} logout={logout}/>
        <Categories handleClickCategorie={loadNews}/>
        <CardsContainer articles={articles}/>
        <ModalAuth open={open} auth={auth} handleClose={handleClose}/>
      </div>
    </>
  )
}

export default App
