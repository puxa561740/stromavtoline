import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../App';
import Aboutcompany from '../components/AboutCompany/aboutcompany';
import Contacts from "../components/Contacts/contact";
import Catalog from "../components/Сatalog/catalog";
import Main from "../components/Main/main";


const router = createBrowserRouter (
  [{
    basename: "/stromavtoline",
  },
    {
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'main',
          element: <Main />,
          
        },
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
