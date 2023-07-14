
import './App.css';
import HomePage from './Pages/HomePage';
import { Route, Routes, Link } from 'react-router-dom';
import Reservations from './Pages/Reservations';
import ConfirmedBooking from './Pages/ConfirmedBooking';

function App() {
  return (
<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/Reservations' element={<Reservations/>}/>
  <Route path='/confirmation' element={<ConfirmedBooking/>}></Route>
</Routes>

  );
}

export default App;
