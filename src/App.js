import { useState } from 'react';
import LandingPage from './LandingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <><LandingPage isLoggedIn={isLoggedIn} /></>
  );
}

export default App;
