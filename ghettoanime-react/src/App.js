import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import data from './data';

export default function App() {
  const cards = data.map(item => {
    return (
        <Main {...item}/>
        )
})       
  return (
    <div >
        <Navbar/>
        <section className='card--list'>
          {cards}
        </section>
    </div>
  );
}

