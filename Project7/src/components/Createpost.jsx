import { useContext, useRef } from "react"
import {Postlist} from "./Postlist";
import { PostListContext } from "../store/post-list-store";

const Createpost = () =>{
  const {addpost} = useContext(PostListContext);

  const userIdelement = useRef();
  const titleelement = useRef();
  const bodyelement = useRef();
  const reactionelement = useRef();
  const tagselement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userId = userIdelement.current.value;
    const posttitle = titleelement.current.value;
    const postbody = bodyelement.current.value;
    const reaction = reactionelement.current.value;
    const tags = tagselement.current.value.split(" ");

    userIdelement.current.value = "";
    titleelement.current.value = "";
    bodyelement.current.value = "";
    reactionelement.current.value = "";
    tagselement.current.value = "";

    addpost(userId, posttitle, postbody, reaction, tags);
  };

  return (
    <form className="create-post" onSubmit={handlesubmit}>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input 
        type="text" 
        ref={userIdelement}
        className="form-control" 
        id="userId" 
        placeholder="Your User ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input 
        type="text" 
        ref={titleelement}
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
        ref={bodyelement}
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
        ref={reactionelement}
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
        ref={tagselement}
        className="form-control" 
        id="tags" 
        placeholder="Enter post tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>

    </form>
  )
}
export default Createpost