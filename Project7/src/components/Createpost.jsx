import { Form, redirect } from "react-router-dom";

const Createpost = () => {
  return (
    <div className="create-post-container">
      <h2 className="mb-4">Create New Post</h2>
      <Form method="post" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input 
            type="text" 
            name="userId"
            className="form-control" 
            id="userId" 
            placeholder="Your User ID"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input 
            type="text" 
            name="title"
            className="form-control" 
            id="title" 
            placeholder="Enter post title"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea 
            rows="4"
            name="body"
            className="form-control" 
            id="body" 
            placeholder="Tell us more about it"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input 
            type="number"
            name="reactions"
            className="form-control" 
            id="reactions" 
            placeholder="Total Reactions"
            defaultValue="0"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Post Tags
          </label>
          <input 
            type="text"
            name="tags"
            className="form-control" 
            id="tags" 
            placeholder="Enter post tags separated by spaces"
          />
        </div>

        <button type="submit" className="btn btn-primary">Post</button>
      </Form>
    </div>
  )
}

export async function createPostAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  
  // Convert tags string to array
  postData.tags = postData.tags.split(' ').filter(tag => tag.trim() !== '');
  postData.reactions = parseInt(postData.reactions) || 0;
  
  console.log('Creating post:', postData);
  
  // Redirect to home after creating post
  return redirect("/");
}

export default Createpost;