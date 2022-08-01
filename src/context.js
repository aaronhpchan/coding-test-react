import React, { useState } from 'react';

const UserContext = React.createContext({
  isLoggedIn: false,
  userInfo: [],
  onSubmit: () => {}
});

export const UserContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const [username, password] = event.target;
    if(!isLoggedIn) {
      if(username.value !== null && password.value !== null) {
        setIsLoggedIn(true);
        setUserInfo([username.value, password.value])
      }
    } else {
      setIsLoggedIn(false);
    }
  };
  
  return <UserContext.Provider value={{ 
    isLoggedIn: isLoggedIn, 
    onSubmit: handleSubmit, 
    userInfo: userInfo 
  }}>
    {props.children}
  </UserContext.Provider>
};

export default UserContext;





