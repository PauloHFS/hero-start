import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Root } from './routes/Root';
import { backend } from './services/backend';

console.log({
  MODE: import.meta.env.MODE,
});

backend
  .get('/health')
  .then(response =>
    console.log({
      heroApiStatus: response.data,
    })
  )
  .catch(err => {
    alert('API ERROR - SEE CONSOLE!');
    console.error(err);
  });

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
