import { FaDeleteLeft } from "react-icons/fa6";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post=({post})=>{

  const {deletepost} = useContext(PostListContext);

  return (
    <div className="card post-card" >
      <div className="card-body">
        <h5 className="card-title" >
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletepost(post.id)}>
            <FaDeleteLeft />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        <div className="post-footer"></div>
          {post.tags.map((tag) => (
            <span key={tag} className="badge bg-secondary me-1 hashtag">{tag}</span>
          ))}
          <div className="alert alert-success reaction" role="alert">
          This post has been reacted by {post.reaction} people.
        </div>
      </div>
    </div>
  )
}
export default Post;