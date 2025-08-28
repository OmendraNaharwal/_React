import { createContext, useReducer } from "react";
import Post from "../components/Post";


export const PostListContext = createContext({
  postlist: [],
  addpost: () => {},
  deletepost: () => {}
});

const postlistreducer = (currpostlist ,action) =>{
  let newpostlist = currpostlist;
  if(action.type === "DELETE"){
    newpostlist = currpostlist.filter(post => post.id !== action.payload);
  }else if(action.type === "ADD") {
    newpostlist = [ action.payload, ...currpostlist];
  }
  return newpostlist;
}

export const PostListProvider = ({children})=>{

  const [postlist, dispatchpostlist] = useReducer(
    postlistreducer,
    Default_postlist
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

  const deletepost =(postid) =>{
    dispatchpostlist({type: 'DELETE', payload: postid});
  }

  return (
    <PostListContext.Provider value={{
      postlist,
      addpost,
      deletepost
    }}>
      {children}
    </PostListContext.Provider>
  )
}

const Default_postlist = [
  {
  id: 1,
  title: "kaha jaa rahe hoo?",
  body: "Abhay ko chodne qki wooh raand hai",
  reaction: "15+",
  userId: 'user-9',
  tags: ["Randi" , "Bitch" , "Abhay"]
},
{
  id: 2,
  title: "Tume ky psnd hai?",
  body: "Pradeep ke Boobs Badiya hai!",
  reaction: "20+",
  userId: 'user-6',
  tags: ["pradeep_kumar" , "Boobs"]
}
];

// export default PostListProvider;