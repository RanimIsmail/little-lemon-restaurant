import Header from '../Header';
import Hero from '../Hero.js'
import Main from '../Main';
import Footer from '../Footer';
import { Route, Routes, Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
   <Header/>
   <Hero />
   <Main/>
   <Footer/>
    </>
  );
}