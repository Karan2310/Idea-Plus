import { useState } from 'react';
import LandingPage from './LandingPage';
import { useAuth } from './firebase';
import { ModalsProvider } from '@mantine/modals';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  let currentUser = useAuth();

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
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
