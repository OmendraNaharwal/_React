import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcomemsg from "./Welcomemsg";

const Postlist = () => {
  const { postlist, addposts } = useContext(PostListContext);

  const handlegetpostclick=()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addposts(data.posts);
    });
  }
  return (
    <div>
      {
        postlist.length===0 && <Welcomemsg ongetposts={handlegetpostclick} />
      }
      {postlist.map((post) => (<Post key={post.id} post={post} />
    ))}
    </div>
  );
}

export { Postlist };