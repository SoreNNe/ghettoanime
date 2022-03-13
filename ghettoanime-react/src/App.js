import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import data from './data';
import LoginForm from './components/LoginForm';

export default function App() {
  const cards = data.map(item => {
    return (
        <Main {...item}/>
        )
})       
  return (
    <div >
        <Navbar/>
        <LoginForm/>
        <section className='card--list'>
          {cards}
        </section>
    </div>
  );
}

