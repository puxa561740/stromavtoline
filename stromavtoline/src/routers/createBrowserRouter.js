import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../App';
import Aboutcompany from '../components/AboutCompany/aboutcompany';
import Contacts from "../components/Contacts/contact";
import Catalog from "../components/Сatalog/catalog";

const router = createBrowserRouter (
  [
    {
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "contacts",
          element: <Contacts/>,
        },
        {
          path: "aboutcompany",
          element: <Aboutcompany/>,
        },
        {
          path: "catalog",
          element: <Catalog/>,
        },
      ]
    },
  ]
)

export default function Rout() {
  return (
    <RouterProvider router = {router}/>
  )
}
