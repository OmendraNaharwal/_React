import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Postlist from './components/Postlist.jsx'
import Createpost, { createPostAction } from './components/Createpost.jsx'
import Loading from './components/loading.jsx'

export const postLoader = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Postlist />,
        loader: postLoader,
      },
      {
        path: '/create-post',
        element: <Createpost />,
        action: createPostAction,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider 
      router={router} 
      fallbackElement={<Loading />}
    />
  </StrictMode>,
)