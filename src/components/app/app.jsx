import React from 'react';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = () => {
  return (
    <WelcomeScreen
      time={7}
      errorsCount={4}
    />
  );
};

export default App;
