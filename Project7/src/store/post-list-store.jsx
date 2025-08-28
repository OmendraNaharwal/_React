import { createContext, useReducer } from "react";
import Post from "../components/Post";


export const PostListContext = createContext({
  postlist: [],
  addpost: () => {},
  addposts : () => {},
  deletepost: () => {}
});

const postlistreducer = (currpostlist ,action) =>{
  let newpostlist = currpostlist;
  if(action.type === "DELETE"){
    newpostlist = currpostlist.filter(post => post.id !== action.payload);
  }else if(action.type === "ADD") {
    newpostlist = [ action.payload, ...currpostlist];
  }
  else if(action.type === "ADD_POSTS") {
    newpostlist = [ ...action.payload.posts, ...currpostlist];
  }
  return newpostlist;
}

export const PostListProvider = ({children})=>{

  const [postlist, dispatchpostlist] = useReducer(
    postlistreducer,
    []
  );

  const addpost = (userId, posttitle, postbody, reaction, tags) => {
    dispatchpostlist({
      type: 'ADD', 
      payload: { 
        id: Date.now(), 
        title: posttitle, 
        body: postbody, 
        reaction: reaction,
        userId: userId,
        tags: tags 
      }
    });
  }
  const addposts = (posts) => {
    dispatchpostlist({
      type: 'ADD_POSTS', 
      payload: { 
        posts
      }
    });
  }

  const deletepost =(postid) =>{
    dispatchpostlist({type: 'DELETE', payload: postid});
  }

  return (
    <PostListContext.Provider value={{
      postlist,
      addpost,
      deletepost,
      addposts 
    }}>
      {children}
    </PostListContext.Provider>
  )
}



// export default PostListProvider;