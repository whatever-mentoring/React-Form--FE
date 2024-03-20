import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormReadPage from "../pages/form/read";
import HomePage from "../pages/home";
import FormCreatePage from "../pages/form/create";
import PageLayout from "../components/layout/PageLayout";

function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (  
        <PageLayout>
          <HomePage />
        </PageLayout>        
      )    
    },
    {
      path: "/form/create/:uuid",
      element: (
        <PageLayout>          
          <FormCreatePage />          
        </PageLayout>
      ),
    },
    {
      path: "/form/read/:uuid",
      element: (
        <PageLayout>
          <FormReadPage />
        </PageLayout>        
      ),
    },
  ]);

  return (         
    <RouterProvider router={routes} />            
  );
}



export default Router;