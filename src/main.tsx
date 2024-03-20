import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router';
import './styles/index.css'
import { initializeSentry } from './clients/initializeSentry';

const queryClient = new QueryClient();
initializeSentry();

ReactDOM.createRoot(document.getElementById('root')!).render(  
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)
