import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorBoundary from "../components/error/ErrorBoundary";
import Loading from "../components/common/Loading.tsx";
const HomePage = lazy(() => import('../pages/home'));
const FormCreatePage = lazy(() => import('../pages/form/create'));
const FormReadPage = lazy(() => import('../pages/form/read'));


function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        </ErrorBoundary>
      )    
    },
    {
      path: "/form/create",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <FormCreatePage />
          </Suspense>
        </ErrorBoundary>
      ),    
    },
    {
      path: "/form/read/:uuid",
      element: (
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <FormReadPage />
          </Suspense>
        </ErrorBoundary>
      ),
    },
  ]);

  return (         
    <RouterProvider router={routes} />            
  );
}



export default Router;