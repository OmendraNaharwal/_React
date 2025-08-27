import { createContext, useReducer } from "react";
import Post from "../components/Post";

// const Default_contect = {
//   postlist: [],
//   addpost: () => {},
//   deletepost: () => {}
// }

export const PostListContext = createContext({
  postlist: [],
  addpost: () => {},
  deletepost: () => {}
});

const postlistreducer = (currpostlist ,action) =>{
  return currpostlist;
}

const PostListProvider = ({children})=>{

  const [postlist, dispatchpostlist] = useReducer(
    postlistreducer,
    Default_postlist
  );

  const addpost = () => {
    
  }

  const deletepost =() =>{

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
  title: "Sex",
  body: "Abhay ko chodne qki wooh raand hai",
  reaction: 2,
  userId: 'user-9',
  tags: ["Randi" , "Beach" , "Abhay"]
},
{
  id: 2,
  title: "Boobs",
  body: "Pradeep ke Boobs Badiya hai!",
  reaction: 200,
  userId: 'user-6',
  tags: ["pradeep_kumar" , "Boobs"]
}
];

export default PostListProvider;
