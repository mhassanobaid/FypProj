import React, { useState } from 'react';
import Header from '../../Components/Common/Header';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic, e.g., make an API call
    console.log('Email:', email);
    console.log('Password:', password);

    // You can add further logic for login submission here
  };

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showVideo,setShowVideo]=useState(false);

  return (
    <div>
      <Header
      showSearchBar={showSearchBar}
      />
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LogIn;
