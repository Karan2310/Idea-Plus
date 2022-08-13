import { useState } from 'react';
import LandingPage from './LandingPage';
import { useAuth } from './firebase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  let currentUser = useAuth();

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <><LandingPage isLoggedIn={isLoggedIn} handleLogin={handleLogin} currentUser={currentUser} /></>
  );
}

export default App;
