import ErrorBoundary from "../error/ErrorBoundary";
import { Suspense } from "react"
import Loading from "../common/Loading.tsx";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

export default PageLayout;

