import { useContext, useRef } from "react"
import {Postlist} from "./Postlist";
import { PostListContext } from "../store/post-list-store";

const Createpost = () =>{
  const {addpost} = useContext(PostListContext);

  const userId = useRef();
  const title = useRef();
  const body = useRef();
  const reaction = useRef();
  const tags = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className="create-post" onSubmit={handlesubmit}>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter User ID
        </label>
        <input 
        type="text" 
        ref={userId}
        className="form-control" 
        id="userId" 
        placeholder="Enter User ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input 
        type="text" 
        ref={title}
        className="form-control" 
        id="title" 
        placeholder="Enter post title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea 
        rows = "4"
        ref={body}
        className="form-control" 
        id="body" 
        placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of Reactions
        </label>
        <input 
        type="number"
        ref={reaction}
        className="form-control" 
        id="reaction" 
        placeholder="Total Reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post Tags
        </label>
        <input 
        type="text"
        ref={tags}
        className="form-control" 
        id="tags" 
        placeholder="Enter post tags"
        />
      </div>
      
    </form>
  )
}
export default Createpost