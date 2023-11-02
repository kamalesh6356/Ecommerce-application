import Home  from './Home';
import './App.css';
import Header from './Header';
import {  Routes , Route} from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase'
import { useStateValue } from './Stateprovider';
import Login from './Login';
import Checkout from './Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const promise =loadStripe('pk_test_51O7Fj0SEHuunIzfK8skjK8iTcauloUuDv1PNLmenPJC9hjxsMteFgHKrRgaKVt7Bw4WJDnv0nyeYIWsfCYdbKu6G004iEwXpMv')
function App() {
   const [{},dispatch]=useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    
    <div className="App">
      <Header />
      <Routes>
      <Route   path="/" element={<Home />} />
      <Route path="/login" element ={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    </div>
  
  );
}

export default App;
