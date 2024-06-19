import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//import Todo from "./components/Todo";
//import Order from "./components/Order";
import Service from "./components/Service";
//import Service from "./components/Service";
import  NotFound  from "./components/NotFound";
import UseReducer from "./components/UseReducer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import UseForm from "./components/UseForm";
import Todo from "./components/Todo";
import TodoList from "./feature/cart/TodoList";
import Home from "./components/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const router=createBrowserRouter([
  {
    path:'/',
    element: <Service />,
    errorElement:<NotFound/>
  },
  {
    path:'/navbar',
    element:<Navbar/>,
  },
  {
    path:'/form',
    element:<UseForm/>,
  },
  {
    path:'/todo',
    element:<Todo/>,
  },
  {
    path:'/todoss',
    element:<TodoList/>,
  },
  {
    path:'/reducers',
    element:<UseReducer/>,
  },
  {
    path:'/home',
    element:<Home/>,
  }
])
const queryClient = new QueryClient();


function App() {
 

  return (
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router}/>
     <ReactQueryDevtools/>
   </QueryClientProvider>
 // <div><UseReducer/></div>
  );
}

export default App;
