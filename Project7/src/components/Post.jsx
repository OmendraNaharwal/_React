import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  // Handle reactions - check if it's an object or a number
  const getReactionCount = (reactions) => {
    if (typeof reactions === 'object' && reactions !== null) {
      // If reactions is an object with likes/dislikes
      return (reactions.likes || 0) + (reactions.dislikes || 0);
    }
    // If reactions is a number
    return reactions || 0;
  };

  const reactionCount = getReactionCount(post.reactions);

  return (
    <div className="card post-card mb-3" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags && Array.isArray(post.tags) && post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag me-1">
            #{tag}
          </span>
        ))}
        <div className="alert alert-success reactions mt-2" role="alert">
          This post has been reacted by {reactionCount} people.
          {typeof post.reactions === 'object' && post.reactions !== null && (
            <div className="mt-1">
              <small>
                👍 {post.reactions.likes || 0} likes | 👎 {post.reactions.dislikes || 0} dislikes
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;