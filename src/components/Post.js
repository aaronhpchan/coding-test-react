import { useContext } from "react";
import UserContext from "../context";

const Post = (props) => {  
  const context = useContext(UserContext);
  
  if(context.isLoggedIn) {
    return (
      <div  className='app__post'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <p>{context.userInfo.length ? context.userInfo[0] : props.author}</p>
      </div>
    )
  }
}

export default Post;