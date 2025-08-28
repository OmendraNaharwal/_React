import { useContext,useEffect,useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Welcomemsg from "./Welcomemsg";
import Loading from "./loading";

const Postlist = () => {
  const { postlist, addposts } = useContext(PostListContext);

  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addposts(data.posts);
        setfetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  
  return (
    <div>
      {fetching && <Loading />}
      {
        !fetching && postlist.length===0 && <Welcomemsg />
      }
      { !fetching && postlist.map((post) => (<Post key={post.id} post={post} />
    ))}
    </div>
  );
}

export { Postlist };