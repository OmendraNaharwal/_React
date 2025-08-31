import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import Welcomemsg from "./Welcomemsg";
import { Suspense } from "react";

const Postlist = () => {
  const postList = useLoaderData();

  return (
    <div className="post-list">
      {(!postList || postList.length === 0) && <Welcomemsg />}
      {postList && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Postlist;