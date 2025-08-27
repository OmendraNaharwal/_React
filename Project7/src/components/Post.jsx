const Post=({post})=>{
  return (
    <div className="card post-card" 
    style={{ margin: "10px", padding: "20px", width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        
      </div>
    </div>
  )
}
export default Post;