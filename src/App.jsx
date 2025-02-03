
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/assets/styles/App.css';
import { About, Contact, Experience, HomeLayout, Resume, Home, Services,} from "./pages";

 const router = createBrowserRouter([
    {
      path: "/",
      element:<HomeLayout />,
      children:[
        {
        index: true,
        element: <Home />, 
        },
        {
          path: "about",
          element:<About />,
        },
        {
          path:"contact",
          element:<Contact />,
        },
        {
          path:"experience",
          element:<Experience />,
        },
        {
          path: "resume",
          element:<Resume />,
        },
        {
          path: "services",
          element:<Services />,
        },

      ],
    },
  ]);



function App() {
  
  return <RouterProvider router = {router} />;
    
  
}


export default App
