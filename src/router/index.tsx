import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import FormCreatePage from "../pages/form/create";
import FormReadPage from "../pages/form/read";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <HomePage />    
  },
  {
    path: "/form/create",
    element: <FormCreatePage />,    
  },
  {
    path: "/form/read/:uuid",
    element: <FormReadPage />,
  },
]);

export default router;