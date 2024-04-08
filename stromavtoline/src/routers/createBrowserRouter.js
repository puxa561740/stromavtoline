import Routes from './routes';
import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from '../contacts/contact';

const router = createBrowserRouter (
  [
    {
      path: '/',
      element: <Routes/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "contacts/:contactId",
      element: <Contact />,
    },
  ]
)

export default function Rout() {
  return (
    <RouterProvider router = {router}/>
  )
}
