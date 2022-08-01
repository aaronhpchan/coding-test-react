import { useContext } from "react";
import UserContext from "../context";

const UserBar = () => {
  const context = useContext(UserContext);
  
  return (
    <nav className='app__userbar'>
      <form onSubmit={context.onSubmit} className='app__userbar-form'>
        {context.isLoggedIn ? 
          <p className='app__userbar-msg'>Logged in as: <span>{context.userInfo[0]}</span></p> :
          <>
            <div className='app__userbar-formfield'>
              <label>Username: </label>
              <input type='text' name='username' required />
            </div>
            <div className='app__userbar-formfield'>
              <label>Password: </label>
              <input type='password' name='password' required />
            </div>           
          </>
        }       
        <input type='submit' value={context.isLoggedIn ? 'Logout' : 'Login'} className='app__userbar-btn'/>
      </form>
    </nav>
  );
}

export default UserBar;