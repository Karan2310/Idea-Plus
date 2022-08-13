import { useState } from 'react';
import LandingPage from './LandingPage';
import { useAuth } from './firebase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  let currentUser = useAuth();

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <><LandingPage isLoggedIn={isLoggedIn} handleLogin={handleLogin} currentUser={currentUser} /></>
  );
}

export default App;
