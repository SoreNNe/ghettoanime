import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import data from './data';
import LoginForm from './components/LoginForm';
import AnimeList from './components/AnimeList';
import WatchingPage from './components/WatchingPage';
import LogLoginForm from './components/LogLogInForm';

export default function App() {
  const ongoingCards = data.new.map(ongoing => {
    return (
        <Main {...ongoing}/>
        )
})      
const animeCards = data.animeList.map(animecards => {
  return (
      <AnimeList {...animecards}/>
      )
})       
    
  return (
    <BrowserRouter>
       <div >
         
         <Navbar/>
         <Routes>
         <Route path="/WatchingPage" element={<WatchingPage/>}/>
         </Routes>
         <section className='card--list'>
           <Routes>
             <Route path="/" element={ongoingCards}/>
             <Route path="/AnimeList" element={animeCards}/>
             <Route path="/SignUp" element={<LoginForm/>}/>
             <Route path="/SignIn" element={<LogLoginForm/>}/>
             
             
           </Routes>
         </section>
       </div>
    </BrowserRouter>
  );
}
