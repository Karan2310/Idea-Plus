import { useState } from 'react';
import LandingPage from './LandingPage';
import { useAuth } from './firebase';
import { ModalsProvider } from '@mantine/modals';
import { useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  let currentUser = useAuth();

  useEffect(() => {
    const loggedIn = localStorage.getItem('ISLOGGEDIN')
    const user = localStorage.getItem('USER')

    if (loggedIn === 'true') {
      setIsLoggedIn(true)
      // currentUser.email = user
    }

  }, [])


  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
    localStorage.setItem('ISLOGGEDIN', true);
    localStorage.setItem('USER', currentUser.email);
  }

  return (
    <>
      <ModalsProvider>
        <LandingPage isLoggedIn={isLoggedIn} handleLogin={handleLogin} currentUser={currentUser} />
      </ModalsProvider>
    </>
  );
}

export default App;
