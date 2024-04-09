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
      path: '/stromavtoline',
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/stromavtoline/contacts",
          element: <Contacts/>,
        },
        {
          path: "/stromavtoline/aboutcompany",
          element: <Aboutcompany/>,
        },
        {
          path: "/stromavtoline/catalog",
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
