import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home";
import FormCreatePage from "../pages/form/create";
import FormReadPage from "../pages/form/read";
import ErrorBoundary from "../components/error/ErrorBoundary";

function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      )    
    },
    {
      path: "/form/create",
      element: (
        <ErrorBoundary>
          <FormCreatePage />
        </ErrorBoundary>
      ),    
    },
    {
      path: "/form/read/:uuid",
      element: (
        <ErrorBoundary>
          <FormReadPage />
        </ErrorBoundary>
      ),
    },
  ]);

  return (         
    <RouterProvider router={routes} />            
  );
}



export default Router;